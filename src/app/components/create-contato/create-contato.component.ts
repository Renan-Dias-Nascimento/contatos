import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

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

  constructor(){ }
  
  ngOnInit(): void{
  }
  
  fecharModalClick(){
    this.onCancelClick.emit()
  }
  
  track(index:number, value:string){
    return index;
  }
}
