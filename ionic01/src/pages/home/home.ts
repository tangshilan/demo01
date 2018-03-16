import { Component ,ViewChild} from '@angular/core';
import { NavController ,Slides} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    //this.slides.startAutoplay();
    //this.countdown();
    
  }



  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  goToSlide() {
    
    this.slides.slideTo(2, 500,false);
    this.slides.startAutoplay();
  }

}
