import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCreationComponent } from './teacher-creation.component';

describe('TeacherCreationComponent', () => {
  let component: TeacherCreationComponent;
  let fixture: ComponentFixture<TeacherCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
