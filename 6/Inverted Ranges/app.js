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