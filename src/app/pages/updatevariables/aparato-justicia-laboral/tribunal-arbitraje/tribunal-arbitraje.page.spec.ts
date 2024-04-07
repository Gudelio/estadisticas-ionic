import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TribunalArbitrajePage } from './tribunal-arbitraje.page';

describe('TribunalArbitrajePage', () => {
  let component: TribunalArbitrajePage;
  let fixture: ComponentFixture<TribunalArbitrajePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TribunalArbitrajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TribunalArbitrajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
