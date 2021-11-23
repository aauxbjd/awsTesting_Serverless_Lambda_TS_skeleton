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
const axios_1 = require("axios");
describe("Integration Test", () => {
    it("hello world integration test", () => __awaiter(void 0, void 0, void 0, function* () {
        const query = {
            a: "hi"
        };
        const response = yield axios_1.default.get("http://localhost:4566/restapis/1dkehknjj4/local/_user_request_/lambdaHandler", { params: query });
        expect(response.status).toEqual(200);
        expect(response.data).toEqual(`Queries: ${JSON.stringify(query)}`);
    }));
});
//# sourceMappingURL=handler.integ.test.js.map