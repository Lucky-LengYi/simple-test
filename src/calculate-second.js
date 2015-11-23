function calculate_median(arr) {
  var result =  arr.sort(function (item1, item2) {
    return item1 - item2;
  }).filter(function (item, i) {
    return i % 2 === 1;
  });

  return getMedianNum(result);
}

function getMedianNum(arr) {
  var result;
  if (arr.length % 2 === 1) {
    result = arr[(arr.length - 1) / 2];
  }else {
    result = (arr[(arr.length) / 2] + arr[((arr.length) / 2) - 1]) / 2;
  }

  return result;
}
