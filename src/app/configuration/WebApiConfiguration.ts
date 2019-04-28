import {Injectable} from '@angular/core';

@Injectable()
export class Configuration {
  public server = 'https://smoky-app.herokuapp.com/';
  public apiUrl = 'api/';
  public apiVersion1 = 'v1/';
  public serverWithApiUrl = this.server + this.apiUrl + this.apiVersion1;
}
