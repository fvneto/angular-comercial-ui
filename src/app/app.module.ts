

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { AppComponent } from './app.component';
import { PainelNegociacaoComponent } from './painel-negociacao/painel-negociacao.component';
import { NegociacaoIncluirComponent } from './negociacao-incluir/negociacao-incluir.component';

//Adicionei estes 2 para ver se exibe
import { OportunidadeService } from './oportunidade.service';
import {enableProdMode} from '@angular/core';

//
import { AppRoutingModule } from './app-routing.module';

//
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NegociacaoComponent } from './pages/negociacao/negociacao.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelNegociacaoComponent,
    NegociacaoIncluirComponent,
    HomeComponent,
    LoginComponent,
    NegociacaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    TableModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    AppRoutingModule
  ],
  providers: [ MessageService, OportunidadeService ],
  bootstrap: [ AppComponent ] 
})

export class AppModule { }
