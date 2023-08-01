import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadAutomcompleteComponent } from './localidad-automcomplete.component';

describe('LocalidadAutomcompleteComponent', () => {
  let component: LocalidadAutomcompleteComponent;
  let fixture: ComponentFixture<LocalidadAutomcompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalidadAutomcompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalidadAutomcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
