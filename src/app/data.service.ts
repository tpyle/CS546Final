import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import {User } from './user';
import { RecipeDetail } from './recipeDetails';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {recipes, profileInfo, recipeDetail } from './mock-data';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  response: any;

  getAllRecipes():Observable<Recipe[]>{
    // return this._http.get('/recipes')
      // .map(result => this.response = result.json());
    return of(recipes);
  }

  getCurrentUser():Observable<User>{
    return this._http.get('/getUserFromCookies')
      .map(result => this.response = result.json());
    //return of(profileInfo);
  }
  getRecipeById(id):Observable<RecipeDetail>{
    //return this._http.get("/", id).map(result => this.result = result.json().data);
    return of(recipeDetail);
  }
  updateUserInfo(changed){
    //send changed data to server
    // this._http.post("/", changed);
    console.log(changed);
    return of("");
  }

}
