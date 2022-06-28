import { Component, OnInit } from '@angular/core';
import { ResumeFormData } from './../model/ResumeFormData';
@Component({
  selector: 'app-resume-preview',
  templateUrl: './resume-preview.component.html',
  styleUrls: ['./resume-preview.component.css']
})
export class ResumePreviewComponent implements OnInit {
  FormData: ResumeFormData;

  constructor() { 
    let data = (localStorage.getItem("FormData") ? localStorage.getItem("FormData") : "{}") as string;
    this.FormData = JSON.parse(data);
  }

  ngOnInit(): void {
  }

}
