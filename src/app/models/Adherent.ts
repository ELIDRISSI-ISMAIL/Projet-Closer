export class Adherent {


  id!: string
  name!: string
  position!: Position
  compte!: Compte
  favoris!: any[]
  provider!: Boolean


  constructor(id: string, name: string, position: Position, compte: Compte, favoris: any[], provider: Boolean) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.compte = compte;
    this.favoris = favoris;
    this.provider = provider;
  }
}

export class Position {
    id!: number
    latitude!: number
    longitude!: number

  constructor(id: number, latitude: number, longitude: number) {
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export class Compte {

    id!: string
    email!: string
    password!: string


  constructor(id: string, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}
