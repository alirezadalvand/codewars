
function snail(array) {
    var vector = [];
    while (array.length) {
      vector.push(...array.shift());
      array.map(row => vector.push(row.pop()));
      array.reverse().map(row => row.reverse());
    }
    return vector;
  }

/////////////////////////////////////////////////

snail = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}


/////////////////////////////////////////////////////

snail = function(array) {
  var maxx = array[0].length,
    maxy = maxx,
    minx = -1, miny = 0,
    x = 0, y = 0,
    result = [], dir = "r";
  
  for(var i = maxx*maxx;i>0;i--){
    result.push(array[y][x]);
    switch (dir){
      case "u": y--; break;
      case "l": x--; break;
      case "d": y++; break;
      case "r": x++; break;
    }
    if(x==maxx-1 && y==miny){ dir="d"; minx++; }
    else if(x==maxx-1 && y==maxy-1){ dir="l"; miny++;  }
    else if(x==minx && y==maxy-1){ dir="u"; maxx--; }
    else if(x==minx && y==miny){ dir="r"; maxy--; }
  }  
  return result;
}