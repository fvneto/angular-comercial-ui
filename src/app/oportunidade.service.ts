import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//@Injectable({
 // providedIn: 'root'
//})

@Injectable()
export class OportunidadeService {

  apiUrl = 'http://localhost:8080/oportunidades';
  //apiUrlAlter = 'http://localhost:8080/oportunidades/id';

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get(this.apiUrl);
  }

  adicionar(oportunidade: any) {
   return this.httpClient.post(this.apiUrl, oportunidade);
  }

  //alterar(oportunidade: any) {
    //return this.httpClient.post(this.apiUrlAlter, oportunidade);
  //}

  //excluir(oportunidade: any) {
   // return this.httpClient.post(this.apiUrlAlter, oportunidade);
  //}
}
