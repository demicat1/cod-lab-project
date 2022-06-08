intervals = []

start = '08:00'
end = '21:00'
start = timeToNumber(start)
end = timeToNumber(end)

generateIntervals(intervals, start, end)

// intervals.forEach((i) => {
//   console.log(i)
// })

function timeToNumber(time) {
  time = time.split(':')
  hourMark = parseInt(time[0], 10) + parseInt(time[1], 10) / 60
  return hourMark
}

function getIntervals(start, end, bookedTimes = []) {
  console.log(intervals, start, end, bookedTimes)
  //return generateIntervals(intervals, start, end, bookedTimes);
}

// TODO exclude from array time slots containing in bookedTimes
function generateIntervals(array, start, end, bookedTimes = []) {
  interval = []
  interval.push(start)
  interval.push((start += 0.5))
  interval = intervalToString(interval)

  array.push(interval)

  if (start >= end) return array
  generateIntervals(array, start, end)
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
  }
  else {
    minute = hourMark % Math.floor(hourMark)
    minute *= 60
    minute = ":" + Math.round(minute).toString()
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