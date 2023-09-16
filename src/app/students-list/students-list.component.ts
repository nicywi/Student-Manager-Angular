import { Component } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  isLoaded = false;
  btnTitle = "Show";

  search(){
    console.log("Kliknelo przycisk Search");
    this.isLoaded = !this.isLoaded;

    if(this.isLoaded){
      this.btnTitle = "Hide"
    }else{
      this.btnTitle = "Show";
    }
  }


}
