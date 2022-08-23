import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  baseurl = this.api.baseurl;
  categories:any=[];
  totalLenght:any;
   page:number = 1;

 constructor(private api:ApiService, private http:HttpClient) { }

  

   ngOnInit(): void {
    this.load();
  }

  load(){
    this.api.post("productcategory/list", {}).subscribe((result:any)=>{
      this.categories = result.data;
      this.totalLenght = result.lenght
      console.log(this.categories);
    });

 }

  deletecategory(id:string){
    if(confirm("Sure to delete?")){
      this.api.post("productcategory/delete", {data:{id:id}}).subscribe((result:any)=>{
        this.load();
      });
    }
  }
}

