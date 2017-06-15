import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAssistantsComponent } from './personal-assistants.component';

describe('PersonalAssistantsComponent', () => {
  let component: PersonalAssistantsComponent;
  let fixture: ComponentFixture<PersonalAssistantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAssistantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAssistantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
