import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasadesocupacionupdatePage } from './tasadesocupacionupdate.page';

describe('TasadesocupacionupdatePage', () => {
  let component: TasadesocupacionupdatePage;
  let fixture: ComponentFixture<TasadesocupacionupdatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TasadesocupacionupdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasadesocupacionupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
