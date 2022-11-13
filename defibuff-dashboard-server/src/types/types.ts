
export interface BeaconChainResponse {
    data: DailyValidatorPerformance[]
}

export interface DailyValidatorPerformance { 
    "attester_slashings": number,
    "day": number,
    "deposits": number,
    "deposits_amount": number,
    "end_balance": number,
    "end_effective_balance": number,
    "max_balance": number,
    "max_effective_balance": number,
    "min_balance": number,
    "min_effective_balance": number,
    "missed_attestations": number,
    "missed_blocks": number,
    "missed_sync": number,
    "orphaned_attestations": number,
    "orphaned_blocks": number,
    "orphaned_sync": number,
    "participated_sync": number,
    "proposed_blocks": number,
    "proposer_slashings": number,
    "start_balance": number,
    "start_effective_balance": number,
    "validatorindex": number
}