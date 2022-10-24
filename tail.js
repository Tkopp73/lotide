
const tail = function(a) {
  let words = a.slice(1);
  let string = words.join(', ');
  return string;
};



module.exports = tail;