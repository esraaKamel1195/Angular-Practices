import { Component, OnInit } from '@angular/core';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.scss'],
})

export class MediaItemListComponent implements OnInit {
  public mediaItems: any[] = [];

  constructor(private mediaItemservice: MediaItemService) {}

  ngOnInit () {
    this.mediaItems = this.mediaItemservice.get();
  }

  onMediaItemDelete(mediaItem: any) {
    this.mediaItemservice.delete(mediaItem);
  }
}
