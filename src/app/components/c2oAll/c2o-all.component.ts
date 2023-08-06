import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '@app/services/data-api.service';
import { Yeoman } from '@app/services/yeoman.service';
@Component({
  selector: 'app-c2o-all',
  templateUrl: './c2o-all.component.html',
  styleUrls: ['./c2o-all.component.css']
})
export class C2oAllComponent implements OnInit {

  constructor(
    // private ngxService: NgxUiLoaderService,
    public router:Router,    
        public dataApiService:DataApiService,
         public yeoman:Yeoman

  ) { 
    this.getAll();
  }
  getAll(){
    // this.ngxService.start("loader-01");
    this.dataApiService.getAllProducts().subscribe(response=>{
      this.yeoman.all=response;
      // this.ngxService.stop("loader-01");
    });
  }
  setPreview(i:any){
    this.yeoman.preview=this.yeoman.all[i];
    this.router.navigate(['c2oDetail']);
  }
    ngOnInit(): void {
    }

}