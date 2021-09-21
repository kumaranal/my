import {  Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WebapiService } from '../webapi.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit{
 
  selected:any;
  method:any;
  countryId!: number;
  // hoveredDate: NgbDate | null = null;
  
  constructor(private WebapiService:WebapiService,private router: Router,){
  }

  loginform!: FormGroup;
  countryArray:{id: number; name: string;}[] | any;
  stateArray:{id: number; countryid: number; name: string;} [] | any;
  stateArray1: any;//{ id: number; countryid: number; name: string; }[] | any;
  


  ngOnInit(): void {
    this.loginform = new FormGroup({

      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone_no: new FormControl('', [Validators.required]),
     country: new FormControl ('',[Validators.required]),
     state: new FormControl ('',[Validators.required]),
     gender:new FormControl('',[Validators.required]),
     calender:new FormControl('',[Validators.required])

    })
 
     //for country
      this.WebapiService.getCountry().subscribe(
        data => {this.countryArray =data?.data;
          //console.log(data);
        }
      );
      //for state
      
      this.WebapiService.getState().subscribe(
        data =>{this.stateArray =data?.data;
          // console.log(data);
        }
      );
      this .method=this.loginform.get('country')?.valueChanges.subscribe((responce)=>{
        // console.log(responce);
        // console.log(responce.id);
        this.stateArray1=this.stateArray.filter((obj:any)=>{
          return obj?.countyId==responce.id;
        });
        // console.log(this.stateArray);
        //   console.log(this.stateArray1);
      });
   }
  ngOnDestroy(): void {
    this.method.unsubscribe();
  }
  get firstname() { return this.loginform.get('firstname')!; }
  get lastname() { return this.loginform.get('lastname')!; }
  get email() { return this.loginform.get('email')!; }
  get phone_no() { return this.loginform.get('phone_no')!; }
  get country() { return this.loginform.get('country')!; }
  get state(){return this.loginform.get('state')!;}
  get gender(){return this.loginform.get('gender')!;}
  get calender(){return this.loginform.get('calender')!;}





 
//calender range


// onDateSelection(date: NgbDate) {
//   if (!this.fromDate && !this.toDate) {
//     this.fromDate = date;
//   } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
//     this.toDate = date;
//   } else {
//     this.toDate = null;
//     this.fromDate = date;
//   }
//   console.log(this.fromDate);
// }

// isHovered(date: NgbDate) {
//   return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  
// }


// isInside(date: NgbDate) {
//   return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
// }

// isRange(date: NgbDate) {
//   return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
// };









submit():void{
 console.log(this.loginform.value);
  this.WebapiService.postRegister(this.loginform.value).subscribe(
    data => {
      console.log(data);
      // console.log(data.message);
      if(data.message=="Success")
      {
       // alert('Success update!');
        
      }
    }
    
  );
  //if:alart condition to check the post method success
  
    this.router.navigate(['/app-welcomepage']);
  
}
}




function moment() {
  throw new Error('Function not implemented.');
}

