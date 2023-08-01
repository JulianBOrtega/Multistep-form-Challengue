import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormContentService } from '../../services/form-content.service';
import { UserInfo } from '../../models/userInfo';

@Component({
  selector: 'forms-info-page',
  templateUrl: './info-page.component.html',
})
export class InfoPage implements OnInit {
  
  hasErrors : boolean = false;
  initialData : UserInfo | undefined;

  constructor(private _router: Router, private formContentService: FormContentService) { 
    this.initialData = formContentService.getUserInfo();
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm): void {
    
    this.hasErrors = form.valid == false;
    
    if(form.valid) 
    {
      this.formContentService.setUserInfo({
        name: form.value.fullName,
        email: form.value.email,
        phoneNumber: form.value.phoneNumber
      })

      console.log(this.formContentService.getUserInfo());
      this._router.navigate(['form/step-2']);
    }
  }
}