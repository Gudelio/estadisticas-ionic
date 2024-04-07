import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasaDesocupaciongPage } from './tasa-desocupaciong.page';

describe('TasaDesocupaciongPage', () => {
  let component: TasaDesocupaciongPage;
  let fixture: ComponentFixture<TasaDesocupaciongPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TasaDesocupaciongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasaDesocupaciongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
