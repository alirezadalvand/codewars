function formatDuration(seconds) {
    if (seconds === 0) return 'now'
  
    const time = {
      year: 31536000,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    }
    const res = []
  
    for (let key in time) {
      if (seconds >= time[key]) {
        let val = Math.floor(seconds / time[key])
        res.push((val += ' ' + key + (val > 1 ? 's' : '')))
        seconds = seconds % time[key]
      }
    }
  
    return res.length > 1
      ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1')
      : res[0]
  }

  //////////////////////////////////////////////

  const formatDuration = s => s == 0 ? 'now' :
     [Math.floor(s/60/60/24/365),
      Math.floor(s/60/60/24)%365,
      Math.floor(s/60/60)%24,  
      Math.floor(s/60)%60 ,
      s%60]
     .map((e,i)=> e + ' ' + ['year', 'day', 'hour', 'minute', 'second'][i] + (+e>1?'s': ''))
     .filter(e=> !/^0/.test(e))
     .join(', ')
     .replace(/,\s(?=[\d\s\w]*$)/, ' and ');