import { DateTime } from 'luxon'

export const humanizeDuration = (d: string) => Math.floor(DateTime.fromISO(d).diffNow('minutes').minutes)
