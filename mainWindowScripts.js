(function(){
  'use strict';

  function initializePage(e) {
    console.log(`[${new Date().toDateString()}]: page loaded successfully`);
  }

  window.on('load', initializePage);
}());