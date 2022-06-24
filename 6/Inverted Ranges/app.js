function invertedRanges(ranges) {

  let pos = 0
  ,   res = [];
  
  for (let [a, b] of ranges) {
    
    if (pos < a)
      res.push([pos, a - 1]);
    
    pos = b + 1;
    
  }
  
  if (pos <= 100)
    res.push([pos, 100]);
  
  return res;
  
}


/////////////////////////////////////////

const invertedRanges = ranges =>
  [...ranges, [101, 101]].reduce( ({idx, res}, [start, end]) =>
     ( {res: start-- !== idx ? [...res, [idx, start]] : res, idx: ++end} ), {idx: 0, res: []} ).res;


////////////////////////////////////////////////////////////////////
function invertedRanges(ranges) {
  if (ranges.length === 0) return [[0, 100]];
  let start = 0, result = [];
  for (let i = 0; i < ranges.length; i++) {
    if (ranges[i][0] === start) {
      start = ranges[i][1]+1;
    } else {
      result.push([start, ranges[i][0]-1]);
      start = ranges[i][1]+1
    }
  }
  if (start < 100) result.push([start, 100]);
  return result;
}