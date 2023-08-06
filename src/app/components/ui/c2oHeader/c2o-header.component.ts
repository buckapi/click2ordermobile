import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c2o-header',
  templateUrl: './c2o-header.component.html',
  styleUrls: ['./c2o-header.component.css']
})
export class C2oHeaderComponent implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }

}
