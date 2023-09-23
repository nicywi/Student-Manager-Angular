import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = "https://jsonplaceholder.typicode.com/users";


  constructor(private httpClient: HttpClient) { }

  //Metoda odpowiedzialana za pobieranie studenta o okreslonym id z aplikacji backend
getStudentByID(studentid: number){
  let studentUrl = this.url + "/" + studentid;
  return this.httpClient.get<Student>(studentUrl);
}

  //metoda odpowiedzialna za pobieranie studentow z aplikacji backendowej
  getStudents() {
    return this.httpClient.get<Student[]>(this.url);
  }

  //metoday odpowiedzialna za wysylanie zadania DELETE i usiniecie zasobu o okreslonym id
  deleteStudent(studentId: number) {
    //address_url
    let studentUrl = this.url + "/" + studentId;
    return this.httpClient.delete<Student>(studentUrl);
  }

  //metoda odpowiedzialna za wysylanie zadania POST
  addStudent(student: Student) {
    return this.httpClient.post<Student>(this.url, student);
  }

  //Metoda odpowiedzialna za wyslanie requesta PUT
  updateStudent(student: Student){
    let studentUrl = this.url + "/" + student.id;
    return this.httpClient.put<Student>(studentUrl, student);
  }

}
