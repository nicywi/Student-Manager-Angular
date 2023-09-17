import { Component } from '@angular/core';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  save(name: string, email: string){
alert("Imie i nazwisko: " + name + ", email: " + email);

    return false;
  
  }

}
