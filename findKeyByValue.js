

const findKeyByValue = function(shows, showToFind) {
  for (const show in shows) {
    if (shows[show] === showToFind) {
      return show;
    }
  }
};


module.exports = findKeyByValue;