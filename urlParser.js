var urlParser = (function (_) {
  'use strict';

  function setValue(value) {
    if (!isNaN(value))
      return Number(value);
    else
      return value;
  }

  function parsePattern(pattern, url) {
    var arrPattern = pattern.replace(/:/g, '').slice(1).split('/');

    return _.chain(url.slice(1).split('/'))
      .map(function (item, index) {
        if (item != arrPattern[index]) {
          if (item.indexOf('?') != -1) return [arrPattern[index], setValue(item.split('?')[0])];
          else return [arrPattern[index], setValue(item)];
        }
      })
      .compact() // array with no falsy values
      .object()
      .value();
  }

  function parseVariables(url) {

      return _.chain(url.slice(1).split('&'))
        .map(function (item) {
          if (item) {
            var itemValue = item.split('=');
            if (itemValue.length == 2) {
              if (item.indexOf('?') != -1) return [itemValue[0].split('?')[1], setValue(itemValue[1])];
              else return [itemValue[0], setValue(itemValue[1])];
            }
          }
        })
        .compact()
        .object()
        .value();
    }
    //TODO: is number 
  return {
    parse: function (pattern, url) {
      return _.extend(parsePattern(pattern, url), parseVariables(url));
    }
  }

})(_);