"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class apiController {
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { request } = req.body;
            let [data, signature] = request.split('.');
            try {
                //const runner = await RunController.fetchValidatedRunner(runScore.name, data, signature);
                console.log('Signature verification failed');
                return res.status(200).json({ totalDistanceRun: -1 });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error updating runner score ${err}`,
                });
            }
        });
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { request } = req.body;
            const [data, signature] = request.split('.');
            try {
                //const runner = await RunController.fetchValidatedRunner(runStat.name, data, signature);
                res.status(200).send({ ranking: -1 });
                res.status(404).send({
                    message: `Cannot find validated runner with name=${xxx}.`,
                });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error retrieving stat. Error: ${err}`,
                });
            }
        });
    }
}
exports.default = apiController;
//# sourceMappingURL=api.controller.js.map