// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     const name = (req.query.name || (req.body && req.body.name));
//     const responseMessage = name
//         ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//         : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: JSON.stringify(responseMessage)
//     };
// }

var unirest = require("unirest");

function fetchUpdate() {
  var postUrl = "https://randomuser.me/api?results=10&format=json";
  var promise = new Promise(function (resolve, reject) {
    unirest
      .get(postUrl)
      .then((response) => resolve(response.body))
      .catch((err) => reject(err));
  });
  return promise;
}

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  await fetchUpdate().then((response) => {
    context.log("JavaScript HTTP trigger function after a request." + response);

    context.res = {
      // status: 200, /* Defaults to 200 */
      body: response,
    };
  });
};
