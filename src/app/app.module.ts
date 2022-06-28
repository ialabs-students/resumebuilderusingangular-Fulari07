import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormSectionComponent } from './form-section/form-section.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormSectionComponent,
    ResumePreviewComponent
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

