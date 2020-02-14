import { Component, OnInit } from '@angular/core';
import { RandomColorService } from 'src/app/services/random-color.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  message: string;
 
  constructor(private randomColorService: RandomColorService) {
    
   }
  bgColor: string;
  ngOnInit() {
    this.message= 'Coucou!';
    /*setInterval(() => {
      this.bgColor = this.randomColorService.changeColor();
      }, 5000)
  }*/
}

  logEvent(menuItem:string): void{
    console.log("L'utilisateur a cliqué sur" + menuItem)
  }
};
  
  



