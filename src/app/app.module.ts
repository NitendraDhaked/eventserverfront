import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app-routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayDealEventComponent } from './frontend/display-deal-event/display-deal-event.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDealEventComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
