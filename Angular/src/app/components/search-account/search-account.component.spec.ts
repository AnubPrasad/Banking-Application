import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAccountComponent } from './search-account.component';

describe('SearchAccountComponent', () => {
  let component: SearchAccountComponent;
  let fixture: ComponentFixture<SearchAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAccountComponent]
    });
    fixture = TestBed.createComponent(SearchAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
