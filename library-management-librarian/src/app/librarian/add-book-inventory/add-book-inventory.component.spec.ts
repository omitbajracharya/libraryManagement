import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookInventoryComponent } from './add-book-inventory.component';

describe('AddBookInventoryComponent', () => {
  let component: AddBookInventoryComponent;
  let fixture: ComponentFixture<AddBookInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
