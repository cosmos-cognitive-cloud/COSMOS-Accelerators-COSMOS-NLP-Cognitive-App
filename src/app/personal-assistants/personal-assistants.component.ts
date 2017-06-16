import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { MdDialog, MdDialogRef, MdSnackBar } from "@angular/material";
import { IApp } from "app/iapp";

@Component({
  selector: 'personal-assistants',
  templateUrl: './personal-assistants.component.html',
  styleUrls: ['./personal-assistants.component.css']
})
export class PersonalAssistantsComponent implements OnInit {

  constructor(private _dataService: DataService,
              private _snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  public errorMessage = '';
  public apps: IApp[];
  public queryTextEN = '';
  public resultEN = '';
  public queryTextCN = '';
  public resultCN = '';
  public queryTextFR = '';
  public resultFR = '';
  public queryTextIT = '';
  public resultIT = '';
  public queryTextES = '';
  public resultES = '';

  public getPersonalAssistants() {
    this._dataService.getPersonalAssistants()
        .subscribe(
        apps => this.apps = apps['endpointUrls'],
        error => this.updateMessage(<any>error, 'ERROR'));
  }

  public submit(appUrl:string, language:string) {
    let splitArr = appUrl.split('/');
    let len = splitArr.length-1;
    let appId = splitArr[len];
    if (language == "English") {
      this._dataService.getPredictionsFromEndpoint(appId, this.queryTextEN)
          .subscribe(resultEN => this.resultEN = JSON.stringify(resultEN),
                     error => this.updateMessage(<any>error, 'ERROR'));
    }
    else if (language == "Chinese") {
      this._dataService.getPredictionsFromEndpoint(appId, this.queryTextCN)
          .subscribe(resultCN => this.resultCN = JSON.stringify(resultCN),
                     error => this.updateMessage(<any>error, 'ERROR'));
    }
    else if (language == "French") {
      this._dataService.getPredictionsFromEndpoint(appId, this.queryTextFR)
          .subscribe(resultFR => this.resultFR = JSON.stringify(resultFR),
                     error => this.updateMessage(<any>error, 'ERROR'));
    }
    else if (language == "Italian") {
      this._dataService.getPredictionsFromEndpoint(appId, this.queryTextIT)
          .subscribe(resultIT => this.resultIT = JSON.stringify(resultIT),
                     error => this.updateMessage(<any>error, 'ERROR'));
    }
    else if (language == "Spanish") {
      this._dataService.getPredictionsFromEndpoint(appId, this.queryTextES)
          .subscribe(resultES => this.resultES = JSON.stringify(resultES),
                     error => this.updateMessage(<any>error, 'ERROR'));
    }
  }

  updateMessage(message:string, type:string): void {
    if (message) {
      this._snackBar.open(`${type}: ${message}`, 'DISMISS', {
        duration: 3000
      });
    }
  }
}
