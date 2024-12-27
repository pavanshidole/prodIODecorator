import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDashBoaredComponent } from './prod-dash-boared.component';

describe('ProdDashBoaredComponent', () => {
  let component: ProdDashBoaredComponent;
  let fixture: ComponentFixture<ProdDashBoaredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdDashBoaredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdDashBoaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
