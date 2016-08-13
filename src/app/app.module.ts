import { NgModule }       from '@angular/core';
import { ReactiveFormsModule }       from '@angular/forms';
import { CommonModule }       from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { PolyAppComponent } from "./poly.component";


@NgModule({
  declarations: [PolyAppComponent,
    PolymerElement('paper-scroll-header-panel'),
    PolymerElement('paper-toolbar'),
    PolymerElement('paper-input')
  ],
  imports:      [BrowserModule, CommonModule, ReactiveFormsModule],
  bootstrap:    [PolyAppComponent],
})
export class AppModule {}
