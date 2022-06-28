import { Component, OnInit } from '@angular/core';
import { ResumeFormData } from './../model/ResumeFormData';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {

  FormData : ResumeFormData;
  showresume: boolean= false;

  constructor() {
this.FormData = {
  nameField: "",
  contactField: "",
  emailField: "",
  addressField: "",
  languageField: "",
  linkedinField: "",
  gitField: "",
  fbField: "",
  stField: "",
  blogField:"",
  objField: "",
  we: "",
  weAddButton: "",
  ed: "",
  edAddButton: "",
  ce: "",
  ceAddButton: "",
  pd: "",
  pdAddButton: "",
  ts: "",
  tsAddButton: "",
  declField: "",
  imgField: "",
  gcv: ""

}

   }

  ngOnInit(): void {
  }

  handelOnSubmitEvent() {

    // console.log(this.formData);

    localStorage.setItem("FormData", JSON.stringify(this.FormData));

    this.showresume = true;

  }

}
