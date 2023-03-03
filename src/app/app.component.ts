import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Google_Angular';


  show!: boolean;
  next() {
    this.show = true;

    const pageOne = document.getElementById('pageOne') as HTMLElement;

    const nextPage = () => {
      pageOne.style.marginLeft = `-450px`;

      // Hidde bar
      const hiddeBar = ()=>{
        this.show = false;
      }
      setTimeout(hiddeBar, 800);

    }
    setTimeout(nextPage,3000);


  }



}
