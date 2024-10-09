import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBreedDetailComponent } from './cat-breed-detail.component';

describe('CatBreedDetailComponent', () => {
  let component: CatBreedDetailComponent;
  let fixture: ComponentFixture<CatBreedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatBreedDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatBreedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
