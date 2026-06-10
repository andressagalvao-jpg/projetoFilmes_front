import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-botoes-tabela',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './botoes-tabela.component.html',
  styleUrl: './botoes-tabela.component.css'
})
export class BotoesTabelaComponent {
  @Input() rotaBase: string = '';
  @Input() idItem: any;
  @Output() excluir = new EventEmitter<any>();

  dispararExclusao() {
    this.excluir.emit(this.idItem);
  }
}