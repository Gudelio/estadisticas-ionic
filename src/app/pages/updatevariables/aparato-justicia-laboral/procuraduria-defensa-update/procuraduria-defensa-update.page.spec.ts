import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcuraduriaDefensaUpdatePage } from './procuraduria-defensa-update.page';

describe('ProcuraduriaDefensaUpdatePage', () => {
  let component: ProcuraduriaDefensaUpdatePage;
  let fixture: ComponentFixture<ProcuraduriaDefensaUpdatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcuraduriaDefensaUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcuraduriaDefensaUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
