import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

constructor(private adminService: AdminService) { }
  educations: any[] = [];

  ngOnInit() {
    this.adminService.getEducations().subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }

  private handleUpdateResponse(educations: any[]) {
    this.educations = educations;
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des educations :', error);
  } 


  /* educations: any[] = [
    {
        school: 'EPF',
        startDate: new Date(2020, 0, 1),
        endDate: new Date(2022, 11, 31),
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Praesent tincidunt nulla et mi egestas, id porta tellus tristique. Donec vitae risus consectetur, facilisis velit nec, accumsan arcu. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ligula eget magna ornare rutrum. Quisque at dui ut ipsum finibus blandit. 
        Suspendisse non diam mauris. Nam tristique arcu in velit auctor venenatis. Curabitur sollicitudin fermentum enim ac feugiat. 
        Mauris feugiat augue quam, quis pretium dolor sollicitudin eu. Nunc sit amet posuere ex, non auctor libero.`,
        logoUrl: 'assets/imagesEcoles/EPF.png'
    },
    {
        school: 'St Erembert',
        startDate: new Date(2018, 6, 1),
        endDate: new Date(2020, 5, 30),
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt nulla et mi 
        egestas, id porta tellus tristique. Donec vitae risus consectetur, facilisis velit nec, accumsan arcu. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ligula eget magna ornare rutrum. 
        Quisque at dui ut ipsum finibus blandit. Suspendisse non diam mauris. Nam tristique arcu in velit auctor venenatis. 
        Curabitur sollicitudin fermentum enim ac feugiat. 
        Mauris feugiat augue quam, quis pretium dolor sollicitudin eu. Nunc sit amet posuere ex, non auctor libero.`,
        logoUrl: 'assets/imagesEcoles/lyceeInter.png'
    }
]; */
}
