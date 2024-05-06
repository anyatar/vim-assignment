"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importStar(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const api_controller_1 = __importDefault(require("../src/controllers/api.controller"));
//var RunController = require('../src/controllers/run.controller').RunController;
//const chai = require('chai');
const sinon = require('sinon');
const console = require('console').console;
//const request = require('supertest');
chai_1.default.use(chai_http_1.default);
describe('Testing app controller', () => {
    let controller;
    const response = {
        sendStatus: (status) => Promise.resolve(status),
        status: (status) => {
            debugger;
            return Promise.resolve(status);
        }
    };
    before((done) => {
        sinon.stub(console, 'error');
        sinon.stub(console, 'log');
        sinon.stub(console, 'info');
        /*sinon.stub(Service.prototype, 'xxx').callsFake(() => {
            return Promise.resolve(true);
        });*/
        done();
    });
    beforeEach((done) => {
        sinon.resetHistory();
        controller = new api_controller_1.default();
        done();
    });
    after((done) => {
        sinon.restore();
        delete require.cache[require.resolve('../src/server')];
        done();
    });
    context('Testing RunController.signup', () => {
        it('signup response with status 200', (done) => {
            const request = {
                body: {
                    "name": "John Doe",
                    "age": 50,
                    "city": "London"
                }
            };
            const response = {};
            controller.create(request, response).then((status) => {
                (0, chai_1.expect)(status).to.equals(200);
                done();
            });
        });
        it('parseSendMail response with status 500', (done) => {
            const request = {
                "name": "John Dummy"
            };
            const response = {};
            controller.create(request, response).then((status) => {
                (0, chai_1.expect)(status).to.equals(500);
                done();
            });
        });
    });
    /*context('Testing RunController.update', () => {
        it('update response with status 200', (done) => {
            const request = {
                body: {
                    "xxx": 3014
                }
            };

            controller.parseSendTest(request, response).then((status) => {
                expect(status).to.equals(200);
                done();
            });
        });

        it('update response with status 500', (done) => {
            const request = {
                "xxx": 3014
            };

            controller.parseSendTest(request, response).then((status) => {
                expect(status).to.equals(500);
                done();
            });
        });
    });

    context('Testing RunController.myStats', () => {
        it('myStats response with status 200', (done) => {
            const request = {
                body: {
                    xxx: 1
                },
                params: {
                    engager: 'sparkpost'
                }
            };

            controller.myStats(request, response).then((status) => {
                expect(status).to.equals(200);
                done();
            });
        });

        it('myStats response with status 500', (done) => {
            const request = {
                xxx: 1
            };

            controller.myStats(request, response).then((status) => {
                expect(status).to.equals(500);
                done();
            });
        });
    });*/
});
//# sourceMappingURL=app.unit.test.js.map