import { schedule } from 'app/schedule'

export default (_, res) => {
  res.statusCode = 200
  res.json({schedule: schedule.main })
}
