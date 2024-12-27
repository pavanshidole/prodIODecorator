import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PordFormComponent } from './pord-form.component';

describe('PordFormComponent', () => {
  let component: PordFormComponent;
  let fixture: ComponentFixture<PordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PordFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
