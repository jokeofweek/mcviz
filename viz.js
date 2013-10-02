d3.xml('drawing.svg', 'image/svg+xml', function(xml) {
  var node = document.importNode(xml.documentElement, true);
  d3.select('#viz').node().appendChild(node);

  d3.select('#g14577').style('fill', function(d) {
    return d.color = 'blue';
  });
});


$(document).ready(function() {
  var lastKey = '';

  $('#coursename').bind('input', function() {
    var val = $(this).val().toUpperCase();
    for (var key in mappings) {
      if (val.indexOf(key) == 0) {
        d3.select('#g' + mappings[key]).selectAll('*').style('fill', 'blue');
        if (lastKey != key) {
          d3.select('#g' + mappings[lastKey]).selectAll('*').style('fill', 'black')
        }
        lastKey = key;
        return;
      }
    }
    d3.select('#g' + mappings[lastKey]).selectAll('*').style('fill', 'black');
  });
});
