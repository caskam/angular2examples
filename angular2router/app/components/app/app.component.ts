import { Component } from '@angular/core';
import { VideosComponent } from '../videos/videos.component';
import { PhotosComponent } from '../photos/photos.component';
import { AlbumsComponent } from '../albums/albums.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular Route Sample</h1>
    <nav>
      <a routerLink="/photos" routerLinkActive="active">Photos</a>
      <a routerLink="/albums" routerLinkActive="active">Albums</a>
      <a routerLink="/videos" routerLinkActive="active">Videos</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent  {  }
