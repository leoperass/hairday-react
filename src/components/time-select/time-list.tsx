import Text from "../ui/text";
import { times } from "../../data/time";
import TimeSelect from "./time-select";
import { useState } from "react";

interface TimeListProps {
    disabled?: boolean;
}

export default function TimeList({disabled}: TimeListProps) {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [isDisabled, setIsDisabled] = useState(false);

    return (
        <div className="space-y-3">
            <div>
                <Text variant="body-md-bold">Horários</Text>
            </div>
            <div>
                <Text variant="body-md">Manhã</Text>
            </div>
            <div className="flex flex-wrap gap-2">
                {times.morning.map(time => (
                    <TimeSelect 
                        key={time.id}
                        time={time}
                        selected={selectedId === time.id}
                        onClick={() => 
                            setSelectedId(prev => 
                            prev === time.id ? null : time.id
                        )}
                    />
                ))}
            </div>
            <div>
                <Text variant="body-md">Tarde</Text>
            </div>
            <div className="flex flex-wrap gap-2">
                {times.afternoon.map(time => (
                    <TimeSelect 
                        key={time.id}
                        time={time}
                        selected={selectedId === time.id}
                        disabled={disabled}
                        onClick={() => {
                            if (isDisabled) return;

                            setSelectedId(prev => 
                            prev === time.id ? null : time.id
                        )}}
                        
                    />
                ))}
            </div>
            <div>
                <Text variant="body-md">Noite</Text>
            </div>
            <div className="flex flex-wrap gap-2">
                {times.night.map(time => (
                    <TimeSelect 
                        key={time.id}
                        time={time}
                        selected={selectedId === time.id}
                        onClick={() => 
                            setSelectedId(prev => 
                            prev === time.id ? null : time.id
                        )}
                    />
                ))}
            </div>
        </div>
    )
}