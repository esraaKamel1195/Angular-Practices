import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemFormComponent } from './media-item-form.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';

const lookupLists = {
  mediums: ['Movies', 'Series']
};

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    MediaItemFormComponent,
    FavoriteDirective,
    CategoryListPipe
  ],
  providers: [
    { provide: 'lookUpListToken', useValue: lookupLists }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}