import {Injectable} from '@angular/core';

@Injectable()
export class Configuration {
  public server = 'http://localhost:8080/';
  public apiUrl = 'api/';
  public apiVersion1 = 'v1/';
  public serverWithApiUrl = this.server + this.apiUrl + this.apiVersion1;
}
