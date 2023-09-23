import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../students';
import { delay } from 'rxjs';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
//Request typu PUT ->



  //Napisac request typu GET do pobrania danych studenta o określonym id - StudentService
  //Upewnimy sie ze dane sa w porzadku 
  //Zbudujemy draft formularza edycji
  //Bootstrap -> ostylowanie formularza
  student!: Student;
  isSuccessUpdate =false;
  isUpdateProcessing = false;

  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService) {
    this.activatedRoute.params.subscribe(param => {
      alert('Przekazano parametr: ' + param["id"]);
      this.studentService.getStudentByID(param["id"]).subscribe(data => {
        this.student = data;
        console.log(this.student);
      })
    });

  }

  save(){
    this.isUpdateProcessing = true;

    this.studentService.updateStudent(this.student).pipe(delay(2000))
      .subscribe(data=>{
          //alert("Dokonano aktualizacji!")
          this.isSuccessUpdate = true;
          this.isUpdateProcessing =false;
        });
}

}
