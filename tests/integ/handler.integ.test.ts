import axios from "axios";

describe("Integration Test", () => {
    it("hello world integration test", async () => {
        const query = {
            a: "hi"
        };
        const response = await axios.get("http://localhost:4566/restapis/1dkehknjj4/local/_user_request_/lambdaHandler", {params: query});

        expect(response.status).toEqual(200);
        expect(response.data).toEqual(`Queries: ${
            JSON.stringify(query)
        }`);
    });
});
