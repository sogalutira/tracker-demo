var myTracker = new tracking.Tracker('target');
var objects = new tracking.ObjectTracker(['face', 'eye', 'mouth']);

objects.on('track', function(event) {
  if (event.data.length === 0) {
    // No objects were detected in this frame.
  } else {
    event.data.forEach(function(rect) {
      // rect.x, rect.y, rect.height, rect.width
    });
  }
});



console.log('tracker', myTracker);
console.log('objects', objects);