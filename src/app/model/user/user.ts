import { compte } from "./compte";
import { position } from "./position";

export class user{
  id:number;
  name:string;
  compte:compte;
  position:position;


  
  constructor(id:number, name: string, compte:compte,position:position){
    this.id=id;
    this.name=name;
    this.compte=compte;
    this.position=position;

  }

}
