import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasaInformalidadLaboraltPage } from './tasa-informalidad-laboralt.page';

describe('TasaInformalidadLaboraltPage', () => {
  let component: TasaInformalidadLaboraltPage;
  let fixture: ComponentFixture<TasaInformalidadLaboraltPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TasaInformalidadLaboraltPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasaInformalidadLaboraltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
