import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContentPageComponent } from './show-content-page.component';

describe('ShowContentPageComponent', () => {
  let component: ShowContentPageComponent;
  let fixture: ComponentFixture<ShowContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowContentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
