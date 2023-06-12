import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent {
  contactOpened : boolean;
  constructor(){}

  scrollHaciaAbout() {
    const about = document.getElementById('about');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollHaciaSkills() {
    const skills = document.getElementById('skills');
    if (skills) {
      skills.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollHaciaPortfolio() {
    const portfolio = document.getElementById('portfolio');
    if (portfolio) {
      portfolio.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollHaciaHome() {
    const portfolio = document.getElementById('home');
    if (portfolio) {
      portfolio.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
