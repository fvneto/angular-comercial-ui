import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';
import { PainelNegociacaoComponent } from '../painel-negociacao/painel-negociacao.component';


import { MessageService } from 'primeng/api';

//Data Binding
@Component({
  selector: 'app-negociacao-incluir',
  templateUrl: './negociacao-incluir.component.html',
  styleUrls: ['./negociacao-incluir.component.css']
})
export class NegociacaoIncluirComponent implements OnInit {

  oportunidade = {};
  oportunidades = [];

  constructor(
    private oportunidadeService: OportunidadeService,
    private messageService: MessageService,
    private PainelNegociacaoComponent: PainelNegociacaoComponent
    ) { }

  ngOnInit() {

    this.adicionar();
  }

  adicionar() {
    this.oportunidadeService.adicionar(this.oportunidade)
      .subscribe(() => {
        this.oportunidade = {};
        this.PainelNegociacaoComponent.consultar();

        this.messageService.add({
          severity: 'success',
          summary: 'Oportunidade adicionada com sucesso'
        });
      },
      resposta => {
        let msg = 'Erro inesperado. Tente novamente.';

        if (resposta.error.message) {
          msg = resposta.error.message;
        }

        this.messageService.add({
          severity: 'error',
          summary: msg
        });
      });
  }
} 