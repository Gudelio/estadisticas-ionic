import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasaDesocupaciontPage } from './tasa-desocupaciont.page';

describe('TasaDesocupaciontPage', () => {
  let component: TasaDesocupaciontPage;
  let fixture: ComponentFixture<TasaDesocupaciontPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TasaDesocupaciontPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasaDesocupaciontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
