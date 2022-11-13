import { Component, OnInit } from '@angular/core';
import { EthValidatorService } from '../eth-validator.service';

@Component({
  selector: 'app-eth-validator',
  templateUrl: './eth-validator.component.html',
  styleUrls: ['./eth-validator.component.css']
})
export class EthValidatorComponent implements OnInit {

  constructor(public ethValidatorService: EthValidatorService) { }

  ngOnInit(): void {
    this.ethValidatorService.requestValidatorStatus('1');
  }

}
