import React from "react";
import Icon from "../ui/icon";
import Text from "../ui/text";

interface ScheduleSectionProps {
    title: string;
    period: string;
    icon: React.FC<React.ComponentProps<"svg">>;
    children?: React.ReactNode;
}

export default function ScheduleSection({
    title,
    period,
    icon,
    children
}: ScheduleSectionProps) {

    const hasAppointments= React.Children.count(children) > 0;

    return (
        <section className="w-full border rounded-lg border-gray-600 p-4">

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <Icon svg={icon} variant="secondary"/>

                    <Text as="strong" variant="body-md">
                        {title}
                    </Text>
                </div>

                <Text as="span" variant="body-md">
                    {period}
                </Text>

            </div>

            <div className="-mx-4 my-3 border-b border-gray-600" />

            {hasAppointments ? (
                <ul className="space-y-3">
                    {children}
                </ul>
            ) : (
                <Text as="p" variant="body-sm">
                    Nenhum agendamento para este período 
                </Text>
            )}

        </section>
    )
}