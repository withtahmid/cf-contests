async function fetchData() {
    try {
        const response = await fetch('https://codeforces.com/api/contest.list');
        
        
    } catch (error) {
        console.error('Error fetching Codeforces contests:', error);
        contests = [];
    }
    return contests;
}

function isUnusualTime(startDate) {
    const unusualTime = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 20, 35);
    return startDate.getTime() !== unusualTime.getTime();
  }


function getDivisionNumber(name) {
    if (name.includes('Div. 2')) {
      return 2;
    } else if (name.includes('Div. 1')) {
      return 1;
    } else if (name.includes('Div. 3')) {
      return 3;
    } else if (name.includes('Div. 4')) {
      return 4;
    }
    return 0;
}

function getStartTime(start){
    let hours = start.getHours();
    let minutes = start.getMinutes();
    hours = hours ? hours : 12;
    minutes = ('0' + minutes).slice(-2);
    return { hours, minutes }
}

function getStartDate(start){
    return {
        dayName: start.toLocaleString('en-us', { weekday: 'long' }),
        date: start.getDate(),
        month: start.getMonth(),
        year: start.getFullYear(),
    };
}

function getDuration(durationSeconds) {
  const hours = Math.floor(durationSeconds / 3600);
  const minutes = Math.floor((durationSeconds % 3600) / 60);
  const seconds = durationSeconds % 60;
  return {hours, minutes, seconds};
}

export function getTimeRemaining(startDate) {
  const currentTime = new Date();
  const timeDiff = Math.abs(startDate - currentTime);
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);
  // let remainingTime = '';

  // if (days === 0 && hours === 0 && minutes === 0) {
  //   remainingTime = `${seconds}s`;
  // } else if (days === 0 && hours === 0) {
  //   remainingTime = `${minutes}m ${seconds}s`;
  // } else if (days === 0) {
  //   remainingTime = `${hours}h ${minutes}m ${seconds}s`;
  // } else {
  //   remainingTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  // }

  return { days, hours, minutes, seconds }
}

export async function arrangeData(response){
  const data = await response.json();
  var items = data.result.filter(contest => contest.phase === 'BEFORE');
  items.reverse();
  const contests = items.map(item => {
      const dateObj = new Date(item.startTimeSeconds * 1000);
      const title = item.name;
      const div = getDivisionNumber(item.name);
      const startDate = getStartDate(dateObj);
      const startTime = getStartTime(dateObj);
      const duration = getDuration(item.durationSeconds);
      const id = item.id;
      const unusualTime = isUnusualTime(dateObj);
      return { title, div, startDate, startTime, duration, unusualTime, id, dateObj }
  });
  return contests;
}