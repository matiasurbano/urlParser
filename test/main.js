QUnit.test("Url Parse Tests", function (assert) {
  var urlPattern = '/:version/api/:collecton/:id',
    url = '/6/api/listings/3?sort=desc&limit=10',
    testObject = {
      version: 6,
      collecton: "listings",
      id: 3,
      sort: "desc",
      limit: 10
    };

  // Example with Query Args
  assert.deepEqual(urlParser.parse(urlPattern, url), testObject, "OK - '/:version/api/:collecton/:id'");

  
  urlPattern = '/news/:date/:title/:id';
  url = '/news/2015-04-04/australian-pharmaceutical-industry-calls-for-government-bailout/6370712';
  testObject = {
    date: '2015-04-04',
    title: 'australian-pharmaceutical-industry-calls-for-government-bailout',
    id : 6370712
  };
  
  
  // Example with no Query Args
  assert.deepEqual(urlParser.parse(urlPattern, url), testObject, "OK - '/news/:date/:title/:id'");

  
  
  
});