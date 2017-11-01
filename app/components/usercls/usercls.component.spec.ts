import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserclsComponent } from './usercls.component';

describe('UserclsComponent', () => {
  let component: UserclsComponent;
  let fixture: ComponentFixture<UserclsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserclsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
