'use strict';

var workers = module.exports =  { 
    css        :  [ 'css', 'html', 'markdown' ]
  , html       :  [ 'html', 'ejs', 'markdown' ]
  , javascript :  [ 'html', 'javascript', 'markdown' ]
  , json       :  [ 'json' ]
};

module.exports.supported = Object.keys(workers)
  .filter(function (w) { 
    return w !== 'php' && w !== 'xquery'; 
  });

function getWorkers(lang) {
  return Object.keys(workers)
    .filter(function (k) {
      return ~workers[k].indexOf(lang);
    });
}
