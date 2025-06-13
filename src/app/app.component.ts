import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from './services/global.service';
import { HttpResponse } from '@angular/common/http';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myForm: any = FormGroup;
  info: any;
  datas: any;
  isLoading: any;
  cities: City[] | undefined;
  selectedCity: City | undefined;
  data = [
    {
      msaVersionCodeAndElementDtos1: [
        {
          poMsaMaxVer: '200412',
          poYnFlag: 'Y',
          poStatus: 'Success',
          poStatusCode: '0',
        },
        {},
      ],
      msaVersionCodeAndElementDtos2: [
        {
          poStatus: 'Success',
          poStatusCode: '0',
          poCurSec: 'A',
        },
        {
          poStatus: '15',
          poStatusCode: 'Quality procedures ISO/TS16949 QOS',
          poCurSec: '01.01.00.00',
        },
        {
          poStatus: '15',
          poStatusCode:
            'FMEAs/Control Plans\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n    \t\t\t\t ',
          poCurSec: '01.02.00.00',
        },
        {
          poStatus: '9',
          poStatusCode:
            'Employee Readiness/Training Review\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n    \t\t\t\t ',
          poCurSec: '01.03.00.00',
        },
        {
          poStatus: '10',
          poStatusCode:
            'APQP/Launch/PPAP/Run-at-Rate Review\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n    \t\t\t\t ',
          poCurSec: '01.04.00.00',
        },
        {
          poStatus: '15',
          poStatusCode:
            'Manage the Changes\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n    \t\t\t\t ',
          poCurSec: '01.05.00.00',
        },
        {
          poStatus: '1',
          poStatusCode:
            'Change control\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n    \t\t\t\t ',
          poCurSec: '01.06.00.00',
        },
        {
          poStatus: '1',
          poStatusCode:
            'testing 8 edited\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n    \t\t\t\t ',
          poCurSec: '01.08.00.00',
        },
        {
          poStatus: '2',
          poStatusCode:
            'test9 edited\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n    \t\t\t\t ',
          poCurSec: '01.09.00.00',
        },
        {
          poStatus: '1',
          poStatusCode:
            'gdghghjjjjkyddddddddddddddddddddddddddddddddddddddd\r\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffsceDDde\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n    \t\t\t\t ',
          poCurSec: '01.10.00.00',
        },
        {
          poStatus: '7',
          poStatusCode:
            'Sub-supplier Quality Management\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n    \t\t\t\t ',
          poCurSec: '02.01.00.00',
        },
        {
          poStatus: '4',
          poStatusCode:
            'Control Plans / Operator Instructions\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n    \t\t\t\t ',
          poCurSec: '02.03.00.00',
        },
        {
          poStatus: '5',
          poStatusCode: 'Process Variability Monitoring/Reduction',
          poCurSec: '02.04.00.00',
        },
        {
          poStatus: '7',
          poStatusCode: 'Measurement System Capability, Calibration and Use',
          poCurSec: '02.05.00.00',
        },
        {
          poStatus: '4',
          poStatusCode:
            'Control of Parts/Part Identification/Packaging/Shipping',
          poCurSec: '02.06.00.00',
        },
        {
          poStatus: '3',
          poStatusCode: 'Testing/Engineering Specifications',
          poCurSec: '02.07.00.00',
        },
        {
          poStatus: '4',
          poStatusCode:
            'Preventive Maintenance (PM) / Housekeeping\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n    \t\t\t\t ',
          poCurSec: '02.08.00.00',
        },
        {
          poStatus: '2',
          poStatusCode:
            'Manufacturing Flow / Process Engineering / 6 Sigma and Lean Manufacturing Metrics',
          poCurSec: '02.09.00.00',
        },
        {
          poStatus: '5',
          poStatusCode: 'Problem Solving/Corrective Actions',
          poCurSec: '02.10.00.00',
        },
        {
          poStatus: '5',
          poStatusCode:
            'element in II edited\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n    \t\t\t\t ',
          poCurSec: '02.11.00.00',
        },
        {
          poStatus: '1',
          poStatusCode:
            'Element added in II\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n    \t\t\t\t ',
          poCurSec: '02.13.00.00',
        },
        {
          poStatus: '1',
          poStatusCode:
            '15th element added,\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n    \t\t\t\t ',
          poCurSec: '02.15.00.00',
        },
      ],
    },
  ];

  constructor(
    private primengConfig: PrimeNGConfig,
    private fb: FormBuilder,
    private globalService: GlobalService
  ) {}
  filteredPoData: any[] = []; // Array to store filtered data
  filteredPoDatas: any[] = []; // Array to store filtered data
  object: { [key: string]: any } = {};
  datasssss :any
  ngOnInit() {
    this.datasssss =this.data[0].msaVersionCodeAndElementDtos2.filter(items=>{
      return items.poCurSec.toLowerCase().startsWith('01'.toLowerCase())
    })
    // this.filteredPoData = datasss.map(item => ({
    //   ...item,
    //   poDescription: item.poStatusCode.trim().replace(/\s+/g, ' '),
    //   poCurSec: item.poCurSec.split('.').map(Number)
    // }));
    console.log(this.datasssss)
    this.convertArrayToObject
   
  
    this.filteredPoData.forEach(element => {
      console.log(element.poStatusCode)
    });
    const datassss =this.data[0].msaVersionCodeAndElementDtos2.filter(items=>{
      return items.poCurSec.toLowerCase().startsWith('02'.toLowerCase())
    })
    console.log(datassss[0].poStatusCode)
    // this.data[0].msaVersionCodeAndElementDtos2.forEach(element => {
    //   if(element.poCurSec.toLowerCase().startsWith('01'.toLowerCase())){      
    //     const sectionOneData =element.poStatusCode
    //     this.filteredPoData.push({sectionOneData})
    //     console.log(this.filteredPoData)
    //   }
    // });
    // this.data[0].msaVersionCodeAndElementDtos2.forEach(element => {
    //   if(element.poCurSec.toLowerCase().startsWith('02'.toLowerCase())){    
    //     const sectionTwoData =element.poStatusCode
    //     this.filteredPoDatas.push({sectionTwoData})
    //     console.log(this.filteredPoDatas)
    //   }
    // });
  
    this.datas = false;
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
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  convertArrayToObject(): void {
    this.object = this.datasssss.reduce((obj:any,item:any) => {
      obj[item.poCurSec] = item;
      return obj;
    }, {});
    console.log(this.object);
  }
  

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted successfully:', this.myForm.value);
      this.isLoading = true;
      this.globalService.fetchData(this.myForm.value).subscribe((data: any) => {
        this.info = data.text;
        this.isLoading = false;
        this.datas = true;
      });
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
