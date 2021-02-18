import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myimg1: string= "assets/img/payment-method.png"
  myimg2: string= "assets/img/godaddy.svg"
  myimg3: string= "assets/img/norton.svg"
  myimg4: string= "assets/img/ssl.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
