import { Component, OnInit} from '@angular/core';
import { PublicService } from './../public.service';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private _publicService: PublicService) {}
  inputNote = {
    note: ''
  };
  sendInputeNote;

  onSubmit(){
    this.sendInputeNote = this.inputNote;
    this._publicService.create(this.sendInputeNote, (handle)=>{
      console.log('just sent data to service', this.sendInputeNote)
      this.inputNote.note = "";
    });

  }

  ngOnInit() {
  }

}
