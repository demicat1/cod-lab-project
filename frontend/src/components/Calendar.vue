<template>
  <div class="calendar">
    <div class="month-header">
      <button class="month-btn">&#60;</button>
      <span for="month">{{ month }}</span>
      <button class="month-btn">&#62;</button>
    </div>
    <div class="weekdays">
      <span>Mo</span>
      <span>Tu</span>
      <span>We</span>
      <span>Th</span>
      <span>Fr</span>
      <span>Sa</span>
      <span>Su</span>
    </div>
    <div class="days-container">
      <button class="day" v-for="day in days">
        {{ day }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      month: 'June',
      days: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
      ]
    }
  }
}
</script>

<style scoped>
.calendar {
  padding: 1em;
  border: 2px solid var(--primary);
  border-radius: 0.5em;
}

.weekdays {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 1em;
}

.month-btn {
  margin-inline: 0.5em;
  padding-inline: 0.3em;
  background-color: var(--primary);
  border-radius: 50px;
  border: 1px solid #000;
}

.month-btn:hover {
  background-color: var(--secondary);
}

.days-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5em;
}

.day {
  border-radius: 0.5em;
  background-color: var(--primary);
  border: 1px solid #000;
  aspect-ratio: 1;
}

.day:hover {
    background-color: var(--secondary);
}
</style>
