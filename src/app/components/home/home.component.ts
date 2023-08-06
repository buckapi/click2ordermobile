import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { AuthRESTService } from '@app/services/authREST.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public authRESTService:AuthRESTService,
    public router:Router,
    public script:ScriptService
  ) { 

    if(!this.authRESTService.getCurrentUser() ){this.router.navigate(['/login'])}
    this.script.load(
  
      'bundle'
      )
      .then(data => {
      })
      .catch(error => console.log(error));

  }
  config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };  
  ngOnInit(): void {
  }

}
