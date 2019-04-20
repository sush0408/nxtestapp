import { Component, OnInit } from '@angular/core';


import { Test } from '../models/test.model';
import { Observable } from 'rxjs';
import { Store} from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'nxtest-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tests : Observable<Test[]>;

  constructor(private store : Store<AppState>) {
    this.tests = store.select('test_reducer');
   }

  ngOnInit() {
  }

}
