import Text from "./components/ui/text";
import Button from "./components/ui/button";
import Icon from "./components/ui/icon";
import CalendarBlankIcon from "./assets/icons/calendarBlank.svg?react";
import CaretDownIcon from "./assets/icons/caretdown.svg?react";
import CaretLeftIcon from "./assets/icons/caretleft.svg?react";
import CaretRightIcon from "./assets/icons/caretright.svg?react";
import CloudSunIcon from "./assets/icons/cloudsun.svg?react";
import MoonStarsIcon from "./assets/icons/moonstars.svg?react";
import SunHorizonIcon from "./assets/icons/sunhorizon.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";
import UserSquareIcon from "./assets/icons/usersquare.svg?react"
import InputText from "./components/ui/input-text";
import ButtonIcon from "./components/ui/button-icon";
import TimeSelect from "./components/time/time-select";
import TimeList from "./components/time/time-list";
import DateInput from "./components/ui/date-input";
import ScheduleSection from "./components/schedule/schedule-section";
import ScheduleCard from "./components/schedule/schedule-card";
import ScheduleBoard from "./components/schedule/schedule-board";


export default function App() {

  return (
    <>
      <div className="grid gap-3 place-items-center items-center min-h-screen bg-gray-800">
        {/* <div className="flex flex-wrap gap-1">
          <Text variant="body-lg" className="text-gray-100">Hair day</Text>
          <Text variant="body-md">Hair day</Text>
          <Text variant="body-md-bold">Hair day</Text>
          <Text variant="body-sm">Hair day</Text>
          <Text variant="body-sm-bold">Hair day</Text>
        </div>
        <div className="flex flex-wrap gap-1">
          <Button>AGENDAR</Button>
        </div>
        <div className="flex flex-wrap gap-1">
          <Icon svg={CalendarBlankIcon} />
          <Icon svg={CaretDownIcon} />
          <Icon svg={CaretLeftIcon} />
          <Icon svg={CaretRightIcon} />
          <Icon svg={CloudSunIcon} />
          <Icon svg={MoonStarsIcon} />
          <Icon svg={SunHorizonIcon} />
          <Icon svg={TrashIcon} />
          <Icon svg={UserSquareIcon} />
        </div>
        <div>
          <InputText placeholder="Nome do cliente" />
        </div>
        <div>
          <DateInput />
        </div>
        <div>
          <ButtonIcon icon={TrashIcon} />
        </div>
        <div>
          <TimeSelect time={{ id: 1, label: "9:00" }} />
        </div>
        <div>
          <TimeList/>
        </div> */}

        {/* <div>
          <ScheduleSection title="Manhã" period="9h-12h" icon={SunHorizonIcon}/>
        </div>  */}

        {/* <div>
          <ScheduleCard/>
        </div> */}

        <div>
          <ScheduleBoard/>
        </div>
        
      </div>
    </>
  );
}

