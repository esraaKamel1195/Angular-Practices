import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'mw-media-item',
    templateUrl: './media-item.component.html',
    styleUrls: ['./media-item.component.scss']
})

export class MediaItemComponent {
    @Input() mediaItem: any = {};
    @Output() delete = new EventEmitter();

    onDelete() {
        this.delete.emit(this.mediaItem);
    }
}