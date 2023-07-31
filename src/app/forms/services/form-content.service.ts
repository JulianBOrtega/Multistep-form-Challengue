import { Injectable } from '@angular/core';
import { UserInfo } from '../models/userInfo';
import { Plan } from '../models/plan';
import { Addons } from '../models/addons';

@Injectable({
  providedIn: 'root'
})

export class FormContentService {

  private _userInfo: UserInfo | undefined;
  private _plan: Plan | undefined;
  private _addons: Addons | undefined;

  constructor() { }
  getUserInfo(): UserInfo | undefined {
    return this._userInfo;
  }

  setUserInfo(data: UserInfo): void {
    this._userInfo = data;
  }

  getPlan(): Plan | undefined {
    return this._plan;
  }

  setPlan(data: Plan) {
    this._plan = data;
  }

  setAddons(data: Addons): void {
    this._addons = data;
  }
  
  getAddons(): Addons | undefined {
    return this._addons;
  }

  submitContent(): boolean {
    if(this._userInfo == undefined || this._plan == undefined || this._addons == undefined)
      return false; // returns false if there was a problem
    
    // Sends information to a database...

    this.clear();
    return true; // returns true if it was successful
  }

  clear(): void {
    this._userInfo = undefined;
    this._plan = undefined;
    this._addons = undefined;
  }
}
