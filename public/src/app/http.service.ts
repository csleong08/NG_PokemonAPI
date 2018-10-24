import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
      // this.getTasks();
      this.getPokemon();
  }
  getTasks(){
  // let tempObservable = this._http.get('/tasks');
  // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks')
  }
  getPokemon(){
    let charizard = this._http.get('https://pokeapi.co/api/v2/pokemon/6/');
    charizard.subscribe(data => console.log(data, `My favorite pokemon is ${data.name}!`));
    charizard.subscribe(data => 
    { for(let i in data.moves)
      console.log(`${data.name} can use ${data.moves[i].move.name}!`));
    }
  }
}
