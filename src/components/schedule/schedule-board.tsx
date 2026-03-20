import Text from "../ui/text"
import ScheduleSection from "./schedule-section"
import SunHorizonIcon from "./../../assets/icons/sunhorizon.svg?react"
import CloudSunIcon from "./../../assets/icons/cloudsun.svg?react"
import MoonStarsIcon from "./../../assets/icons/moonstars.svg?react"
import DateInput from "../ui/date-input"

export default function ScheduleBoard({}) {
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
                        defaultToday
                    />

                </header>
            

                <div className="space-y-3">
                    <ScheduleSection
                        title="Manhã"
                        period="9h-12h"
                        icon={SunHorizonIcon}
                    />
                    <ScheduleSection
                        title="Tarde"
                        period="13h-18h"
                        icon={CloudSunIcon}
                    />
                    <ScheduleSection
                        title="Noite"
                        period="19h-21h"
                        icon={MoonStarsIcon}
                    />
                </div>
            </div>
        </div>
    )
}