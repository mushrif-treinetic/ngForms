import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  standalone: false,
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss'
})
export class MyFormComponent{

  submit(login: any){
    console.log("Form Submitted", login);
  }
}
