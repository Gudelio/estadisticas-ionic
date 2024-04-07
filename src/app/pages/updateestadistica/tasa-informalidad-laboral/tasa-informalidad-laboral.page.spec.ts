import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasaInformalidadLaboralPage } from './tasa-informalidad-laboral.page';

describe('TasaInformalidadLaboralPage', () => {
  let component: TasaInformalidadLaboralPage;
  let fixture: ComponentFixture<TasaInformalidadLaboralPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TasaInformalidadLaboralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasaInformalidadLaboralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
