import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  countryArray = [
    {
      id: 1,
      name: "INDIA"
    },
    {
      id: 2,
      name: "USA"
    },
    {
      id: 3,
      name: "UK"
    }
  ];
  stateArray=[
    {
      id: 1,
      countryid:1,
      name: "west Bengal"
    },
    {
      id: 2,
      countryid:1,
      name: "uttarpradesh"
    },
    {
      id: 3,
      countryid:1,
      name: "Kerala"
    },
    {
      id: 4,
      countryid:2,
      name: "LA"
    },
    {
      id: 5,
      countryid:2,
      name: "texax"
    },
    {
      id: 6,
      countryid:2,
      name: "washington"
    },
    {
      id: 7,
      countryid:3,
      name: "LOndon"
    },
    {
      id: 8,
      countryid:3,
      name: "Liverpool"
    },
    {
      id:9,
      countryid:3,
      name: "France"
    }
  ];







  loginform!: FormGroup;
  ngOnInit(): void {
    this.loginform = new FormGroup({

      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone_no: new FormControl('', [Validators.required]),
     country: new FormControl ('',[Validators.required]),
     state: new FormControl ('',[Validators.required]),
    });
   this.loginform.get('country')?.valueChanges.subscribe((responce)=>{
     console.log(responce);
     this.stateArray=this.stateArray.filter((obj)=>{
       return (obj.countryid==responce.id)
     })
   })
  }

  get firstname() { return this.loginform.get('firstname')!; }
  get lastname() { return this.loginform.get('lastname')!; }
  get email() { return this.loginform.get('email')!; }
  get phone_no() { return this.loginform.get('phone_no')!; }
  //  get country() { return this.loginform.get('phone_no')!; }


}

