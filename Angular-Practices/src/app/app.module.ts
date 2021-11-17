import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpXhrBackend} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemFormComponent } from './media-item-form.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { LookUpListToken, lookupLists } from "./provider";
import { MockXHRBackend } from "./mock-xhr-backend";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
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
    { provide: LookUpListToken, useValue: lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}