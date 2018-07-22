import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private photosUrl = 'https://api.flickr.com/services/rest/';

  constructor(private http: HttpClient) { }

  getPhotos(query: string): Observable<Photo[]> {
    const params = new HttpParams()
      .set('api_key', '24422162e2db1595139ac392f3d8073c')
      .append('method', 'flickr.photos.search')
      .append('text', query)
      .append('format', 'json')
      .append('nojsoncallback', '1')
      .append('safe_search', '3');

    return this.http.get<Photo[]>(this.photosUrl, { params })
      .pipe(
        map(this.extractData)
      )
  }

  private extractData(res: Response) {
    return (<any>res).photos.photo;
  }
}
