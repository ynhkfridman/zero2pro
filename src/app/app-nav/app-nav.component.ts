import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {
  @ViewChild('nav') myNav : ElementRef;
  navActive = false;

  constructor() { }




  constractor(){}
navTo(numToNav){
  switch(numToNav) {
   case "1": {
      document.write("1");
      break;
   }
   case "2": {
    document.write("2");
      break;
   }
   case "3": {
    document.write("3");
      break;
   }
   default: {
      document.write("111");
      break;
   }
}
}
  navClicked(){
    console.log("this.myNav");
    console.log(this.myNav);
    this.navActive = !this.navActive;
    if(this.navActive){
    this.myNav.nativeElement.className= 'active';
  }else{
    this.myNav.nativeElement.className= '';
  }
    }

  ngOnInit() {
  }

}
