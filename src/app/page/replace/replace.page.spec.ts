import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReplacePage } from './replace.page';

describe('ReplacePage', () => {
  let component: ReplacePage;
  let fixture: ComponentFixture<ReplacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReplacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
