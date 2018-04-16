import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

//Ng is to declare everything you create
@NgModule({
  declarations: [ //Components here
    AppComponent,
    UserComponent
  ],
  imports: [ //Imported modules and external services go here
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
