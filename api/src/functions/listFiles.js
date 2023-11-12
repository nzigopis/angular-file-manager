const { app } = require('@azure/functions');

app.http('listFiles', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
      context.log('Http function was triggered.');

      // const response = new response({ body: ['file1', 'file2.json'] });
      // response.headers.set('content-type', 'application/json');
      // return response;

      return {
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({files: ['file1', 'file2.json']})
      };
    }
});
