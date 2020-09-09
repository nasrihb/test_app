import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesUtilisateursComponent } from './listes-utilisateurs.component';

describe('ListesUtilisateursComponent', () => {
  let component: ListesUtilisateursComponent;
  let fixture: ComponentFixture<ListesUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
