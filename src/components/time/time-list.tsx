import Text from "../ui/text";
import { times } from "../../data/time";
import TimeSelect from "./time-select";


interface TimeListProps {
    disabled?: boolean;
    selectedTime: number | null;
    onSelectTime: (id: number | null) => void;
}

export default function TimeList({
    disabled,
    selectedTime,
    onSelectTime
}: TimeListProps) {

    const periods = [
        { label: "Manhã", list: times.morning },
        { label: "Tarde", list: times.afternoon },
        { label: "Noite", list: times.night },
    ]

    return (
        <div className="flex flex-col gap-3">
            <Text variant="body-md-bold">Horários</Text>

            {periods.map((period) => (
                <div key={period.label} className="flex flex-col gap-3">
                    <Text variant="body-md">{period.label}</Text>

                    <div className="grid grid-cols-4 gap-2">
                        {period.list.map((time) => (
                            <TimeSelect
                                key={time.id}
                                time={time}
                                disabled={disabled}
                                selected={selectedTime === time.id}
                                onClick={() => {
                                    onSelectTime(
                                        selectedTime === time.id ? null : time.id  
                                    )
                                }}
                            />
                        ))}
                    </div>
                </div>
            ))}
            
        </div>
    )
}