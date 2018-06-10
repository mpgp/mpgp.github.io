import { async, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialModule } from '@app/shared/material.module';

import { AppRootComponent } from './app-root.component';

describe('AppRootComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MaterialModule, RouterTestingModule],
      declarations: [AppRootComponent],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a toolbar', async(() => {
    const fixture = TestBed.createComponent(AppRootComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const title = compiled.querySelector('mat-sidenav-container > mat-sidenav-content > app-sidenav-content > mat-toolbar > span');
    expect(title.textContent).toContain('MPGP Documentation');
  }));
});
