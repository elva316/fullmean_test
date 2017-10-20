import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";
//
@Injectable()
export class PublicService {
  constructor(private _http: Http) { }
    // constructor() { }
  products = [];
  showAll;

  retrieveAll(callback) {
  this._http.get(`/show`).subscribe(
      (response) => {
        console.log('Successful retrieved all data from the db', response.json());
        callback(response.json());
      },
      (err) => {
        console.log("could not retrieve all datas", err);
        callback(err);
      }
    )
  }


  create(input, callback) {
    console.log(typeof(input));
    return this._http.post(`/create`, input).subscribe(
      (response) => {
        // console.log( typeOf(input) )
        console.log('Successful created and send to db', input);
      },
      (err) => {
        console.log('could not add to DB',err);
      }
    )
  }


}
