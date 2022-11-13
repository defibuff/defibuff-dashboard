import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EthValidatorService {

  validatorIds: number[] = [1]

  beaconChainApiAddress: string = 'http://localhost:3000/api/v1/eth-validator/';

  constructor(private http: HttpClient) { }

  requestValidatorStatus(index: string) {
    const req = this.http.get<any>(this.beaconChainApiAddress + index);
    req.subscribe(res => {
      console.log(res);
    });
    return req;

  }
}
