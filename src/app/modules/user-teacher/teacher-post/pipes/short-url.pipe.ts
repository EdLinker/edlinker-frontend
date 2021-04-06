import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortUrl'
})
export class ShortUrlPipe implements PipeTransform {

  transform(url: string, args?: any): any {
    if (url) {
      const len = url.length;
      if (len > 30)
        {return url.substr(0, 21) + '...' + url.substring(len - 9, len);}
      return url;
    }
    return url;
  }
}
