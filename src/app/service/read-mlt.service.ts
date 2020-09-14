import { Injectable } from '@angular/core';
import 'encoding-japanese';
@Injectable({
  providedIn: 'root'
})
export class ReadMltService {

  constructor() { }
  encode(filename, id) {
    let s;
    const req = new XMLHttpRequest();
    const url = '/assets/mlts/' + filename + '.txt';
    req.open('GET', url, true);
    req.responseType = 'arraybuffer';

    req.onload = (event) => {
      const buffer = req.response;
      if (buffer) {
        // Shift_JIS Array
        const sjisArray = new Uint8Array(buffer);

        // Convert encoding to UNICODE (JavaScript Unicode Array).
        const unicodeArray = Encoding.convert(sjisArray, {
          to: 'UNICODE',
          from: 'SJIS'
        });

        // Join to string.
        const unicodeString = Encoding.codeToString(unicodeArray);
        console.log(unicodeString);
        document.getElementById(id).innerHTML = unicodeString;
      }
    };
    req.send(null);
  }
}
