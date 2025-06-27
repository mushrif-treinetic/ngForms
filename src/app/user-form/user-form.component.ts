import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phones: this.fb.array([
        this.fb.control('', Validators.required)
      ])
    });
  }

  get phones(): FormArray {
    return this.userForm.get('phones') as FormArray;
  }

  addPhone() {
    this.phones.push(this.fb.control('', Validators.required));
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      alert('Form Submitted Successfully!');
      this.userForm.reset();
      this.phones.clear();
      this.addPhone(); // Add initial phone back
    } else {
      alert('Form is invalid');
    }
  }
}
