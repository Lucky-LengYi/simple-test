function calculate_median(arr) {
  var new_arr =  arr.sort(function (item1, item2) {
    return item1 - item2;
  }).filter(function (item, i) {
    return i % 2 === 1;
  });

  return getMedianNum(new_arr);
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

//集合中第偶数个元素的个数为偶数时，计算第偶数个元素的中位数
