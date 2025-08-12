import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBannerDividerComponent } from './app-banner-divider.component';

describe('AppBannerDividerComponent', () => {
  let component: AppBannerDividerComponent;
  let fixture: ComponentFixture<AppBannerDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBannerDividerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBannerDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
