import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: 'data-binding.component.html'
})
export class DataBindingComponent { 
  public contadorClique: number=0;
  public urlImagem: string = "https://th.bing.com/th/id/R.59a3f8ff0c7fac7a03cb2b6544f5ac3f?rik=bMDEzFcjGbegUw&riu=http%3a%2f%2fwww.opwiki.de%2fimages%2fRuffy.JPG&ehk=FGcharxSHQTKRmOsN1HuqUSv1X2WgOhaVFe94KSrwxs%3d&risl=&pid=ImgRaw&r=0"
  public nome: string = "";

  adicionarClique(){
    this.contadorClique++;
  }
  zerarContador(){
    this.contadorClique = 0;
  }

  // KeyUp(event: any){
  //   this.nome = event.target.value;
  // }
}
