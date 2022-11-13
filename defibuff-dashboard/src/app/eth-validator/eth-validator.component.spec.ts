import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthValidatorComponent } from './eth-validator.component';

describe('EthValidatorComponent', () => {
  let component: EthValidatorComponent;
  let fixture: ComponentFixture<EthValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EthValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
