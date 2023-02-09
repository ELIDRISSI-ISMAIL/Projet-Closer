import {Compte, Position} from "./Adherent";
import {Service} from "./Service";

export class Provider{
  idP: string
  id: string
  name: string
  position: Position
  compte: Compte
  favoris: any[]
  services: Service
  rate: string
  ratings: any[]
  provider: Boolean


  constructor(idP: string, id: string, name: string, position: Position, compte: Compte, favoris: any[], services: Service, rate: string, ratings: any[], provider: Boolean) {
    this.idP = idP;
    this.id = id;
    this.name = name;
    this.position = position;
    this.compte = compte;
    this.favoris = favoris;
    this.services = services;
    this.rate = rate;
    this.ratings = ratings;
    this.provider = provider;
  }
}
