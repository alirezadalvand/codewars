function dirReduc(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "WEST" && arr[i+1] === "EAST" ||
          arr[i] === "EAST" && arr[i+1] === "WEST" ||
          arr[i] === "NORTH" && arr[i+1] === "SOUTH" ||
          arr[i] === "SOUTH" && arr[i+1] === "NORTH") {
          arr.splice(i, 2);
          count++;
          i--;
      }
    }
    return count === 0 ? arr : dirReduc(arr);
  }


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function isOppo(dir1,dir2) {
    if (dir1 + dir2 === 'SOUTHNORTH') return true;
    if (dir1 + dir2 === 'NORTHSOUTH') return true;
    if (dir1 + dir2 === 'EASTWEST') return true;
    if (dir1 + dir2 === 'WESTEAST') return true;
    return false;
}
  
function dirReduc(arr){
  var len = arr.length
  for (var i = 0; i < len - 1; i++) {
    if (isOppo(arr[i], arr[i+1])) {
      arr.splice(i,2);
      return dirReduc(arr);
    }
  }
  return arr;
}



/////////////////////////////////////////////////////////////

function dirReduc(arr){
    var oppositeDirections = {
      NORTH: 'SOUTH',
      SOUTH: 'NORTH',
      WEST: 'EAST',
      EAST: 'WEST'
    };
    var directions = arr.slice(0);
    for (var i = 0; i < directions.length - 1;) {
      if (oppositeDirections[directions[i]] === directions[i+1]) {
        directions.splice(i, 2);
        i = (i === 0) ? 0 : i - 1;
      } else {
        i += 1;
      }
    }
    return directions;
  }