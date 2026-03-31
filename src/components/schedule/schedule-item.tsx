import Text from "../ui/text";
import ButtonIcon from "../ui/button-icon";
import TrashIcon from "../../assets/icons/trash.svg?react";

interface ScheduleItemProps {
    time: string
    client: string,
    onRemove: () => void
}

export default function ScheduleItem({
    time,
    client,
    onRemove,
}: ScheduleItemProps) {
    return (
        <li className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Text variant="body-md-bold">
                    {time}
                </Text>

                <Text variant="body-md">
                    {client}
                </Text>
            </div>

            <ButtonIcon icon={TrashIcon} onClick={onRemove}/>
        </li>
    )
}