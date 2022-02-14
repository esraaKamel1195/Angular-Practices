import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpXhrBackend} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { MediaItemComponent } from "./media-item.component";
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { LookUpListToken, lookupLists } from "./provider";
import { MockXHRBackend } from "./mock-xhr-backend";
import { NewItemModule } from "./new-item/new-item.module";
import { CategoryListComponent } from './category-list.component';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NewItemModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    CategoryListComponent
  ],
  providers: [
    { provide: LookUpListToken, useValue: lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}