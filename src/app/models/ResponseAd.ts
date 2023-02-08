import {Adherent} from "./Adherent";


export class ResponseAd{
  adherents :Array<Adherent> = [];

  public constructor(docs: Array<Adherent>) {
    this.adherents = docs;
  }
}
