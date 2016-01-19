import 'angular2/bundles/angular2-polyfills';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ComponentA} from "./ComponentA";

@Component({
    selector: 'app',
    template: `<div>
                   <component-a></component-a>
                   <button (click)="onClick()">Trigger Change Detection</button>
               </div>`,
    directives: [ComponentA]
})
export class App {


    onClick() {
        console.log("Change detection triggered...");
    }

}


bootstrap(App);
