import { Component } from '@angular/core';
import{faBasketball} from '@fortawesome/free-solid-svg-icons';
import{faTableTennis} from '@fortawesome/free-solid-svg-icons';
import{faPersonSwimming} from '@fortawesome/free-solid-svg-icons';
import{faBitcoin} from '@fortawesome/free-brands-svg-icons';
import{faVideo} from '@fortawesome/free-solid-svg-icons';
import{faShuttleSpace} from '@fortawesome/free-solid-svg-icons';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
})

export class HobbiesComponent {
  
constructor(private adminService: AdminService) { }
  hobbies: any[] = [];

  ngOnInit() {
    this.adminService.getHobbies().subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }
  private getIconByName(iconName: string) {
    switch (iconName) {
      case 'faBasketball':
        return faBasketball;
      case 'faTableTennis':
        return faTableTennis;
      case 'faBitcoin':
        return faBitcoin;
      case 'faVideo':
        return faVideo;
      case 'faShuttleSpace':
        return faShuttleSpace;
      case 'faPersonSwimming':
        return faPersonSwimming    
      default:
        return null; 
    }
  }

  private handleUpdateResponse(hobbies: any[]) {
    this.hobbies = hobbies.map(hobby => ({
      ...hobby,
      icon: this.getIconByName(hobby.logo)
    }));
    console.log(this.hobbies)
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des hobbies :', error);
  } 
}
