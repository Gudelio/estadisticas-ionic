import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasaInformalidadLaboralgPage } from './tasa-informalidad-laboralg.page';

describe('TasaInformalidadLaboralgPage', () => {
  let component: TasaInformalidadLaboralgPage;
  let fixture: ComponentFixture<TasaInformalidadLaboralgPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TasaInformalidadLaboralgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasaInformalidadLaboralgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
