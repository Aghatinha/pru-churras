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
  ponto2 = 0

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

  addValue() {
    this.ponto += this.valor;
  }

  addValue2() {
    this.ponto2 += this.valor;
  }

  removeValue() {
    this.ponto -= this.valor;
  }

  removeValue2() {
    this.ponto2 -= this.valor;
  }

  clean() {
    console.log("deu")
  }

}
