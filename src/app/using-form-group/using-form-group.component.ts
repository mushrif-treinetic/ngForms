import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-using-form-group',
  standalone: false,
  templateUrl: './using-form-group.component.html',
  styleUrl: './using-form-group.component.scss'
})
export class UsingFormGroupComponent {

  usersArray: any[] = [];

  userform: FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl('', [Validators.required,Validators.minLength(10)]),
    username: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private http: HttpClient){
    this.getAllUser();
  }

  getAllUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any) => {
      this.usersArray = res;
    })
  }

  onEdit(id: number) {
    this.http.get('https://jsonplaceholder.typicode.com/users/' + id)
      .subscribe((res: any) => {
        this.userform.patchValue({
          id: res.id,
          name: res.name,
          username: res.username,
          email: res.email
        });
      });
  }

  onSaveUser(){
    debugger;
    const obj = this.userform.value;
    this.http.post('https://jsonplaceholder.typicode.com/users', obj).subscribe((res:any) => {
      alert('user created')
    })
  }
}
