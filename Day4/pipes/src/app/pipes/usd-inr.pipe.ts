import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  // transform(value: number, ...args: unknown[]): unknown {
  //   return value*70;
  // }
  transform(value: number, ...args: number[]): unknown {
    const [x] = args;
    return value*x;
  }

}
