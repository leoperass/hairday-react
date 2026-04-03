import Text from "../ui/text"
import ScheduleSection from "./schedule-section"
import SunHorizonIcon from "./../../assets/icons/sunhorizon.svg?react"
import CloudSunIcon from "./../../assets/icons/cloudsun.svg?react"
import MoonStarsIcon from "./../../assets/icons/moonstars.svg?react"
import DateInput from "../ui/date-input"
import type { Schedule } from "../../types/schedule"
import { times } from "../../data/time";
import ScheduleItem from "./schedule-item"

interface ScheduleBoardProps {
    schedules: Schedule[]
    onRemoveSchedule: (timeId: number, data: string) => void
    selectedDate: string
    onChangeDate: (date:string) => void
}

export default function ScheduleBoard({
    schedules,
    onRemoveSchedule,
    selectedDate,
    onChangeDate, 
}: ScheduleBoardProps) {

    function getTimeLabel(timeId: number) {

        const allTimes = [
            ...times.morning,
            ...times.afternoon,
            ...times.night
        ]

        const time = allTimes.find(t => t.id === timeId)

        return time?.label
    }

    function getPeriod(timeId: number) {
        if (times.morning.some(t => t.id === timeId)) return "morning"
        if (times.afternoon.some(t => t.id === timeId)) return "afternoon"
        if (times.night.some(t => t.id === timeId)) return "night"
    }


    return (
        <div className="w-full py-20">

            <div className="mx-auto flex flex-col gap-8 max-w-[1092px]">

                <header className="flex justify-between gap-6">

                    <div className="flex flex-col gap-1">
                        <Text variant="body-lg">
                            Sua agenda
                        </Text>
                        
                        <Text variant="body-sm">
                            Consulte os seus cortes de cabelo agendados por dia
                        </Text>
                    </div>
                    
                    <DateInput
                        size="lg"
                        value={selectedDate}
                        onChange={(e) => onChangeDate(e.target.value)}
                    />

                </header>
            
                <div className="space-y-3">

                    <ScheduleSection
                        title="Manhã"
                        period="9h-12h"
                        icon={SunHorizonIcon}
                    >
                        {schedules
                            .filter(schedule => schedule.date === selectedDate)
                            .filter(schedule => getPeriod(schedule.timeId) === "morning")
                            .map(schedule => (
                                <ScheduleItem 
                                    key={`${schedule.date}-${schedule.timeId}`}
                                    time={getTimeLabel(schedule.timeId) || ""}
                                    client={schedule.client}
                                    onRemove={() => onRemoveSchedule(schedule.timeId, schedule.date)}
                                />
                            ))
                        }
                    </ScheduleSection>

                    <ScheduleSection
                        title="Tarde"
                        period="13h-18h"
                        icon={CloudSunIcon}
                    >
                        {schedules
                            .filter(schedule => schedule.date === selectedDate)
                            .filter(schedule => getPeriod(schedule.timeId) === "afternoon")
                            .map(schedule => (
                                <ScheduleItem 
                                    key={`${schedule.date}-${schedule.timeId}`}
                                    time={getTimeLabel(schedule.timeId) || ""}
                                    client={schedule.client}
                                    onRemove={() => onRemoveSchedule(schedule.timeId, schedule.date)}
                                />
                            ))
                        }
                    </ScheduleSection>

                    <ScheduleSection
                        title="Noite"
                        period="19h-21h"
                        icon={MoonStarsIcon}
                    >
                        {schedules
                            .filter(schedule => schedule.date === selectedDate)                        
                            .filter(schedule => getPeriod(schedule.timeId) === "night")
                            .map(schedule => (
                                <ScheduleItem 
                                    key={`${schedule.date}-${schedule.timeId}`}
                                    time={getTimeLabel(schedule.timeId) || ""}
                                    client={schedule.client}
                                    onRemove={() => onRemoveSchedule(schedule.timeId, schedule.date)}
                                />
                            ))
                        }
                    </ScheduleSection>
                </div>
            </div>
        </div>
    )
}