import seedrandom from 'seedrandom'
import {getConfig} from 'app/config'
import {unfold} from 'ramda'

seedrandom(getConfig().random_seed, { global: true })

// min is inclusive, max is exclusive
const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

const shuffled = list =>
  [...list].sort(() => getRandomInt(-1, 2))

const buildYearlySchedule = people =>
  unfold(i => 
    i - people.length < 0 ? 
      false : 
      [shuffled(people), i - people.length], 366).flat()

export const schedule = getConfig().candidates.reduce((acc, curr) => {
  return {
    ...acc,
    [curr]: buildYearlySchedule(
      getConfig().candidates.filter(c => c !== curr)
    )
  }
}, {
  main: buildYearlySchedule(getConfig().candidates)
})

export const scheduleForDay = (day) => {
  const today = schedule.main[day]
  const alternative = schedule[today][day]
  return {
    today,
    alternative,
  }
}