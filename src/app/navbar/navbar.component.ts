import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
    
    toogle = false;
    toggleImgPath = "../../assets/menu.svg";
    links = ['Experience', 'Education', 'Skills', 'Hobbies', 'Contact']

    setToggle = () => {
      this.toogle = !this.toogle;
      if(this.toogle){
        this.toggleImgPath = "../../assets/close.svg"
      } else {
        this.toggleImgPath = "../../assets/menu.svg"
      }
    }
}
