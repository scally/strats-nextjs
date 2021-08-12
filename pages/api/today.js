import { scheduleForDay } from "app/schedule"
import getDayOfYear from 'date-fns/getDayOfYear'

export default (_, res) => {
  const day = getDayOfYear(new Date())
  res.statusCode = 200
  res.json(scheduleForDay(day))
}
