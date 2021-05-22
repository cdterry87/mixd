import { formatDistance } from 'date-fns'

export const getDateFromToday = date => {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true
  })
}
