var myTracker = new tracking.Tracker('target');

var img = document.getElementById('test-image');
var friends = ['Friend 1'];

var tracker = new tracking.ObjectTracker(['face', 'eye', 'mouth']);
tracker.setStepSize(1.7);

tracking.track('#test-image', tracker);

tracker.on('track', function(event) {
  event.data.forEach(function(rect) {
    window.plot(rect.x, rect.y, rect.width, rect.height);
  });
});

window.plot = function(x, y, w, h) {
  var rect = document.createElement('div');
  var tagBox = document.createElement('div');
  var input = document.createElement('input');

  input.value = friends.pop();
  if (input.value === 'undefined'){
    input.value = 'tag a friend';
    rect.style.backgroundColor = 'black';
  }

  rect.onclick = function name() {
    input.select();
  };

  tagBox.classList.add('tagBox');
  rect.classList.add('rect');

  rect.appendChild(input);
  rect.appendChild(tagBox);
  document.querySelector('.container').appendChild(rect);
  
  rect.style.width = w + 'px';
  rect.style.height = h + 'px';
  rect.style.left = (img.offsetLeft + x) + 'px';
  rect.style.top = (img.offsetTop + y) + 'px';
};
