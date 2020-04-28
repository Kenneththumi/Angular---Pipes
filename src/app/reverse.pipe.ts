import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure:  false
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
     return value.split("").reverse().join("");
      
      // let targets = [];

      // for(let target of value ){
      //     //split, reverse and join the string instanceType
      //     target.instanceType = target.instanceType.split("").reverse().join("");

      //     //store in a  array targets
      //     targets.push(target);
      // }
       
      // return targets;

  }

}
