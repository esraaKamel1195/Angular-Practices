import { Component } from "@angular/core";

@Component({
    selector: 'mw-media-item-form',
    templateUrl: './media-item-form.component.html',
    styleUrls: ['./media-item-form.component.scss']
})

export class MediaItemFormComponent {
    onSubmit(mediaItem: {}) {
        console.log(mediaItem);
    }
}