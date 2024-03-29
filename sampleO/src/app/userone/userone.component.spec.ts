import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOneComponent } from './userone.component';

describe('UserOneComponent', () => {
  let component: UserOneComponent;
  let fixture: ComponentFixture<UserOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
