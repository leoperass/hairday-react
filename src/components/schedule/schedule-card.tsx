import { useState } from "react";
import TimeList from "../time/time-list";
import Button from "../ui/button";
import DateInput from "../ui/date-input";
import InputText from "../ui/input-text";
import Text from "../ui/text";


export default function ScheduleCard() {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<number | null>(null);
    const [clientName, setClientName] = useState(""); 

    return (
        <form className="flex flex-col gap-6 w-full max-w-[498px] bg-gray-700 p-20 rounded-xl">
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
                    onChange={(e) => setSelectedDate(e.target.value)} 
                    defaultToday={false}        
                />
            </div>

            {/* Horários */}
            <TimeList 
                disabled={!selectedDate}
                selectedTime={selectedTime}
                onSelectTime={setSelectedTime}
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
                disabled={selectedTime === null || !clientName.trim()}
            >
                AGENDAR
            </Button>
            
        </form>
    )
}