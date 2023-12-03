import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { styles } from 'src/styles';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AnimationOptions } from 'ngx-lottie';
import { LottieComponent } from 'ngx-lottie';
import { AdminService } from '../services/admin.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    LottieComponent
  ],
})
export class AdminComponent {
  newExperience: any = {};
  newEducation:any={};
  newSkill:any={};
  newHobby:any={};
  newFooter:any={};
  newAccueil:any={};

  private adminService:AdminService;
  experiences:any[]=[]
  educations:any[]=[]
  skills:any[]=[]
  hobbies:any[]=[]
  footers:any[]=[]
  accueils:any[]=[]
  

  constructor(private _snackBar: MatSnackBar,service : AdminService) {
    this.adminService=service
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }
  sections = ['Experience', 'Education', 'Skills', 'Hobbies','Footer','Accueil']

  ngOnInit(){
    this.adminService.getExperiences().subscribe({
      next: (experiences) => this.handleUpdateResponse(experiences, null,null,null,null,null),
      error: this.handleError.bind(this)
    });
    this.adminService.getEducations().subscribe({
      next: (educations) => this.handleUpdateResponse(null, educations,null,null,null,null),
      error: this.handleError.bind(this)
    });
    this.adminService.getSkills().subscribe({
      next:(skills)=>{this.handleUpdateResponse(null,null,skills,null,null,null),console.log(skills)},
      error:this.handleError.bind(this)
    })
    this.adminService.getHobbies().subscribe({
      next:(hobbies)=>this.handleUpdateResponse(null,null,null,hobbies,null,null),
      error:this.handleError.bind(this)
    });
    this.adminService.getFooters().subscribe({
      next:(footers)=>this.handleUpdateResponse(null,null,null,null,footers,null),
      error:this.handleError.bind(this)
    })
    this.adminService.getAccueils().subscribe({
      next:(accueils)=>this.handleUpdateResponse(null,null,null,null,null,accueils),
      error:this.handleError.bind(this)
    })
  }
  
  private handleUpdateResponse(experiences: any[] | null, educations: any[] | null, skills:any[] |null,hobbies: any[] | null, footers:any[] | null, accueils:any[] | null) {
    if (experiences !== null) {
      this.experiences = experiences;
    }
    if (educations !== null) {
      this.educations = educations;
    }
    if(skills!==null){
      this.skills=skills;
    }
    if(hobbies!==null){
      this.hobbies=hobbies;
    }
    if(footers!==null){
      this.footers=footers
    }
    if(accueils!==null){
      this.accueils=accueils
    }
  }
  private handleError(error: any) {
    console.error('Erreur :', error);
  }

  experienceFields = [
    { label: 'title',fieldName: 'title'},
    { label: 'company',fieldName: 'company'},
    { label: 'location',fieldName: 'location'},
    { label: 'startDate',fieldName: 'startDate'},
    { label: 'endDate',fieldName: 'endDate'},
    { label: 'description',fieldName: 'description'},
    { label: 'logoUrl',fieldName: 'logoUrl'}
  ];
  educationFields = [
    { label: 'school',fieldName: 'school'},
    { label: 'startDate',fieldName: 'startDate'},
    { label: 'endDate',fieldName: 'endDate' },
    { label: 'description',fieldName: 'description'},
    { label: 'logoUrl',fieldName: 'logoUrl'}
  ];
  hobbiesFields = [
    { label: 'title',fieldName: 'title'},
    { label: 'logo', fieldName:'logo'},
    { label: 'description',fieldName:"description"},
    { label: 'dates',fieldName:"dates"}
  ];
  skillsFields=[
    {label:'label',fieldName:'label'},
    { label: 'title',fieldName: 'title'},
    { label: 'logo', fieldName:'logo'}
  ]
  footerFields=[
    { label: 'link',fieldName: 'link'},
    { label: 'logo',fieldName: 'logo'},
  ]
  accueilFields = [
    { label: 'name', fieldName: 'name' },
    { label: 'title', fieldName: 'title' },
    { label: 'objective', fieldName: 'objective' },
    { label: 'logoUrl', fieldName: 'logoUrl' },
    { label: 'pdfPath', fieldName: 'pdfPath' },
    
  ];
  recommendationsFields=[
  { label: 'author', fieldName: 'recommendations.author' },
  { label: 'position', fieldName: 'recommendations.position' },
  { label: 'text', fieldName: 'recommendations.text' }
  ]
  
  selectedLink = null
  firstLoad = false;
  password = 'wxcvbn';
  passwordInput = '';
  styles = styles;

  checkPassword = () => {
    if (this.passwordInput === this.password) {
      this.firstLoad = false;
    } else {
      this.openSnackBar('Incorrect Password !', 'Retry')
    }
  };

  editSection = (section: any) => {
    this.selectedLink = section
  }

  options: AnimationOptions = {
    path : 'https://lottie.host/d9e90931-1fde-46f5-ad2b-af63de85ec4c/nb2feEykpx.json'
  };

