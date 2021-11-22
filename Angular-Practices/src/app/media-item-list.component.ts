import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaItemService, MediaItem } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.scss'],
})

export class MediaItemListComponent implements OnInit {
  public medium = '';
  public mediaItems: MediaItem[] = [];

  constructor(
    private mediaItemService: MediaItemService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit () {
    this.activateRoute.paramMap.subscribe(
      paramMap => {
        let medium = paramMap.get('medium');
        console.log(medium);
        if( medium?.toLowerCase() === 'all')
        {
          medium = '';
        }
        this.getMediaItems(this.medium);  
      });
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
