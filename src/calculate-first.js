function firstIndex(arr, item) {
  var isExist = false;
  var result;
  arr.forEach(function (ele, i) {
    if (ele === item && !isExist) {
      isExist = true;
      result = i;
    }
  });

  return result;
}

function lastIndex(arr, item) {
  var result;
  arr.forEach(function (ele, i) {
    if (ele === item) {
      result = i;
    }
  });

  return result;
}

function single_element(arr) {
  var result = arr.filter(function (item, i) {
    return i % 2 === 1;
  });
  console.log(result);
  return result.filter(function (item, i) {
    return firstIndex(result, item) === lastIndex(result, item);
  });
}

//第偶数个元素中，选出不重复的元素
