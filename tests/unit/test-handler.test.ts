import { lambdaHandler } from "../../src-ts/app";
import { APIGatewayProxyEvent, APIGatewayEvent, Context } from "aws-lambda";

 describe('Unit test for app handler', function () {
     it('verifies successful response', async () => {
         const event: APIGatewayProxyEvent = {
             queryStringParameters: {
                 a: "1"
             }
         } as any
         const result = await lambdaHandler(event)

         expect(result.statusCode).toEqual(200);
         expect(result.body).toEqual(`Queries: ${JSON.stringify(event.queryStringParameters)}`);
     });
 });