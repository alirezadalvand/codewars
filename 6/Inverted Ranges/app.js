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


