// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-update-profile',
//   templateUrl: './update-profile.component.html',
//   styleUrls: ['./update-profile.component.css']
// })
// export class UpdateProfileComponent {

// }




import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
})
export class UpdateProfileComponent {
  profileForm: FormGroup;
  successMessage = '';
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/) // exactly 10 digits
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])/)
        ]
      ]
    });
  }

  get f() {
    return this.profileForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      this.successMessage = '✅ Profile updated successfully!';
    } else {
      this.successMessage = '❌ Not updated, check the fields.';
    }

    setTimeout(() => (this.successMessage = ''), 4000);
  }
}
