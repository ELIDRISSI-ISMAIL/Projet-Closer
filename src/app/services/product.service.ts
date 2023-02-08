import {Injectable, OnInit} from '@angular/core';
import {Product} from "../models/Product";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ResponseApi} from "../models/ResponseApi";
import {catchError, Observable, of} from "rxjs";
import {ResponseAd} from "../models/ResponseAd";
import {Adherent} from "../models/Adherent";
import {AdherentPost} from "../models/AdherentPost";
import {Service} from "../models/Service";
import {Requests} from "../models/Requests";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products !: Product[];

  demandes!: Requests[];

  private source: string = "localhost";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  currentUser!: Adherent;

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<ResponseApi> {
    let ac = this.http.get<ResponseApi>("https://dummyjson.com/products?skip=4&limit=12",
      {
        headers: {}
      });
    console.log(ac);
    return ac;
  }

  public getAdherents(): Observable<Adherent[]> {
    let ab = this.http.get<Adherent[]>("http://" + this.source + ":9999/adherents/find/all",
      {
        headers: {}
      });
    console.log(ab);
    return ab;
  }

  //** GET : Tous les services /////
  public getServices(): Observable<Service[]> {
    let ab = this.http.get<Service[]>("http://" + this.source + ":9999/services/find/all",
      {
        headers: {}
      });
    console.log(ab);
    return ab;
  }

  //** GET : TOUS les demandes /////

  // public getDemandes(): Observable<Requests[]> {
  //   console.log(this.currentUser.id);
  //   let ab =  this.http.get<Requests[]>("http://"+this.source+":9999/requests/findByAdherent/"+this.currentUser.id,
  //     {headers : {
  //       }});
  //   console.log("http://"+this.source+":9999/requests/findByAdherent/"+this.currentUser.id)
  //   console.log("voici les demandes :");``
  //   console.log(ab)
  //   return ab;
  // }

  public getDemandes(): Observable<Requests[]> {
    console.log(this.currentUser.id);
    console.log("http://" + this.source + ":9999/requests/findByAdherent/" + this.currentUser.id)
    return this.http.get<Requests[]>("http://" + this.source + ":9999/requests/findByAdherent/" + this.currentUser.id)
  }

  public getDemandessub(): void {
    this.getDemandes().subscribe(
      (response) => {
        this.demandes = response;
        console.log("2eme appel");
        console.log(response);
      },

    );
  }

  /** POST: add a new hero to the database */
  public postAdherent(adherent: AdherentPost): Observable<AdherentPost> {

    const body = JSON.stringify(adherent);
    console.log("this is the body" + body);
    return this.http.post<AdherentPost>("http://" + this.source + ":9999/adherents/add", body, {
      headers: {}
    })
      ;
  }

  public getProductsbySearch(s: string): Observable<ResponseApi> {
    return this.http.get<ResponseApi>("https://dummyjson.com/products/search?limit=12&q=" + s,
      {
        headers: {}
      });


  }


  public getCatItems(cat: string): Observable<ResponseApi> {
    return this.http.get<ResponseApi>("https://dummyjson.com/products/category/" + cat,
      {
        headers: {}
      });
  }


  public createAd(ad: AdherentPost): Observable<any> {
    return this.http.post<AdherentPost>("http://" + this.source + ":9999/adherents/add", JSON.stringify(new AdherentPost()), this.httpOptions)
      .pipe(
        catchError(this.handleError<AdherentPost>('Error occured'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  //
  // registerProvider(selectedService: Service) {
  //
  // }


  public addProvider(selectedService: Service) {
    let addProviderRoute: string = "http://" + this.source + ":9999/adherents/addP/" + this.currentUser.id + "/" + selectedService.id;

    //     let ac =  this.http.post<Service>(addProviderRoute,null,{headers : {
    //           }});
    //       console.log(ac,addProviderRoute);
    //       return ac;
    // }

    this.http.post(addProviderRoute, {}).subscribe(data => {
      console.log(data);
    });
  }

}

