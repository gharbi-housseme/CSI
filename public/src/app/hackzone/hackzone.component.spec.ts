import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackzoneComponent } from './hackzone.component';

describe('HackzoneComponent', () => {
  let component: HackzoneComponent;
  let fixture: ComponentFixture<HackzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
