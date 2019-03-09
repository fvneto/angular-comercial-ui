import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { NegociacaoComponent} from './pages/negociacao/negociacao.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

//Dicas da Aula #50
//path: string que desejamos para a nossa rota, no nosso exemplo estamos utilizando home.
//component: passamos o nome do component que desejamos adicionar para a nossa rota.
const APP_ROUTES: Routes = [
  { path: 'negociacao',  component: NegociacaoComponent },
  { path: 'login',  component: LoginComponent },
 // { path: '',  component: HomeComponent }
 // { path: 'about', component: AboutComponent },
   { path: '', redirectTo: '/login', pathMatch: 'full' },
];

//export const rounting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  //declarations: [],
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(APP_ROUTES) 
   // CommonModule
  ]
})
export class AppRoutingModule { }
