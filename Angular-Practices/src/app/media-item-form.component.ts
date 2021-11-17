import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { yearValidators } from './custom-validators';
import { MediaItem, MediaItemService } from "./media-item.service";
import { LookUpListToken } from "./provider";

@Component({
    selector: 'mw-media-item-form',
    templateUrl: './media-item-form.component.html',
    styleUrls: ['./media-item-form.component.scss']
})

export class MediaItemFormComponent implements OnInit {
    public form!: FormGroup;
  
    constructor(
      private mediaItemservice :MediaItemService,
      @Inject( LookUpListToken ) public lookupLists: any
    ) {}

    ngOnInit() {
      this.form = new FormGroup({
        medium: new FormControl('Movies'),
        name: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        category: new FormControl(''),
        year: new FormControl('', [yearValidators] ),
      });
    }
  
    onSubmit(mediaItem: MediaItem) {
      this.mediaItemservice.add(mediaItem)
      .subscribe();
    }
}