import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventrequirementsComponent } from './eventrequirements.component';

describe('EventrequirementsComponent', () => {
  let component: EventrequirementsComponent;
  let fixture: ComponentFixture<EventrequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventrequirementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventrequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
