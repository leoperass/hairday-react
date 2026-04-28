import { times } from "../data/time"

export function getTimeLabel(timeId: number) {

        const allTimes = [
            ...times.morning,
            ...times.afternoon,
            ...times.night
        ]

        const time = allTimes.find(t => t.id === timeId)

        return time?.label
    }