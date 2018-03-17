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
  //  this.initHeaderSlide();
  //  this.headerSlideData = this.getHeaderSlideData();
   // this.headerChangeColor();
    //this.goTop();
    //this.initToutiaoSlide();
    this.countdown();
  }



  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  goToSlide() {
    
    this.slides.slideTo(2, 500,false);
    this.slides.startAutoplay();
  }

  private countdown() {
    let timer;
    if(timer)
      clearInterval(timer);
     // 倒计时
     var timeObj={
       h:1,
       m:37,
       s:13
     };
     var timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
     var timeList=document.getElementsByClassName('time-text');
     for(var i=0;i<timeList.length;i++){
       timeList[i].innerHTML=timeStr[i];
     }

  function toDouble(num){
    if(num<10){
      return '0'+num;
    }else{
      return ''+num;
    }
  }
  timer=setInterval(function(){
    timeObj.s--;
    if(timeObj.s==-1){
      timeObj.m--;
      timeObj.s=59;
    }
    if(timeObj.m==-1){
      timeObj.h--;
      timeObj.m=59;
    }
    if(timeObj.h==-1){
      timeObj.h=0;
      timeObj.m=0;
      timeObj.s=0;
      clearInterval(timer);
    }
    timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
    for(var i=0;i<timeList.length;i++){
      timeList[i].innerHTML=timeStr[i];
    }
  },1000)

}

}
