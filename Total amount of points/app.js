function points(games) {
    let arr = []
    let sum = 0
    games.map((num)=>{
   if(num[0]>num[2]){
       sum +=3
   }else if (num[0] === num[2]) {
       sum +=1
   }
  
   
    })
     return sum;
  }




  ///////////////////////////////////



  const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)