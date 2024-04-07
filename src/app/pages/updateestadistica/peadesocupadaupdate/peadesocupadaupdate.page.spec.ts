import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PEADesocupadaupdatePage } from './peadesocupadaupdate.page';

describe('PEADesocupadaupdatePage', () => {
  let component: PEADesocupadaupdatePage;
  let fixture: ComponentFixture<PEADesocupadaupdatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PEADesocupadaupdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PEADesocupadaupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
