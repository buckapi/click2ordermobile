import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';

@Component({
  selector: 'app-c2o-search',
  templateUrl: './c2o-search.component.html',
  styleUrls: ['./c2o-search.component.css']
})
export class C2oSearchComponent implements OnInit {

  constructor(
    public yeoman:Yeoman
  ) { }
set(view:any){
  this.yeoman.view=view;
}
  ngOnInit(): void {
  }

}
