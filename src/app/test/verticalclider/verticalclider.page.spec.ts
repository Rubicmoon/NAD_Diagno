import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerticalcliderPage } from './verticalclider.page';

describe('VerticalcliderPage', () => {
  let component: VerticalcliderPage;
  let fixture: ComponentFixture<VerticalcliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalcliderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalcliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
