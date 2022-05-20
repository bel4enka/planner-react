export const formatDate = (date: string) =>  {
  const d = new Date(date)
  return `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`
}
export const formatHours = (date: string) => {
  const d = new Date(date)
  return `${d.getHours()}: ${d.getMinutes()}`
}
export const formatDateCurrent = (arg:Date) => {
  const d = new Date(arg)
  return `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`
}
