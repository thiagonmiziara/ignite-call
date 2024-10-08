export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('pt-br', {
    weekday: 'long',
  })

  return Array.from(Array(7).keys())
    .map((day) => {
      return formatter.format(new Date(Date.UTC(2021, 5, day)))
    })
    .map((weekday) => {
      return weekday.substring(0, 1).toUpperCase().concat(weekday.substring(1))
    })
}
