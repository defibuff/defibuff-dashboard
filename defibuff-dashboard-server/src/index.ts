import express, {Application, application, Request, Response} from 'express';
import axios from 'axios';
import { BeaconChainResponse } from './types/types';
const calculator = require('./services/validatorYieldCalculator');

const app: Application = express();

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Pass to next layer of middleware
    next();
});

app.get('/api/v1/eth-validator/:id', async (req: Request, res: Response) => {
    const apiResult = await axios.get<BeaconChainResponse>('https://beaconcha.in/api/v1/validator/stats/' + req.params.id)
    res.json({value: calculator.calculateYield(apiResult.data.data)});
});

app.listen(3000);
