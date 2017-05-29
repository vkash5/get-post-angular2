import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { GetPostExample }        from './getPostExample/get-post-example.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent,GetPostExample ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
