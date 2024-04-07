import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TribunalArbitrajeUpdatePage } from './tribunal-arbitraje-update.page';

describe('TribunalArbitrajeUpdatePage', () => {
  let component: TribunalArbitrajeUpdatePage;
  let fixture: ComponentFixture<TribunalArbitrajeUpdatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TribunalArbitrajeUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TribunalArbitrajeUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
