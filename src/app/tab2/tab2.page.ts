import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valor = 1;

  botao1 = 1;
  botao2 = 3;
  botao3 = 6;
  botao4 = 9;
  botao5 = 12;

  ponto = 0;
  ponto2 = 0;

  partida = 0;
  partida2 = 0;

  constructor() {}

  botaoAdd1() {
    this.valor = this.botao1;
  }

  botaoAdd2() {
    this.valor = this.botao2;
  }

  botaoAdd3() {
    this.valor = this.botao3;
  }

  botaoAdd4() {
    this.valor = this.botao4;
  }

  botaoAdd5() {
    this.valor = this.botao5;
  }

  adicionaTime1() {
    this.ponto += this.valor;
    if (this.ponto >= 12) {
      this.partida += 1;
      this.ponto = 0;
      this.ponto2 = 0;
    }
    this.valor = 1;
  }

  adicionaTime2() {
    this.ponto2 += this.valor;
    if (this.ponto2 >= 12) {
      this.partida2 += 1;
      this.ponto = 0;
      this.ponto2 = 0;
    }
    this.valor = 1;
  }

  removeTime1() {
    this.ponto -= this.valor;
    if (this.ponto < 0) {
      this.ponto = 0;
    }
    this.valor = 1;
  }

  removeTime2() {
    this.ponto2 -= this.valor;
    if (this.ponto2 < 0) {
      this.ponto2 = 0;
    }
    this.valor = 1;
  }

  limpaTudo() {
    this.valor = 1;
    this.ponto = 0;
    this.ponto2 = 0;
    this.partida = 0;
    this.partida2 = 0;
  }

}

