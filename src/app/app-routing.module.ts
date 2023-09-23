import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';

//localhost:4200/add-student -> CreateStudentComponent
//loclahost: 4200/students -> StudentsList Component

const routes: Routes = [
  {path: "add-student", component: CreateStudentComponent},
  {path: "students", component: StudentsListComponent},
  {path: "edit-student/:id", component: EditStudentComponent},
  {path: "detail-student/:id", component: DetailStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
