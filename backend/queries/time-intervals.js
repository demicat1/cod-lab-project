intervals = []

function timeToNumber(time) {
  time = time.split(':')
  hourMark = parseInt(time[0], 10) + parseInt(time[1], 10) / 60
  return hourMark
}

function getIntervals(start, end, bookedTimes = []) {
  generateIntervals(timeToNumber(start), timeToNumber(end), bookedTimes)
  return intervals;
}

function generateIntervals(start, end, bookedTimes, array = []) {
  isBooked = false
    hours = bookedTimes.map((x) => {
    return (x.getHours() + x.getMinutes() / 60 + x.getSeconds() / 3600).toFixed(2)
  })
  hours.forEach((h) => {
    if (start <= h && (start + 0.5) >= h) {
      isBooked = true
      return
    }
  })
  interval = []
  interval.push(start)
  interval.push((start += 0.5))
  interval = intervalToString(interval)

  if(!isBooked)
    array.push(interval)

  if (start >= end) { intervals = array; return }
  generateIntervals(start, end, bookedTimes, array)  
}

function intervalToString(interval) {
  let start = interval[0]
  let end = interval[1]

  start = formatTime(start)
  end = formatTime(end)

  return start + ' - ' + end
}

function formatTime(hourMark) {
  let string
  let minute = ':00'

  if (Number.isInteger(hourMark)) {
    string = hourMark.toString() + minute
  } else {
    minute = hourMark % Math.floor(hourMark)
    minute *= 60
    minute = ':' + Math.round(minute).toString()
    string = Math.floor(hourMark).toString() + minute
  }

  if (hourMark < 10) {
    string = '0' + string
  }

  return string
}

module.exports = {
  getIntervals
}
