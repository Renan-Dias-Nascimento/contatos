import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos: Contato[] = [
    {
      nome: "Kael'thas Sunstrider",
      email: "kaelthas@wow.com",
      tels: ["6666-6666", "6666-5555"],
    },
    {
      nome: "Thrall",
      email: "thrall@wow.com",
      tels: ["0800-3666", "0842-6637"],
    },
    {
      nome: "Baine Cloudhoof",
      email: "baine@wow.com",
      tels: ["0800-7777"],
    },
    {
      nome: "Sylvanas Windrunner",
      email: "sylvanas@wow.com",
      tels: ["6969-6969"],
    },
    {
      nome: "Varian Wrynn",
      email: "varian@wow.com",
      tels: ["9999-9999"],
    },
    {
      nome: "Illidan Stormrage",
      email: "illidan@wow.com",
      tels: ["9999-9999"],
    },
    {
      nome: "Malfurion Stormrage",
      email: "malfurion@wow.com",
      tels: ["9999-9999"],
    },
    {
      nome: "Tyrande Whisperwind",
      email: "tyrande@wow.com",
      tels: ["9999-9999"],
    },
    {
      nome: "Arthas Menethil",
      email: "arthas@wow.com",
      tels: ["9999-9999"],
    },
    {
      nome: "Vol'Jin Darkspear",
      email: "voljin@wow.com",
      tels: ["9999-9999"],
    },
    {
      nome: "Gazlowe, the Boss of Ratchet",
      email: "Gazlowe@wow.com",
      tels: ["9999-9999"],
    },
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
