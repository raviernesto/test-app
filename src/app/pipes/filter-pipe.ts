import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'filter'    
})
export class FilterPipe implements PipeTransform {
    transform(items:any[] | null ,searchText: string): any[] {
        if(!items)
            return [];
        if(!searchText)
            return items;
        searchText = searchText.toLowerCase();
            return items.filter(v => (v.toLowerCase().includes(searchText)));

    }
}