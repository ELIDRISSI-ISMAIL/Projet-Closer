export class AdherentPost {



  name!: string
  position!: PositionPost
  compte!: ComptePost




  constructor() {

    this.name = "Sql";
    this.position = new PositionPost();
    this.compte = new ComptePost();

  }
}

export class PositionPost {
    latitude!: number
    longitude!: number

  constructor() {
    this.latitude = 1;
    this.longitude = 1;
  }
}

export class ComptePost {
    email!: string
    password!: string


  constructor() {
    this.email = "student@EMI.MA";
    this.password = "password";
  }
}
