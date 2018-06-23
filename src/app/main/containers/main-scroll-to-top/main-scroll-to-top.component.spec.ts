import { async, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { containers } from '../';
import { components } from '../../components';

import { MainScrollToTopComponent } from './main-scroll-to-top.component';

describe('MainScrollToTopComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RouterTestingModule],
      declarations: [...components, ...containers],
    }).compileComponents();
  }));

  it('should render', async(() => {
    const fixture = TestBed.createComponent(MainScrollToTopComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
