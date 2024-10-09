import { Component, OnInit } from '@angular/core';
import { CatBreedService } from '../../../services/cats/cat-breed.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cat-breed-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './cat-breed-list.component.html',
  styleUrls: ['./cat-breed-list.component.scss'],
  providers: [CatBreedService],
})
export class CatBreedListComponent implements OnInit {
  breeds: any[] = [];
  selectedBreed: any = null;
  images: string[] = [];
  displayedColumns: string[] = ['name', 'origin', 'temperament', 'life_span'];
  searchQuery: string = '';

  constructor(private catService: CatBreedService) {}

  ngOnInit(): void {
    this.loadBreeds();
  }

  loadBreeds(): void {
    this.catService.getBreeds().subscribe((data) => {
      this.breeds = data;
    });
  }

  onBreedSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    // Obtener información de la raza seleccionada
    this.catService.getImagesByBreedId(selectedValue).subscribe((data) => {
      this.selectedBreed = data[0].breeds[0]; // Obtiene la información de la raza
      this.images = [data[0].url]; // Almacena la URL de la imagen
    });
  }

  searchBreeds(): void {
    if (this.searchQuery) {
      this.catService.searchBreed(this.searchQuery).subscribe(data => {
        this.breeds = data;
      });
    } else {
      this.loadBreeds();
    }
  }

  clean(): void {
    this.loadBreeds();
  }
}
