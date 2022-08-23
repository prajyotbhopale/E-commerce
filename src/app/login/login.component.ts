import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata: any;
  message = "";

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup(
      {
        username: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required)
      });
  }


  submit(data:any)
  { 
    this.api.post("admin/login", {data:data}).subscribe((result:any)=>{
      console.log(result);
      if(result.data.status == "success")
      {
        localStorage.setItem("usertype", "admin");
        window.location.replace("../admin");
      }
      else{
        this.message = "Invalid credentials.";
      }
    }, (err)=>{
      alert("Error : " + err);
    });


  }
}