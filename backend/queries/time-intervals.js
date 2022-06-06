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

function generateIntervals(array, start, end) {
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
    switch (hourMark % Math.floor(hourMark)) {
      case 0.5:
        minute = ':30'
        break
      case 0.25:
        minute = ':15'
        break
      case 0.75:
        minute = ':45'
        break
    }
    string = Math.floor(hourMark).toString() + minute
  }

  if (hourMark < 10) {
    string = '0' + string
  }

  return string
}
