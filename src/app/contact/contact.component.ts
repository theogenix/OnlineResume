import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { LottieComponent } from 'ngx-lottie';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { styles } from 'src/styles';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [LottieComponent, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
})
export class ContactComponent {
  styles = styles
  options: AnimationOptions = {
    path: '/assets/animation_desktop.json',
  };

}