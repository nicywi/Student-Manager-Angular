import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../students';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  //Napisac request typu GET do pobrania danych studenta o określonym id - StudentService
  //Upewnimy sie ze dane sa w porzadku 
  //Zbudujemy draft formularza edycji
  //Bootstrap -> ostylowanie formularza
  student!: Student;

  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService) {
    this.activatedRoute.params.subscribe(param => {
      alert('Przekazano parametr: ' + param["id"]);
      this.studentService.getStudentByID(param["id"]).subscribe(data => {
        this.student = data;
        console.log(this.student);
      })
    });

  }

}
