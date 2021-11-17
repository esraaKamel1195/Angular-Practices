import { Component, OnInit } from '@angular/core';
import { MediaItemService, MediaItem } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.scss'],
})

export class MediaItemListComponent implements OnInit {
  public medium = '';
  public mediaItems: MediaItem[] = [];

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit () {
    this.getMediaItems(this.medium);  
  }

  onMediaItemDelete(mediaItem: any) {
    this.mediaItemService.delete(mediaItem)
    .subscribe(() => {
      this.getMediaItems(this.medium);
    });
  }

  getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
}
