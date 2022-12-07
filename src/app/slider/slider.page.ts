import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonSlides, ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {
  @ViewChild('mySlider') slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(private router:Router) { }

  ngOnInit() {
  }

  swipeNext() {
    this.slides.slideNext();
  }

  goNext(){
    localStorage.setItem("slider",'0');
    var city_id = localStorage.getItem('city_id'); 
    if (city_id == '' || city_id == null) {
      this.router.navigate(['location']);
    }
    else{
      this.router.navigate(['home']);
    }
  }

}
