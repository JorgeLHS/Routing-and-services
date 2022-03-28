import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  imgUrl ='https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_960_720.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
