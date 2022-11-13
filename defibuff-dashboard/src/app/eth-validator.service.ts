import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EthValidatorService {

  validatorIds: number[] = [1]

  beaconChainApiAddress: string = 'https://beaconcha.in/api/v1/validator/stats/';

  constructor(private http: HttpClient) { }

  requestValidatorStatus(index: string) {
    const req = this.http.get<any>(this.beaconChainApiAddress + index);
    req.subscribe(res => {
      console.log(res);
    });

  }
}
