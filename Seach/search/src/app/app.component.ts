import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './Model/list';
import { HttpService } from './Service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: string[];

  constructor(private httpService: HttpService){}

  searching(param:string){
    const result = this.httpService.searchData().subscribe(
      (itens) => this.list = itens.filter(
        (item) => item.startsWith(param)
        )
        );
  }

  onSubmit(){
    const query = (document.getElementById("searchKey")as any).value;
    this.searching(query);
  }
}
