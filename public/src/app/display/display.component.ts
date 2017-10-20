import { Component, OnInit } from '@angular/core';
import { PublicService } from './../public.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  showAll;

 constructor(private _publicService: PublicService) {
   console.log("hi")
    this._publicService.retrieveAll((handle)=>{
      this.showAll = handle;

      this.showAll.reverse();

      console.log(this.showAll);
    });
  }


  ngOnInit() {
  }

}
