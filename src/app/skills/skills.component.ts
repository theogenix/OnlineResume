import {  Component } from '@angular/core';
import { faHtml5, faJava, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faFileWord, faFileExcel, faFilePowerpoint, faLanguage, faEarthEurope } from '@fortawesome/free-solid-svg-icons';

import { AnimationOptions } from 'ngx-lottie';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  brain: AnimationOptions = {
    path: '/assets/brain.json',
    };

  previousLabel: string | undefined;

  constructor(private adminService: AdminService) { }
  skills: any[] = [];

  ngOnInit() {
    this.adminService.getSkills().subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }
  private getIconByName(iconName: string) {
    switch (iconName) {
      case 'faHtml5':
        return faHtml5;
      case 'faJava':
        return faJava;
      case 'faJs':
        return faJs;
      case 'faPython':
        return faPython;
      case 'faReact':
        return faReact;
      case 'faFileWord':
        return faFileWord
      case 'faFileExcel':
        return faFileExcel;
      case 'faFilePowerpoint':
        return faFilePowerpoint;
      case 'faLanguage':
        return faLanguage;   
      case 'faEarthEurope':
        return faEarthEurope;     
      default:
        return null; 
    }
  }
  private handleUpdateResponse(skills: any[]) {
    this.skills = skills.map(skill => ({
      ...skill,
      icon: this.getIconByName(skill.logo)
    }));
    console.log(this.skills)
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des skills :', error);
  } 
  shouldDisplay(label: string): boolean {
    if (this.previousLabel === label) {
      return false;
    }
    this.previousLabel = label;
    return true;
  }
}
