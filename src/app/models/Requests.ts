import {Adherent, Compte, Position} from "./Adherent";
import {Service} from "./Service";

export class Requests {


  id: string
  adherent: Adherent
  services: Service
  position: any
  description: string
  state: any
  dateOrdered: string
  dateChosen: string
  dateAccepted: string
  dateDone: string
  offers: any[]
  offerSelected: any

  constructor(id: string, adherent: Adherent, services: Service, position: any, description: string, state: any, dateOrdered: string, dateChosen: string, dateAccepted: string, dateDone: string, offers: any[], offerSelected: any) {
    this.id = id;
    this.adherent = adherent;
    this.services = services;
    this.position = position;
    this.description = description;
    this.state = state;
    this.dateOrdered = dateOrdered;
    this.dateChosen = dateChosen;
    this.dateAccepted = dateAccepted;
    this.dateDone = dateDone;
    this.offers = offers;
    this.offerSelected = offerSelected;
  }
}
