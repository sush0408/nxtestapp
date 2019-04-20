import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { AppState } from '../app.state';
import * as TestActions from '../actions/test.action';

@Component({
  selector: 'nxtest-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addTest(name,url){
    this.store.dispatch(new TestActions.AddTest({name:name,url:url}))
  }
  ngOnInit() {
  }

}
