import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-using-form-group',
  standalone: false,
  templateUrl: './using-form-group.component.html',
  styleUrl: './using-form-group.component.scss'
})
export class UsingFormGroupComponent {

  userform: FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private http: HttpClient){}

  onSaveUser(){
    debugger;
    const obj = this.userform.value;
    this.http.post('https://jsonplaceholder.typicode.com/users', obj).subscribe((res:any) => {
      alert('user created')
    })
  }
}
