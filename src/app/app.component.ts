import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
import { Photo } from './photo';
import { FormControl } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  search = new FormControl('');
  photos: Photo[];


  constructor(private photosService: PhotosService) { }

  ngOnInit() {
  }

  getPhotos(): void {
    this.photosService.getPhotos(this.search.value)
    .subscribe(photos => this.photos = photos);
  }
}
