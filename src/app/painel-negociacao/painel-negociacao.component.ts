import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidade = {};
  oportunidades = [];

  constructor(
    private oportunidadeService: OportunidadeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.oportunidadeService.listar()
      .subscribe(resposta => this.oportunidades = <any> resposta)
  }
}