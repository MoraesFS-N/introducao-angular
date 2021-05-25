import { Transferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
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

  constructor(private service: TransferenciaService){};

  transferir() {
    console.log('transferencia solicitada');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    };

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    },
      (error => console.log(error))
    );

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
