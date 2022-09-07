import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ageRangeValidator } from '../../validators/age-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUp: FormGroup;
  defualtUser = {
    email: "xyz@xyz.com",
    password: "Indiaisgreat"
  }
  minAge = 18; // api 
  maxAge = 60; 
  constructor(private fb: FormBuilder) {

    this.signUp = new FormGroup(
      {
        email : new FormControl(null,[Validators.required]),
        password : new FormControl(null,[Validators.required, Validators.minLength(4)]),
        age : new FormControl(null,[ageRangeValidator(this.minAge,this.maxAge)]),
        phone: new FormControl(null),
        notification:new FormControl('email'),
        nominees : new FormArray([])
      }
    );

    // this.signUp = this.fb.group({
    //   email: [null, [Validators.required]],
    //   password: [null, [Validators.required, Validators.minLength(4)]]
    // }
    // )

   

  }


  get nominees():FormArray{
   return <FormArray> this.signUp.get('nominees'); 
  }

  ngOnInit(): void {
    this.readNotificationValue();
  }



  createNominee(): FormGroup {
    return this.fb.group({
      name : [null,[Validators.required]],
      relationship :[null,[Validators.required]]
    })
  }

  addN():void{
    this.nominees.push(this.createNominee());
  }

  login(): void {
    if (this.signUp.valid) {
      let a = this.signUp.value; 
      console.log(a.nominees);
      console.log(this.signUp.value);
    }
    else {
      console.log('form is notvalid');
    }

  }


  cancel(): void {
    if (this.signUp != undefined) {
      this.signUp.reset();
    }
  }

  setDefault(): void {
    this.signUp.patchValue(this.defualtUser);
  }


  readNotificationValue(){
       let phoneControl = this.signUp.get('phone');
        this.signUp.get('notification')?.valueChanges.subscribe(
          (mode:any)=>{
            console.log(mode);
            if(mode == 'phone'){
                phoneControl?.setValidators([Validators.required])
            }
            else if( mode == 'email'){
                 phoneControl?.clearValidators();
            }
            phoneControl?.updateValueAndValidity();
          }
        )
  }

}
