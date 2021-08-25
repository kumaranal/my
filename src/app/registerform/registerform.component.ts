import {  Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WebapiService } from '../webapi.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit{

  method:any;
  countryId!: number;
  
  constructor(private WebapiService:WebapiService){
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
    });
 
     //for country
      this.WebapiService.getCountry().subscribe(
        data => {this.countryArray =data?.data;
          console.log(data);}
      );
      //for state
      
      this.WebapiService.getState().subscribe(
        data =>{this.stateArray =data?.data;
          console.log(data);}
      );
      this .method=this.loginform.get('country')?.valueChanges.subscribe((responce)=>{
        console.log(responce);
        console.log(responce.id);
        this.stateArray1=this.stateArray.filter((obj:any)=>{
          return obj?.countyId==responce.id;
        });
        console.log(this.stateArray);
          console.log(this.stateArray1);
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


submit(){
  console.log(this.loginform.value);
  this.WebapiService.postRegister(this.loginform.value).subscribe(
    data => {
      console.log(data);}
  );
}
  

}




