import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHeroeComponent } from './crear-heroe.component';

describe('CrearHeroeComponent', () => {
  let component: CrearHeroeComponent;
  let fixture: ComponentFixture<CrearHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
