import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaItemListComponent } from './media-item-list.component';

const routes: Routes = [
  { 
    path: 'add', 
    loadChildren: () => import('./new-item/new-item.module').then(m => m.NewItemModule)
  },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
