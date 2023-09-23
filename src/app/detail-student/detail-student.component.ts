import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../students';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent {
//Wydobycie id z tego url i pobrniae dnaych o studencie
//Zbudowanie zawartosci komponentow pochodnych 
//Uzycie komponentow pochondych o tym komponenice
student! : Student;

constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService){
  
this. activatedRoute.params.subscribe(param=>{
  alert("Przekazano id: " + param["id"]);
  this.studentService.getStudentByID(param["id"]).subscribe(data=>{
    this.student = data;
  });
  
})
}

}
