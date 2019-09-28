import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilaresComponent } from './similares.component';

describe('SimilaresComponent', () => {
  let component: SimilaresComponent;
  let fixture: ComponentFixture<SimilaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
