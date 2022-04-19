import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedItemComponent } from './med-item.component';

describe('MedItemComponent', () => {
  let component: MedItemComponent;
  let fixture: ComponentFixture<MedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
