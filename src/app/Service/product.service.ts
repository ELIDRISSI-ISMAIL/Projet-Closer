import {Injectable, OnInit} from '@angular/core';
import {Product} from "../models/Product";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { ResponseApi} from "../models/ResponseApi";
import {catchError, Observable, of} from "rxjs";
import {ResponseAd} from "../models/ResponseAd";
import {Adherent} from "../models/Adherent";
import {AdherentPost} from "../models/AdherentPost";
import {Service} from "../models/Service";

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  products !: Product[];
  private source: string = "10.72.103.93";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  currentUser! : Adherent;

  constructor(private http : HttpClient) { }

  public getProducts(): Observable<ResponseApi> {
      let ac =  this.http.get<ResponseApi>("https://dummyjson.com/products?skip=4&limit=12",
        {headers : {
          }});
      console.log(ac);
      return ac;
  }

  public getAdherents(): Observable<Adherent[]> {
    let ab =  this.http.get<Adherent[]>("http://"+this.source+":9999/adherents/find/all",
      {headers : {
        }});
    console.log(ab);
    return ab;
  }

  //** GET : Tous les services /////
  public getServices(): Observable<Service[]> {
    let ab =  this.http.get<Service[]>("http://"+this.source+":9999/services/find/all",
      {headers : {
        }});
    console.log(ab);
    return ab;
  }

  /** POST: add a new hero to the database */
  public postAdherent(adherent: AdherentPost): Observable<AdherentPost> {

    const body = JSON.stringify(adherent);
    console.log("this is the body"+body);
    return this.http.post<AdherentPost>("http://"+this.source+":requests/add/2/1", body,{headers : {
      }})
      ;
  }
  public getProductsbySearch(s : string) : Observable<ResponseApi> {
    return this.http.get<ResponseApi>("https://dummyjson.com/products/search?limit=12&q="+s,
      {headers : {
        }});


  }


  public getCatItems(cat : string): Observable<ResponseApi> {
    return this.http.get<ResponseApi>("https://dummyjson.com/products/category/"+cat,
      {headers : {
        }});
  }


  public createAd(ad: AdherentPost): Observable<any> {
    return this.http.post<AdherentPost>("http://"+this.source+":9999/adherents/add", JSON.stringify(new AdherentPost()), this.httpOptions)
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




  public addProvider(selectedService: Service)  {
  let addProviderRoute: string ="http://"+this.source+":9999/adherents/addP/"+this.currentUser.id+"/"+selectedService.id;

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

