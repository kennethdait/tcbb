(function(){
  'use strict';

  function insertDateStamp() {
    let nowStr = new Date().toString(),
      dateTarget = document.querySelector('#date-target'),
      txtNode = document.createTextNode(nowStr),
      paragraph = document.createElement('p');
    
    paragraph.style.fontSize = '2.5em';
    paragraph.style.fontWeight = '600';
    return;
  }

  window.onload = (e) => {
    let msg = `[${new Date().toDateString()}]: page loaded successfully`;
    console.log(msg);
    insertDateStamp();
  }; 

}());