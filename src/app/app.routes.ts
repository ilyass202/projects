import { Routes } from '@angular/router';
import { CreatePostComponent } from './compenents/create-post/create-post.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { SearchComponentComponent } from './search-component/search-component.component';

export const routes: Routes = [
     {
        path : 'createpost' , component: CreatePostComponent
     },
     {
      path : 'viewall' , component : ViewAllComponent
     },
     {
      path : 'viewpost/:id' , component : ViewPostComponent
     },
     {
      path : 'search' , component : SearchComponentComponent
     }
    
];
