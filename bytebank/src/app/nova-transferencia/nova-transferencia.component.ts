import { formatCurrency } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'], //este elemento deve ser um array devido a situação que ele pode ter mais de um arquivos de estilização
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    console.log('transferencia solicitada');

    const valorEmitir = {
      valor: this.valor,
      destino: this.destino
    };

    this.aoTransferir.emit(valorEmitir);

    this.limparCampos();
    // console.log(this.valor);
    // console.log(this.destino);
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
