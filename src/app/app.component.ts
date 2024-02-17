import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from './services/global.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myForm: any = FormGroup;
  info:any
  datas:any
  isLoading:any

  constructor(
    private primengConfig: PrimeNGConfig,
    private fb: FormBuilder,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    this.datas=false;
    (this.myForm = this.fb.group({
      month: ['', [Validators.required, Validators.maxLength(2)]],
      date: ['', [Validators.required, Validators.maxLength(2)]],
    })),
      (this.primengConfig.ripple = true);
    this.primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
    };
    this.primengConfig.setTranslation({
      accept: 'Accept',
      reject: 'Cancel',
      //translations
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted successfully:', this.myForm.value);
      this.isLoading=true;
      this.globalService
        .fetchData(this.myForm.value)
        .subscribe((data:any) => {
          this.info=data.text;
          this.isLoading=false;
          this.datas=true;
        });
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
