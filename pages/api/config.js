import { getConfig } from 'app/config'

export default (_, res) => {
  const { candidates, randomSeed } = getConfig()

  res.statusCode = 200
  res.json({ candidates, randomSeed, })
}
