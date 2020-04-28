import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false      //ensures pipe recalculation when data is changed on the page pipe is being used 
})                  // It causes performance issue(incase of alot of data)
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string, propertyName:string): any {
      
       
       if( filterString == ''){
          return value;
       }

       let servers=[];

      for(let server of value){
           if(server[propertyName] == filterString){
                servers.push(server)
           }
      }
      
      return servers;
      //return value;

  }

}
