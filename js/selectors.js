// declare your functions here...
//$('parent-tag child-tag:first-child')
//$("img[alt='the beatles making faces']")
//$('div:last')
/*Write a function divSelector that does not accept any parameters.
 The function should use a class selector to return the two divs with the class pics.
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
function divSelector() {
  return $('div.pics');
}
