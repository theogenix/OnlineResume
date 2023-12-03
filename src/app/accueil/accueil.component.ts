import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  constructor(private adminService: AdminService) { }
  accueils: any[] = [];

  ngOnInit() {
    this.adminService.getAccueils().subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }

  private handleUpdateResponse(accueils: any[]) {
    this.accueils = accueils;
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des éléments dacceuil :', error);
  } 
  downloadPdf(pdfPath: string) {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

