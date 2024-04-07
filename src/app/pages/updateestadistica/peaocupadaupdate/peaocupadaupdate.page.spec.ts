import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PEAOcupadaupdatePage } from './peaocupadaupdate.page';

describe('PEAOcupadaupdatePage', () => {
  let component: PEAOcupadaupdatePage;
  let fixture: ComponentFixture<PEAOcupadaupdatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PEAOcupadaupdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PEAOcupadaupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
