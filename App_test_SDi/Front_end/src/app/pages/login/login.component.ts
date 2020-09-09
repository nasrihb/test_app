import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/components/sidebar/sidebar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  LoginForm: FormGroup;
  isLoginFailed = false;
  errorMessage: string;
  constructor(private fb: FormBuilder , private authservice: AuthService, private tokenStorage: TokenStorageService, private router : Router) {}

  get errorControl() {
    return this.LoginForm.controls;
  }


// message d erreur
  validation_messages = {
      'email': [
        { type: 'required', message: 'Merci de saisir votre adresse mail ' },
        { type: 'email', message: 'email doit etre sous forme test@exemple.xyz.' },
      ],
      'password': [
        { type: 'required', message: 'Merci de saisir votre mot de passe' },
      ]

    };


  ngOnInit() {
    this.formcontrols();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  formcontrols() {
  this.LoginForm = this.fb.group({
  email: ['', Validators.compose([Validators.required, Validators.email])],
  password: ['', Validators.required],
  });
  }
// login user
  login() {
    if (this.LoginForm.invalid) {
        return;
    } else {
    const email = this.LoginForm.value.email;
    const password = this.LoginForm.value.password;
    this.authservice.login(email, password).subscribe(data => {
    console.log('daataa', data);
    this.tokenStorage.saveToken(data.accessToken);
    this.tokenStorage.saveUser(data);
    this.isLoginFailed = false;
    this.isLoggedIn = true;
    if (data.data.role === 'admin') {

    this.router.navigate(['/Listes-utilisateurs']);

    } else {
      this.router.navigate(['/Calendar']);
    //hidden  liste utilsateur from menu 
    //..
    }
    }, err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;


    });

  

    }

    }





  ngOnDestroy() {
  }

}
