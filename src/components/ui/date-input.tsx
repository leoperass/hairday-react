import Icon from "./icon";
import Text from "./text";
import Calendar from "./../../assets/icons/calendarBlank.svg?react"
import CaretDown from "./../../assets/icons/caretdown.svg?react";
import { cva, type VariantProps } from "class-variance-authority";
import { useRef } from "react";

export const dateInputContainerVariants = cva(
    `
        flex flex-col gap-1
    `
);

export const dateInputWrapperVariants = cva(
    `
        border border-solid border-gray-500
        bg-transparent focus-within:!border-yellow-dark
        flex items-center rounded-lg transition
    `,
    {
        variants: {
            size: {
                md: "h-10 w-[340px] p-6 pl-2",
                lg: "h-[56px] w-[190px] px-3",
            },
        },
        defaultVariants: {
            size: "md",
        }
    }
);

export const dateInputFieldVariants= cva(
    `
        flex-1 min-w-0 bg-transparent border-none outline-none
        text-gray-200
        appearance-none
        [&::-webkit-calendar-picker-indicator]:opacity-0
        scheme-dark
    `
);

interface DataInputProps 
    extends VariantProps<typeof dateInputWrapperVariants>,
        Omit<React.ComponentProps<"input">, 'size' | 'type'> {
            error?: React.ReactNode;
            defaultToday?: boolean;
        }

export default function DateInput({size,error,defaultToday,...props}: DataInputProps) {

    const inputRef = useRef<HTMLInputElement>(null);
    
    const today = new Date().toISOString().split("T")[0];

    return (
        <div className={dateInputContainerVariants()}>
            <div
                onClick={() => inputRef.current?.showPicker?.()}
                className={dateInputWrapperVariants({size})}
            >
                
                <Icon svg={Calendar} variant="secondary" className="mr-3" />

                <input
                    ref={inputRef}
                    type="date"
                    min={today}
                    defaultValue={defaultToday ? today : undefined}
                    className={dateInputFieldVariants()}
                    {...props}
                />
        
                <Icon svg={CaretDown} className="fill-gray-400"/>
                
            </div>
            {error && (
                <div>
                    <Text variant="body-sm-bold" className="!text-accent-red">
                        {error}
                    </Text>
                </div>
            )}
        </div>

    );
}