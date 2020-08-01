import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NakagaiiPage } from './nakagaii.page';

describe('NakagaiiPage', () => {
  let component: NakagaiiPage;
  let fixture: ComponentFixture<NakagaiiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NakagaiiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NakagaiiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
