import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Router, CanActivate } from '@angular/router';
import { AlmacenamientoSesionService } from '../../logic/services/login/almacenamiento-sesion.service';
import { LoginService } from '../../logic/services/login/login.service';
import { Sesion } from '../../logic/models/sesion.model';
import { LoginObject } from '../../logic/models/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: { code: number, message: string } = null;

  hide = true;
  //constructor(){}
  constructor(private formBuilder: FormBuilder,
    private authenticationService: LoginService,
    private storageService: AlmacenamientoSesionService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })

  }

  public submitLogin(): void {
    this.submitted = true;
    this.error = null;
    if (this.loginForm.valid) {
      this.authenticationService.inicioSesion(new LoginObject(this.loginForm.value)).subscribe(
        data => this.correctLogin(data),
        //error => this.error = JSON.parse(error._body)
      )

    }
  }

  private correctLogin(data: Sesion) {
    this.storageService.setSesionACtual(data);
    this.router.navigate(['../principal']);
  }


}
