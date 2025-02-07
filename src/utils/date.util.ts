import dayjs from 'dayjs'

export function getMonth(date: string): string {
  return dayjs(date).format('MMM')
}
