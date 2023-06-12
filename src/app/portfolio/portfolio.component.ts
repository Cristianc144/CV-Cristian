import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(private appComponent: AppComponent, private router: Router){}

  repositorio1: any = [];
  repositorio2: any = [];
  repositorio3: any = [];

  ngOnInit() {
    this.appComponent.getRepositorio1().subscribe((data) => {
      this.repositorio1 = data;
      console.log("esta data de api que arroja?")
      console.log(this.repositorio1)
    });

    this.appComponent.getRepositorio2().subscribe((data) => {
      this.repositorio2 = data;
      console.log("esta data de api que arroja?")
      console.log(this.repositorio2)
    });

    this.appComponent.getRepositorio3().subscribe((data) => {
      this.repositorio3 = data;
      console.log("esta data de api que arroja?")
      console.log(this.repositorio3)
    });
  }
}
