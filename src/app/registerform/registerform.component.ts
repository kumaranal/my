import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { get } from 'https';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit{

  method:any;

  // constructor(private _freeapiservice:freeApiService){
  // }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  loginform!: FormGroup;
  stateArray1: { id: number; countryid: number; name: string; }[] | any;
  


  ngOnInit(): void {

    // this._freeapiservice.getcountry().subscribe(
    //   data=>
    //   {
    //       this.lstcountry=data;
    //   }
    // );
    // this.getTypeT();
    this.loginform = new FormGroup({

      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone_no: new FormControl('', [Validators.required]),
     country: new FormControl ('',[Validators.required]),
     state: new FormControl ('',[Validators.required]),
    });
  //  this.loginform.get('country')?.valueChanges.subscribe((responce)=>{
  //    console.log(responce);
  //    this.stateArray=this.stateArray.filter((obj)=>{
  //      return (obj.countryid==responce.id)
  //    })
  //  })
  // this .method=this.loginform.get('country')?.valueChanges.subscribe((responce)=>{
  //      console.log(responce);
  //      this.stateArray1=this.stateArray.filter((obj)=>{
  //        return (obj.countryid==responce.id)
  //      })
  //    })
   }
  // ngOnDestroy(): void {
  //   this.method.unsubscribe();
  // }
  get firstname() { return this.loginform.get('firstname')!; }
  get lastname() { return this.loginform.get('lastname')!; }
  get email() { return this.loginform.get('email')!; }
  get phone_no() { return this.loginform.get('phone_no')!; }
  get country() { return this.loginform.get('country')!; }


  

}

