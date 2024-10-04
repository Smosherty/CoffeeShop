import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  serverUrl = "http://localhost:8080/api/coffee";

  constructor(private httpClient: HttpClient) { }

  getCoffees() {
      return this.httpClient.get(this.serverUrl);
  };

  create(coffee: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(this.serverUrl, JSON.stringify(coffee), {
      headers
    });
  }
  
  // create(coffee: any) {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   });

  //   const body = new URLSearchParams();
  //   body.append("type", coffee.type);
  //   body.append("topping", coffee.topping);

  //   return this.httpClient.post(this.serverUrl, body.toString(), {headers});
  // }


  delete(id: any) {
    return this.httpClient.delete(`${this.serverUrl}/${id}`);
  }

  update(id: any, coffee: any) {
    let newData: any = {
      type: coffee.type,
      topping: coffee.topping
    }

    const headers = { 'Content-Type': 'application/json' };

    return this.httpClient.put(`${this.serverUrl}/${id}`, newData, { headers });

  };


}
