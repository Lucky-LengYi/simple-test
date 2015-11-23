function single_element(arr) {
  var result = arr.filter(function (item, i) {
    return i % 2 === 1;
  });
  return result.filter(function (item, i) {
    return result.indexOf(item) === result.lastIndexOf(item);
  });
}
