import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  constructor(private adminService: AdminService) { }
  experiences: any[] = [];

  ngOnInit() {
    this.adminService.getExperiences().subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }

  private handleUpdateResponse(experiences: any[]) {
    this.experiences = experiences;
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des expériences :', error);
  }
}
