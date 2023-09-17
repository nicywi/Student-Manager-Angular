import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { delay } from 'rxjs';
import { Student } from '../students';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  isLoaded = false;
  btnTitle = "Pokaż";
  students: Student[] = [];
  isDataSearching = false;
  isErrorOccured = false;

  constructor(private studentService: StudentService) {

  }

  search() {
    console.log("Kliknięto przycisk Wyszukaj!");
    this.isLoaded = !this.isLoaded;

    if (this.isLoaded) {

      this.isDataSearching = true;
      this.btnTitle = "Wyszukiwanie...";
      this.students = [];

      this.studentService.getStudents()
        .pipe(delay(2000))
        .subscribe({
          next: data => {
            console.log("wewnatrz subscribe");
            console.log(data);
            this.students = data;

            this.isDataSearching = false;
            this.btnTitle = "Ukryj"
          },
          error: ()=>{
            this.isDataSearching = false;
            this.isLoaded = false;
            this.btnTitle = "Pokaż"
            this.isErrorOccured = true;
          },
        });

      console.log("poza subscribe");
    } else {
      this.btnTitle = "Pokaż";
    }

  }

  delete(id: number){
    alert("Kliknieto przycisk usun. Na studencie o id = " + id);
  }
}