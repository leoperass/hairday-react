import { useState, type FormEvent } from "react";
import TimeList from "../time/time-list";
import Button from "../ui/button";
import DateInput from "../ui/date-input";
import InputText from "../ui/input-text";
import Text from "../ui/text";
import type { Schedule } from "../../types/schedule";


interface ScheduleCardsProps {
    onAddSchedule: (schedule: Schedule) => void;
    occupiedTimes: number[];
    selectedDate: string;
    onChangeDate: (data: string) => void
}

export default function ScheduleCard({
    onAddSchedule,
    occupiedTimes,
    selectedDate,
    onChangeDate,
}: ScheduleCardsProps) {
    const [selectedTime, setSelectedTime] = useState<number | null>(null);
    const [clientName, setClientName] = useState(""); 

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!selectedDate || selectedTime === null || !clientName.trim()) {
            return
        }

        onAddSchedule({
            date: selectedDate,
            timeId: selectedTime,
            client: clientName
        });

        setSelectedTime(null);
        setClientName("");
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full max-w-[498px] bg-gray-700 p-20 rounded-xl"
        >
            <Text variant="body-lg">
                Agende um atendimento
            </Text>

            <Text variant="body-sm">
                Seleciona data, horário e informe o nome do cliente 
                para criar o agendamento
            </Text>

            {/* Data */}
            <div className="flex flex-col gap-2">
                <Text variant="body-md-bold">Data</Text>
                <DateInput 
                    onChange={(e) => onChangeDate(e.target.value)}
                    value={selectedDate}         
                />
            </div>

            {/* Horários */}
            <TimeList 
                disabled={!selectedDate}
                selectedTime={selectedTime}
                onSelectTime={setSelectedTime}
                occupiedTimes={occupiedTimes}
            />

            <div className="flex flex-col gap-2">
                <Text variant="body-md-bold">
                    Cliente
                </Text>
                <InputText
                    placeholder="Digite seu nome"
                    value={clientName}
                    onChange={(e) => {
                        setClientName(e.target.value)
                    }}
                />
            </div>

            <Button
                type="submit"
                disabled={selectedTime === null || !clientName.trim()}
            >
                AGENDAR
            </Button>
            
        </form>
    )
}