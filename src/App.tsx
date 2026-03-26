
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

  function handleAddSchedule(schedule: Schedule) {
    setSchedules(prev => [...prev, schedule])
  }

  console.log(schedules);

  return (
    <>
      <div className="grid gap-3 place-items-center items-center min-h-screen bg-gray-800">

        <ScheduleCard onAddSchedule={handleAddSchedule} />
        <ScheduleBoard schedules={schedules} />
        
      </div>
    </>
  );
}

