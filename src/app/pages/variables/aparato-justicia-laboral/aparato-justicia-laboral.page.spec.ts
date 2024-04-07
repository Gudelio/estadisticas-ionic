import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AparatoJusticiaLaboralPage } from './aparato-justicia-laboral.page';

describe('AparatoJusticiaLaboralPage', () => {
  let component: AparatoJusticiaLaboralPage;
  let fixture: ComponentFixture<AparatoJusticiaLaboralPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AparatoJusticiaLaboralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AparatoJusticiaLaboralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
