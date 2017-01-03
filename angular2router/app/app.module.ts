import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './components/app/app.component';
import { VideosComponent } from './components/videos/videos.component';
import { PhotosComponent } from './components/photos/photos.component';
import { AlbumsComponent } from './components/albums/albums.component';


const appRoutes: Routes = [
  {path: 'photos', component: PhotosComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'videos', component: VideosComponent}
];

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    PhotosComponent,
    VideosComponent,
    AlbumsComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
