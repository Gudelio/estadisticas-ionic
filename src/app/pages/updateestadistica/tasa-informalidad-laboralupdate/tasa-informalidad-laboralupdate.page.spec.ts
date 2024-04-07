import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasaInformalidadLaboralupdatePage } from './tasa-informalidad-laboralupdate.page';

describe('TasaInformalidadLaboralupdatePage', () => {
  let component: TasaInformalidadLaboralupdatePage;
  let fixture: ComponentFixture<TasaInformalidadLaboralupdatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TasaInformalidadLaboralupdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasaInformalidadLaboralupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
