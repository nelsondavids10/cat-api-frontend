import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBreedListComponent } from './cat-breed-list.component';

describe('CatBreedListComponent', () => {
  let component: CatBreedListComponent;
  let fixture: ComponentFixture<CatBreedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatBreedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatBreedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
