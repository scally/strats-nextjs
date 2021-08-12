export const getConfig = () => {
  const candidates = (process.env.CANDIDATES || '').split(',')
  const random_seed = Number(process.env.RANDOM_SEED || '543210')

  return {
    candidates,
    random_seed
  }
}