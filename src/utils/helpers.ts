import { dayNames, monthNames } from "./consts"

export function formatDate(date: any) {

    function getSuffix(date: Number) {
        if (date === 1 || date === 21 || date === 31) {
            return "st"
        } else if (date === 2 || date === 22) {
            return "nd"
        } else if (date === 3 || date === 23) {
            return "rd"
        } else {
            return "th"
        }
    }

    const readableDate = `${dayNames[date.getDay()]}, ${date.getDate() + getSuffix(date.getDate())} ${monthNames[date.getMonth()]} ${date.getFullYear()}`

    return readableDate
}