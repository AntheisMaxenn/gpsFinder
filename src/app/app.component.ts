import { Component, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gpsFinder';
  lattitude = -37.840935;
  longitude =  144.946457;
  safeUrl;

  constructor(private sanitizer: DomSanitizer) { 

    this.safeUrl =  this.sanitizerFunc(this.lattitude, this.longitude);
  }


  changePin(){
    // console.log("Button Clicked!")
    // this.safeUrl = this.sanitizerFunc(this.url2);
    this.safeUrl = this.sanitizerFunc(this.lattitude, this.longitude);

    console.log("Lattitude: "+ this.lattitude)
    console.log("Longitude: "+ this.longitude)
  }

  sanitizerFunc(lat, lng){
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=" + lat + "," + lng + "&z=4&output=embed");
  }

  randomCoords(){
    this.lattitude = this.randomNum(-90, 90);
    this.longitude = this.randomNum(-180, 180);
    this.changePin();
  }

  randomNum(min, max) {
    return Math.random() * (max - min) + min;
  }

}
