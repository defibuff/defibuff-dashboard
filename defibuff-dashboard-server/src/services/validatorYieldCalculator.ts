import { DailyValidatorPerformance } from "../types/types";

const calculateYield = (data: DailyValidatorPerformance[]) => {
    data.forEach(daily => {
        // console.log(daily.end_balance);
    });
    return data[data.length-2].end_balance;
};

exports.calculateYield = calculateYield;