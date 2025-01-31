import { Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';

export const routes: Routes = [
    {path:"", component: BlogHomeComponent},
    {path:"gallery", component: GalleryComponent},
    {path: "blog/detail/:id", component: BlogItemDetailsComponent}
];
