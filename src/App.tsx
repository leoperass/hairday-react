import ScheduleBoard from "./components/schedule/schedule-board";
import { useState } from "react";
import ScheduleCard from "./components/schedule/schedule-card";

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
    )
  }

  return (
    <>
      <div className="grid gap-3 place-items-center items-center min-h-screen bg-gray-800">

        <ScheduleCard
          onAddSchedule={handleAddSchedule}
          occupiedTimes={occupiedTimes}
          selectedDate={selectedDate}
          onChangeDate={setSelectedDate}
        />
        <ScheduleBoard
          schedules={schedules}
          onRemoveSchedule={handleDeleteSchedule}
          selectedDate={selectedDate}
          onChangeDate={setSelectedDate}
        />
        
      </div>
    </>
  );
}

