import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'emailmask'
})
export class EmailMaskPipe implements PipeTransform{

    transform(value: string, ...args: any[]) :string{
        if(value && value.length >= 6){
            return `${value.slice(0,2)}*****${value.slice(-4)}`;
        }else{
            return `****`;
        }
        return '';
    }

}