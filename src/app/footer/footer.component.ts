import { Component } from '@angular/core';
import { faFacebook, faXTwitter, faInstagram, faLinkedinIn, faGithub, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';
import { AdminService } from '../services/admin.service';
import { AnimationOptions } from 'ngx-lottie';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  hireMe: AnimationOptions = {
    path: '/assets/hireMe.json',
    };
constructor(private adminService: AdminService) { }
  footers: any[] = [];

  ngOnInit(){
    this.adminService.getFooters().subscribe({
      next:this.handleUpdateResponse.bind(this),
      error:this.handleError.bind(this)
    })
  }
  private getIconByName(iconName: string) {
    switch (iconName) {
      case 'faFacebook':
        return faFacebook;
      case 'faXTwitter':
        return faXTwitter;
      case 'faGithub':
        return faGithub;
      case 'faLinkedinIn':
        return faLinkedinIn;
      case 'faInstagram':
        return faInstagram;
      case 'faSnapchatGhost':
        return faSnapchatGhost;
      default:
        return null;
    }
  }

  private handleUpdateResponse(footers: any[]) {
    this.footers = footers.map(footer => ({
      ...footer,
      icon: this.getIconByName(footer.logo)
    }));
    console.log(this.footers);
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des footers :', error);
  } 
}
