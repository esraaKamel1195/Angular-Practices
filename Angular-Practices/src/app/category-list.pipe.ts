import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
// export class CategoryListPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }
export class CategoryListPipe implements PipeTransform {
  transform( mediaItems: any [] ): string {
    const categories: string[] = [];
    mediaItems.forEach(mediaItem => {
      if( categories.indexOf(mediaItem.category) <= -1 )
        categories.push(mediaItem.category);
    })
    return categories.join(', ');
  }
}