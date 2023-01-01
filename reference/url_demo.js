const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

//Serialized URL
console.log(myUrl.href);

//Host ( Root domain )
console.log(myUrl.host);

//Host name ( Does not get the port)
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);
