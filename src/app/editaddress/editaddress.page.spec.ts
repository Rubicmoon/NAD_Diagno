import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditaddressPage } from './editaddress.page';

describe('EditaddressPage', () => {
  let component: EditaddressPage;
  let fixture: ComponentFixture<EditaddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditaddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
