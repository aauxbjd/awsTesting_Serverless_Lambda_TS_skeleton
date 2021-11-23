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
const app_1 = require("../../src-ts/app");
describe('Unit test for app handler', function () {
    it('verifies successful response', () => __awaiter(this, void 0, void 0, function* () {
        const event = {
            queryStringParameters: {
                a: "1"
            }
        };
        const result = yield (0, app_1.lambdaHandler)(event);
        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(`Queries: ${JSON.stringify(event.queryStringParameters)}`);
    }));
});
//# sourceMappingURL=test-handler.test.js.map