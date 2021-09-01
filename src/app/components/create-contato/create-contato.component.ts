import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

@Output() onCancelClick:EventEmitter<null> = new EventEmitter();

  novoContato:Contato = {
  nome:"",
  email:"",
  tels:[""]
  }

  contatoService:ContatoService = new ContatoService();

  constructor(){ }
  
  ngOnInit(): void{
  }
  
  fecharModalClick(){
    this.onCancelClick.emit()
  }
  
  track(index:number, value:string){
    return index;
  }
  
  addTelefone(): void{
    this.novoContato.tels.push("")
  }

  salvar() {
    this.contatoService.addContato(this.novoContato);
    this.onCancelClick.emit();
  }

  removeTelefone(i:number): void{
    this.novoContato.tels.splice(i,1)
  }

}
