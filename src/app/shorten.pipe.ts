import { PipeTransform, Pipe } from "@angular/core";

/*  any pipe class should have a @pipe decorator in which you'lll define the name 
 *  of the pipe for use in view.
 *  It is also important to implement PipeTransform interface which requires one to use transform() mthd.
 *  Explore on the parameters of this method on their usage
 *  You MUST also declare this class in app.module.ts declarations
 */
@Pipe({
    name:'shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(value:any, length:number){
        if(value.length > length){
            return value.substr(0, length) + '...';
        }  
        else{
            return value;
        }
             
    }
}