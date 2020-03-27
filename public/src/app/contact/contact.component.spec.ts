import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixturee = TestBed.createComponent(ContactComponent);
    const app = fixturee.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it(`should have as title 'angular8-submissions-app'`, () => {
    const fixturee = TestBed.createComponent(ContactComponent);
    const app = fixturee.debugElement.componentInstance;
    expect(app.title).toEqual('angular8-submissions-app');
  });

  it('should render title in a h1 tag', () => {
    const fixturee = TestBed.createComponent(ContactComponent);
    fixturee.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular8-submissions-app!');
  });
});




  

