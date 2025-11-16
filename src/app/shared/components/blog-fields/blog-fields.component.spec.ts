import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFieldsComponent } from './blog-fields.component';

describe('BlogFieldsComponent', () => {
  let component: BlogFieldsComponent;
  let fixture: ComponentFixture<BlogFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogFieldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
