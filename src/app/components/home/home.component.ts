import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  forma:FormGroup;

  constructor() { 
    this.forma = new FormGroup({
      'name': new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(3)
                                    ]),
      'email': new FormControl('', [
                                    Validators.required,
                                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                                  ]),
      'message': new FormControl('', [Validators.required])
    });

  }

  ngOnInit() {
  }

}
