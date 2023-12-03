import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { Admin } from "../models/admin.model"

@Injectable({
  providedIn: "root",
})

export class AdminService {
  constructor(private http: HttpClient) {
  }

  private adminUrl = "http://localhost:8080/admin"

  createExperience(experience: Admin['experiences']): Observable<Admin> {
    return this.http.post<Admin>(`${this.adminUrl}/experiences`, experience);
  }
  createEducation(education: Admin['educations']): Observable<Admin> {
    return this.http.post<Admin>(`${this.adminUrl}/educations`, education);
  }
  createSkill(skill: Admin['skills']): Observable<Admin> {
    return this.http.post<Admin>(`${this.adminUrl}/skills`, skill);
  }
  createHobby(hobby: Admin['hobbies']): Observable<Admin> {
    return this.http.post<Admin>(`${this.adminUrl}/hobbies`, hobby);
  }
  createFooter(footer: Admin['footers']): Observable<Admin> {
    return this.http.post<Admin>(`${this.adminUrl}/footers`, footer);
  }
  createAccueil(accueil: Admin['accueils']): Observable<Admin> {
    return this.http.post<Admin>(`${this.adminUrl}/accueils`, accueil);
  }

  getExperiences(): Observable<Admin['experiences'][]> {
    return this.http.get<Admin['experiences'][]>(`${this.adminUrl}/experiences`);
  }   
  getEducations(): Observable<Admin['educations'][]> {
    return this.http.get<Admin['educations'][]>(`${this.adminUrl}/educations`);
  }
  getSkills(): Observable<Admin['skills'][]> {
    return this.http.get<Admin['skills'][]>(`${this.adminUrl}/skills`);
  }
  getHobbies(): Observable<Admin['hobbies'][]> {
    return this.http.get<Admin['hobbies'][]>(`${this.adminUrl}/hobbies`);
  }
  getFooters(): Observable<Admin['footers'][]> {
    return this.http.get<Admin['footers'][]>(`${this.adminUrl}/footers`);
  }
  getAccueils(): Observable<Admin['accueils'][]> {
    return this.http.get<Admin['accueils'][]>(`${this.adminUrl}/accueils`);
  }

  updateExperiences(experiences: any[]): Observable<any> {
    return this.http.put(`${this.adminUrl}/experiences`, experiences);
  }
  updateEducations(educations: any[]): Observable<any> {
  return this.http.put(`${this.adminUrl}/educations`, educations);
  } 
  updateSkills(skills: any[]): Observable<any> {
    return this.http.put(`${this.adminUrl}/skills`, skills);
  } 
  updateHobbies(hobbies: any[]): Observable<any> {
    return this.http.put(`${this.adminUrl}/hobbies`, hobbies);
  }
  updateFooters(footers: any[]): Observable<any> {
    return this.http.put(`${this.adminUrl}/footers`, footers);
  }
  updateAccueils(accueils: any[]): Observable<any> {
    return this.http.put(`${this.adminUrl}/accueils`, accueils);
  }

  deleteExperience(experienceId: number): Observable<Admin> {
    return this.http.delete<Admin>(`${this.adminUrl}/experiences/${experienceId}`);
  }
  deleteEducation(educationId: number): Observable<Admin> {
    return this.http.delete<Admin>(`${this.adminUrl}/educations/${educationId}`);
  }
  deleteSkill(skillsId: number): Observable<Admin> {
    return this.http.delete<Admin>(`${this.adminUrl}/skills/${skillsId}`);
  }
  deleteHobby(hobbyId: number): Observable<Admin> {
    return this.http.delete<Admin>(`${this.adminUrl}/hobbies/${hobbyId}`);
  }
  deleteFooter(footerId: number): Observable<Admin> {
    return this.http.delete<Admin>(`${this.adminUrl}/footers/${footerId}`);
  }
  deleteAccueils(accueilId: number): Observable<Admin> {
    return this.http.delete<Admin>(`${this.adminUrl}/accueils/${accueilId}`);
  }
  
}
