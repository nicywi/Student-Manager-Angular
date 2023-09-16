import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../students';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  isLoaded = false;
  btnTitle = "Show";
  students: Student[] = [];

  constructor(private studentService: StudentService) {

  }

  search() {
    console.log("Kliknelo przycisk Search");
    this.isLoaded = !this.isLoaded;

    if (this.isLoaded) {
      this.btnTitle = "Hide"
      this.studentService.getStudents().subscribe(data => {
        console.log("wewnatrz subscribe");
        console.log(data);
        this.students = data
      });
      console.log("poza subscribe");

    } else {
      this.btnTitle = "Show";
    }

  }

}
