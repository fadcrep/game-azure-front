import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSubmitted = false;
  errorFind = false;
  working = false;
  successMessage = '';
  errorMessage = '';
  loading: boolean; //variable pour la gestion du chargement;
  loginEndUrl = 'auth';
  dashboard = 'user/dashboard';
  user = new User();
  connectedUser = new User();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    public authService: AuthService) {}

    loginForm = this.formBuilder.group({
      email : [null, Validators.compose([
        Validators.email,
        Validators.required]),
      ],
      password: ['', [Validators.required]]
   
    });

  ngOnInit(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }

  onSubmit() {
    this.isSubmitted = true;
    if(!this.loginForm.valid){
      this.errorMessage = 'Veuillez saisir des informations correctes'
    } else {
      this.working = true;
      this.errorFind= false;
      this.user.email = this.loginForm.value.email;
      this.user.password = this.loginForm.value.password;

      this.authService.login(this.loginEndUrl, this.user).subscribe(
        response => {

          if (response['access_token'] != null) {
            this.connectedUser = response['user'];
            console.log("my user",this.connectedUser);
            if (this.connectedUser) {
              localStorage.setItem('userEmail', this.connectedUser.email);
              localStorage.setItem('access_token', response['access_token']);
              localStorage.setItem('authorization', this.connectedUser.authorize);

              document.location.href = this.dashboard;
            }

          }
        }, (err) => {
          this.working = false;
          switch (err) {
            case 401:
              this.errorFind = true;
              this.errorMessage = 'Identifiant ou mot de passe incorrecte.';
              this.loginForm.reset();
              break;
            case 404:
              this.errorFind = true;
              this.errorMessage = "Ce compte n'existe pas.";
              this.loginForm.reset();
              break;
            case 400:
              this.errorFind = true;
              this.errorMessage = "Veuillez saisir des informations correctes.";
              this.loginForm.reset();
              break;
            default:
              this.errorFind = true;
              this.errorMessage = "Veuillez saisir des informations correctes.";
              this.loginForm.reset();
          }

        }
      )
    }
  }
}