  createNewExperience() {
    this.adminService.createExperience(this.newExperience).subscribe({
      next: (response) => {
        console.log('Expérience créée avec succès', response);
        window.location.reload()
      },
      error: (error) => {
        console.error('Erreur lors de la création de l\'expérience', error);
      }
    });
  }
  createNewEducation(){
    this.adminService.createEducation(this.newEducation).subscribe({
      next:(response)=>{
        console.log('Education crée avec succès',response)
        window.location.reload()
      },
      error:(error)=>{
        console.log("erreur lors de la création de l'education",error)
      }
    })
  }
  createNewSkills(){
    this.adminService.createSkill(this.newSkill).subscribe({
      next:(response)=>{
        console.log("skill crée avec succès",response);
        window.location.reload()
      },
      error:(error)=>{
        console.log("échéc lors de la création du skill",error)
      }
    })
  }
  createNewHobby(){
    this.adminService.createHobby(this.newHobby).subscribe({
      next:(response)=>{
        console.log("hobby crée avec succès",response);
        window.location.reload()
      },
      error:(error)=>{
        console.log("échéc lors de la création du hobby",error)
      }
    })
  }
  createNewFooter(){
    this.adminService.createFooter(this.newFooter).subscribe({
      next:(response)=>{
        console.log("footer crée avec succès",response);
        window.location.reload()
      },
      error:(error)=>{
        console.log("échec lors de la création du footer",error)
      }

    })
  }
  createNewAccueil(){
    this.adminService.createAccueil(this.newAccueil).subscribe({
      next:(response)=>{
        console.log("accueil crée avec succès",response);
        //window.location.reload()
      },
      error:(error)=>{
        console.log("échec lors de la création de l'accueil",error)
      }

    })
  }

  updateExperiences() {
    this.adminService.updateExperiences(this.experiences).subscribe({
        next: (response) => {
            console.log("update des expériences avec succès", response);
        },
        error: (error) => {
            console.error("échec lors de l'update des expériences", error);
        }
    });
  }
  updateEducations(){
  this.adminService.updateEducations(this.educations).subscribe({
    next:(response)=>{
      console.log("educations update avec succès",response)
    },
    error:(error)=>{
      console.log("échéc lors de l'update des educations",error)
    }
  })
  }
  updateSkills(){
    this.adminService.updateSkills(this.skills).subscribe({
      next:(response)=>{
        console.log("skills update avec succès",response)
      },
      error:(error)=>{
        console.log("échéc lors de l'update des skills",error)
      }
    })
  }
  updateHobbies(){
  this.adminService.updateHobbies(this.hobbies).subscribe({
    next:(response)=>{
      console.log("update hobbies avec succès",response)
    },
    error:(error)=>{
      console.log("échéc du update hobbies",error)
    }
  })
  }
  updateFooters(){
    this.adminService.updateFooters(this.footers).subscribe({
      next:(response)=>{
        console.log("succès de l'update des footers",response)
      },
      error:(error)=>{
        console.log("échec de l'update des footers",error)
      }
    })
  }
  updateAccueils(){
    this.adminService.updateAccueils(this.accueils).subscribe({
      next:(response)=>{
        console.log("succès de l'update des élements d'accueil",response)
      },
      error:(error)=>{
        console.log("échec lors de l'update des élements d'accueils",error)
      }
    })
  }

  deleteExperiences(experience: any){
    const experienceIndex = this.experiences.indexOf(experience);
    this.adminService.deleteExperience(experienceIndex).subscribe({
    next:(response)=>{
      console.log(`delete de l'experience ${experienceIndex} effectué`,response)
      window.location.reload()
    },
    error:(error)=>{
      console.log(`erreur lors du delete de l'experience${experienceIndex}`,error)
    }
  })
  }
  deleteEducations(education: any){
    const educationIndex = this.educations.indexOf(education);
    this.adminService.deleteEducation(educationIndex).subscribe({
    next:(response)=>{
      console.log(`delete de l'education ${educationIndex} effectué`,response)
      window.location.reload()
    },
    error:(error)=>{
      console.log(`erreur lors du delete de l'education${educationIndex}`,error)
    }
  })
  }
  deleteSkill(skill: any){
    const skillIndex = this.skills.indexOf(skill);
    this.adminService.deleteSkill(skillIndex).subscribe({
    next:(response)=>{
      console.log(`delete du skill ${skillIndex} effectué`,response)
      window.location.reload()
    },
    error:(error)=>{
      console.log(`erreur lors du delete de l'skill${skillIndex}`,error)
    }
  })
  }
  deleteHobbies(hobby: any){
    const hobbyIndex = this.hobbies.indexOf(hobby);
    this.adminService.deleteHobby(hobbyIndex).subscribe({
    next:(response)=>{
      console.log(`delete de l'hobby ${hobbyIndex} effectué`,response)
      window.location.reload()
    },
    error:(error)=>{
      console.log(`erreur lors du delete de l'hobby${hobbyIndex}`,error)
    }
  })
  }
  deleteFooters(footer: any){
    const footerIndex = this.footers.indexOf(footer);
    this.adminService.deleteFooter(footerIndex).subscribe({
    next:(response)=>{
      console.log(`delete de l'footer ${footerIndex} effectué`,response)
      window.location.reload()
    },
    error:(error)=>{
      console.log(`erreur lors du delete de l'footer${footerIndex}`,error)
    }
  })
  }
  deleteAccueils(accueil: number){
    const accueilIndex = accueil
    this.adminService.deleteAccueils(accueilIndex).subscribe({
        next:(response)=>{
            console.log(`delete de l'accueil ${accueil} effectué`,response)
            //console.log(accueilIndex)
            window.location.reload()
        },
        error:(error)=>{
            console.log(`erreur lors du delete de l'accueil ${accueil}`,error)
        }
    });
}
}
