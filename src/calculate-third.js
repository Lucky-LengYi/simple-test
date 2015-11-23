var _ = require('lodash');

function even_group_calculate_average(arr) {
  var collection = arr.filter(function (item, i) {
    return i % 2 === 1 && item % 2 === 0;
  });
  var result = [];

  collection = _.groupBy(collection, function (item) {
    return item.toString().length;
  });

  _.forEach(collection,function (val, key) {
    result.push(getAverageNum(val));
  });

  return result.length === 0 ? [0] : result ;
}

function getAverageNum(arr) {
  var result = 0;

  arr.forEach(function (item) {
    result += item;
  });

  return result / arr.length;
}
