import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerTareasPage } from './ver-tareas.page';

describe('VerTareasPage', () => {
  let component: VerTareasPage;
  let fixture: ComponentFixture<VerTareasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
