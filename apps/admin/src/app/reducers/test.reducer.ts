import { Action } from "@ngrx/store";
import {Test } from "./../models/test.model";
import * as TestActions from "./../actions/test.action";


const initState : Test = {
    name: "Hello World",
    url : "www.google.com"
}


export function TestReducer(state: Test[] = [initState],action : TestActions.Actions){
    switch (action.type) {
        case TestActions.ADD_TEST:
            return [...state, action.payload]
        default:
            return state;
    }
}