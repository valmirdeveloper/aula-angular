import { Component, OnInit } from '@angular/core';
import { Produto} from './../../produto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  p1 = new Produto('Sardinha', 'josesardinhas.com', 3, 0.10, '2020-01-01');
  constructor() { }

  ngOnInit(): void {
  }

}
