import { Injectable } from '@angular/core';

//import { Eth } from '../../../../js/ethjs.js';
//import { TestRPC } from '../../../../js/ethereumjs-testrpc.js';

//import Eth = require('Eth');
//import TestRPC = require("TestRPC");

declare var Eth: any;
declare var TestRPC: any;

//import { Eth } from 'ethjs';
//import { TestRPC } from 'ethereumjs-testrpc';

//const Eth = require('ethjs');
//const TestRPC = require('ethereumjs-testrpc');

@Injectable()
export class EthereumProviderService {

    EthInstance: any;

    constructor() {
        this.EthInstance = new Eth(TestRPC.provider());
    }

}
