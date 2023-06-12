import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private sanitizer: DomSanitizer){}

  downloadSpanishPDF() {
    const filePath = '../assets/CV-Spanish.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.target = '_blank';
    link.download = 'CV-Cristian-ES.pdf'; // Puedes personalizar el nombre del archivo aquí
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadEnglishPDF() {
    const filePath = '../assets/CV-English.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.target = '_blank';
    link.download = 'CV-Cristian-EN.pdf'; // Puedes personalizar el nombre del archivo aquí
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
