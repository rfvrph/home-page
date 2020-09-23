import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReaderLocaltxtComponent } from './reader-localtxt.component';

describe('ReaderLocaltxtComponent', () => {
  let component: ReaderLocaltxtComponent;
  let fixture: ComponentFixture<ReaderLocaltxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderLocaltxtComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReaderLocaltxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
