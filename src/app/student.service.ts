import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
  //metoda odpowiedzialna za pobieranie studentow z aplikacji backendowej
  getStudents(){
return this.httpClient.get<Student[]>("https://jsonplaceholder.typicode.com/users");
  }
}
