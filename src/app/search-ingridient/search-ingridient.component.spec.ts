import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIngridientComponent } from './search-ingridient.component';

describe('SearchIngridientComponent', () => {
  let component: SearchIngridientComponent;
  let fixture: ComponentFixture<SearchIngridientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchIngridientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchIngridientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
