import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CentroConciliacionUpdatePage } from './centro-conciliacion-update.page';

describe('CentroConciliacionUpdatePage', () => {
  let component: CentroConciliacionUpdatePage;
  let fixture: ComponentFixture<CentroConciliacionUpdatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroConciliacionUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CentroConciliacionUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
