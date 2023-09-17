import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) { }
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

}
