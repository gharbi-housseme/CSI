import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzformComponent } from './hzform.component';

describe('HzformComponent', () => {
  let component: HzformComponent;
  let fixture: ComponentFixture<HzformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HzformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
