import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcuraduriaDefensaPage } from './procuraduria-defensa.page';

describe('ProcuraduriaDefensaPage', () => {
  let component: ProcuraduriaDefensaPage;
  let fixture: ComponentFixture<ProcuraduriaDefensaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcuraduriaDefensaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcuraduriaDefensaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
