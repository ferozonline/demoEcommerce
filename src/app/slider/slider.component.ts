import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  s1: string= "assets/img/Bakery/1.png"
  s2: string= "assets/img/Bakery/2.jfif"
  s3: string= "assets/img/Bakery/3.jfif"
  s4: string= "assets/img/Bakery/5.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
