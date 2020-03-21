import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackmeComponent } from './hackme.component';

describe('HackmeComponent', () => {
  let component: HackmeComponent;
  let fixture: ComponentFixture<HackmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
