function assembleString(arr){
    let r = []
    for(let i = 0; i<arr.length; i++){
      for(let j = 0; j<arr[i].length; j++){
        if(i==0) r.push(arr[i][j])
        if(r[j] == '*' || arr[i][j] !== '*') r[j] = arr[i][j]
      }
    }
    return r.map(x=>x=='*' ? '#' : x).join('')
  }



  ////////////////////////////////////////////

  const assembleString = a => {
    return [...Array((a[0] || []).length).keys()]
      .map(i => a.map(s => s[i])
      .filter(c => c != '*')[0] || '#')
      .join('');
  }



  /////////////////////////// 



  const assembleString = (arr) => {
    const result = [];
  
    arr.map((str) => {
      str
        .split("")
        .map((char, i) => (result[i] = char === "*" ? result[i] || "#" : char));
    });
  
    return result.join("");
  };

  //////////////////////////////////////////

  const assembleString=a=>a.length ? [...a[0]].map((e,i)=>a.map(x=>x[i]).filter(e=>e!=='*')).map(e=>e.length ? e[0] : '#').join`` : ''