import { Injectable } from '@angular/core';
import { Http, Response, Headers, BaseRequestOptions, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IApp } from "app/iapp";

@Injectable()
export class DataService {
  /* This service handles all of the data coming in from the API.
     It should be provided across all components to allow the
     responses in the right places.
  */
  private _appsUrl = 'https://vivatechapi.cosmos.ai/luis/api/v2.0/'; // LUIS API URL
  private _apiKey = '6fc5c859cee94cc7bd2833c4d729ea2e'; // API Key
  private _headers: Headers;
  private _options: RequestOptions;

  constructor(private _http: Http) {
    this._headers = new Headers({ 'Content-Type': 'application/json' });
    this._headers.append('Ocp-Apim-Subscription-Key', this._apiKey);
    this._options = new RequestOptions({ headers: this._headers });
  }
  
  getPersonalAssistants(): Observable<IApp[]> {
    let url = this._appsUrl+'apps/assistants?skip=0&take=100';

    return this._http.get(url, this._options)
      .map((response: Response) => <IApp[]>response.json())
      .do(data => console.log('GET Apps: '+JSON.stringify(data)))
      .catch(this.handleError);
  }

  getPredictionsFromEndpoint(appId:string,query:string): Observable<Response> {
    let url = this._appsUrl+appId+'?q='+query;

    return this._http.get(url, this._options)
      .map((response: Response) => <IApp[]>response.json())
      .do(data => console.log('GET Predictions: '+JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error:any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
