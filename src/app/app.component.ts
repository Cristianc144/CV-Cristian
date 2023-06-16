import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'cv-cristian';
  private apiUrl = 'https://api.github.com/repos/Cristianc144/Sistema-almacenamiento-Registros';
  private apiUrl2 = 'https://api.github.com/repos/Cristianc144/Paginaventas-JavaScript-cursoPlatzi';
  private apiUrl3 = 'https://api.github.com/repos/Cristianc144/Mokepon-game';
  private apiUrl4 = 'https://api.github.com/repos/Cristianc144/Contador-clicks';

  constructor(private http: HttpClient) { }

  ngOnInit(){
    AOS.init()
  }

  getRepositorio1() {
    return this.http.get(this.apiUrl);
  }

  getRepositorio2() {
    return this.http.get(this.apiUrl2);
  }

  getRepositorio3() {
    return this.http.get(this.apiUrl3);
  }

  getRepositorio4() {
    return this.http.get(this.apiUrl4);
  }

}
