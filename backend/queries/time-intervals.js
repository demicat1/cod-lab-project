intervals = []

start = '08:00'
end = '21:00'
start = timeToNumber(start)
end = timeToNumber(end)

data = []
data.push(
  '2022-04-14 01:40:00+06',
  '2022-04-14 12:40:00+06',
  '2022-04-16 09:00:18.114+06'
)
bookedTimes = data.map((x) => {
  const date = new Date(x)
  return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000)
  // 14.04.2022, 07:40:00
  // 14.04.2022, 18:40:00
  // 16.04.2022, 15:00:18
})

getIntervals(start, end, bookedTimes)

intervals.forEach((i) => {
  console.log(i)
})

function timeToNumber(time) {
  time = time.split(':')
  hourMark = parseInt(time[0], 10) + parseInt(time[1], 10) / 60
  return hourMark
}

function getIntervals(start, end, bookedTimes = []) {
  console.log(intervals, start, end, bookedTimes)
  return generateIntervals(intervals, start, end, bookedTimes)
}

function generateIntervals(array = [], start, end, bookedTimes = []) {
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

  if (start >= end) return array
  generateIntervals(array, start, end, bookedTimes)
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
