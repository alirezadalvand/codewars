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

     /////////////////////////////////////////////////

     function formatDuration (seconds) {
        let sec = seconds % 60;
        let min = Math.floor(seconds / 60);
        let hours = Math.floor(min / 60);
        min = min % 60;
        let days = Math.floor(hours / 24);
        hours = hours % 24;
        let years = Math.floor(days / 365);
        days = days % 365;
          
        let format = '';
        
        if (years)
          format = years === 1 ? '1 year' : `${years} years`;
          
        if (days){
          if (format) format += ', ';
          format += days === 1 ? '1 day' : `${days} days`;
        }
        
        if (hours){
          if (format) format += ', ';
          format += hours === 1 ? '1 hour' : `${hours} hours`;
        }
        
        if (min){
          if (format)
            if (sec) format += ', '; else format += ' and ';
          format += min === 1 ? '1 minute' : `${min} minutes`;
        }
        
        if (sec){
          if (format) format += ' and ';
          format += sec === 1 ? '1 second' : `${sec} seconds`;
        }
      
        return format != '' ? format : 'now';
      }