import { async, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MainRootComponent, pages } from '../';
import { components } from '../../components';
import { containers } from '../../containers';

describe('MainRootComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RouterTestingModule],
      declarations: [...components, ...containers, ...pages],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MainRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a toolbar', async(() => {
    const fixture = TestBed.createComponent(MainRootComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const title = compiled.querySelector('mat-sidenav-container > mat-sidenav-content > app-sidenav-content > mat-toolbar > span');
    expect(title.textContent).toContain('MPGP Documentation');
  }));
});
