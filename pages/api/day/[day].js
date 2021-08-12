import { scheduleForDay } from "app/schedule"

export default (req, res) => {
  const {day} = req.query
  res.statusCode = 200
  res.json(scheduleForDay(day))
}
