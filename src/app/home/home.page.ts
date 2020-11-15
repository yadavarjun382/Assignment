import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showsearchbar : boolean= false;
  constructor(public router : Router) {}

  category(type){
      this.router.navigate(['products',type]);
  }

  searchbar(event){
      console.log(event.detail.value);
  }

  search(){
    this.showsearchbar = true;
  }

  hidesearchbar(){
    this.showsearchbar = false;
  }
}
