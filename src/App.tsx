import ScheduleBoard from "./components/schedule/schedule-board";
import { useState } from "react";
import ScheduleCard from "./components/schedule/schedule-card";
import logoHairDay from "./assets/img/logo.png";
import Icon from "./components/ui/icon";
import { toast, Toaster } from "sonner";
import { getTimeLabel } from "./utils/getTimeLabel";

type Schedule = {
  date: string
  timeId: number
  client: string
}

export default function App() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const occupiedTimes = schedules
  .filter(s => s.date === selectedDate)
  .map(s => s.timeId)

  function handleAddSchedule(schedule: Schedule) {
    setSchedules(prev => [...prev, schedule])
  }

  console.log(schedules);

  function handleDeleteSchedule(timeId: number, date: string) {
    setSchedules(prev =>
      prev.filter(s => !(s.timeId === timeId && s.date === date))
    );

    const timeLabel = getTimeLabel(timeId);

    toast("Agendamento removido 🗑️", {
      description: `Horário ${timeLabel} liberado`,
    });
  }

  return (
    <>
      <Toaster position="bottom-right"/>

      <div className="flex items-center py-6 justify-center min-h-screen bg-gray-800">

        <div className="flex flex-col lg:flex-row w-full max-w-[1400px] mx-3 gap-6 lg:gap-35">

            <div className="relative">
              <img
                src={logoHairDay}
                alt="logo"
                className="absolute -top-7 -left-5"/>

              <ScheduleCard
                onAddSchedule={handleAddSchedule}
                occupiedTimes={occupiedTimes}
                selectedDate={selectedDate}
                onChangeDate={setSelectedDate}
              />
            </div>

          <div className="flex-1 max-w-[760px]">
            <ScheduleBoard
              schedules={schedules}
              onRemoveSchedule={handleDeleteSchedule}
              selectedDate={selectedDate}
              onChangeDate={setSelectedDate}
            />
          </div>

        </div>
        
      </div>
    </>
  );
}

