import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appId'
})
export class AppIdPipe implements PipeTransform {

  transform(url: string): string {
    let splitArr: Array<string> = url.split('/');
    let len: number = splitArr.length-1;
    return splitArr[len];
  }

}
