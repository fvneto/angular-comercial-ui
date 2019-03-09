import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-negociacao',
  templateUrl: './negociacao.component.html',
  styleUrls: ['./negociacao.component.css']
})
export class NegociacaoComponent implements OnInit {

  //constructor() { }

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }

}
