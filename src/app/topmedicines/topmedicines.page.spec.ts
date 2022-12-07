import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopmedicinesPage } from './topmedicines.page';

describe('TopmedicinesPage', () => {
  let component: TopmedicinesPage;
  let fixture: ComponentFixture<TopmedicinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopmedicinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopmedicinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
