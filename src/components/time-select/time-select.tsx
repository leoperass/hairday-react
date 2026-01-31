import { cva, type VariantProps } from "class-variance-authority";
import Text from "../ui/text";
import { useState } from "react";
import type { Time } from "../../data/time";

export const timeSelectVariants = cva(
    `
       flex justify-center items-center
       rounded-lg text-gray-200 bg-gray-600 hover:bg-gray-500
       border border-solid border-gray-500
    `, {
    variants: {
        size: {
            md: "w-[78.5px] h-10"
        },
        selected: {
            true: "border-yellow text-yellow",
            false: "border-gray-500 text-gray-200"
        },
        disabled: {
            true: "opacity-50 pointer-events-none",
            false: "cursor-pointer"
        }
    },
    defaultVariants: {
        size: "md",
        selected: false,
        disabled: false,
    }
}
)

interface TimeSelectProps extends Omit<React.ComponentProps<"button">, 'disabled' | 'size'>, VariantProps<typeof timeSelectVariants> {
    time: Time;
}

export default function TimeSelect({ time, size, selected, disabled, ...props }: TimeSelectProps) {

    const [isSelected, setIsSelected] = useState(selected ?? false);

    return (
        <button
            disabled={!!disabled}
            onClick={() => setIsSelected(prev => !prev)}
            className={timeSelectVariants({ size, selected: isSelected, disabled })} {...props}
        >
            {time.label}
        </button>
    )
}