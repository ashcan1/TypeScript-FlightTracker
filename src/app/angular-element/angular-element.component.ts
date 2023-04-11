import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-angular-element',
  templateUrl: './angular-element.component.html',
  styleUrls: ['./angular-element.component.css']
})
export class AngularElementComponent implements OnInit {

  constructor(private injector: Injector) {
    const customerElement =  createCustomElement(AngularElementComponent, {injector});
    window.customElements.define('my-element', customerElement)
   }

  ngOnInit(): void {
  }

}
