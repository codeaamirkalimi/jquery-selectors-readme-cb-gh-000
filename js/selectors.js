// declare your functions here...
//$('parent-tag child-tag:first-child')
//$("img[alt='the beatles making faces']")
//$('div:last')
/*Write a function ninjaBabySelector that does not accept any parameters.
 The function should use an ID selector to return the ninja baby image.

 */
function paragraphSelector() {
  return $('p');
}
function lastImageSelector() {
  return $('img:last');
}
function ninjaBabySelector() {
  return $('img#baby-ninja');
}
