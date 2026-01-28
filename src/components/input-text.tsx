import Icon from "./icon";
import Text from "./text";
import UserSquare from "../assets/icons/usersquare.svg?react";
import { cva, type VariantProps } from "class-variance-authority";

export const inputTextContainerVariants = cva("flex flex-col gap-1");

export const inputTextWrapperVariants = cva(
    `
        border border-solid border-gray-500
        bg-transparent focus-within:!border-yellow-dark
        flex items-center gap-3 rounded transition
    `, {
        variants: {
            size: {
                md: "h-10 w-[340px] p-3"
            },
            disabled: {
                true: "pointer-events-none"
            }
        },
        defaultVariants: {
            size: "md",
            disabled: false,
        }
    }
)

export const inputTextInputVariants = cva(
    `
        flex-1 bg-transparent border-none outline-none
        placeholder-gray-400 text-gray-200
    `
)

interface InputTextProps 
    extends VariantProps<typeof inputTextWrapperVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
        icon?: React.ComponentProps<typeof Icon>["svg"],
        error?: React.ReactNode;
    }

export default function InputText({size, disabled, icon, error, className,...props}: InputTextProps) {
    return (
        <div className={inputTextContainerVariants({className})}>
            <div className={inputTextWrapperVariants({size,disabled})}>
                <Icon svg={UserSquare} variant="secondary" />
                <input
                    className={inputTextInputVariants()}
                    disabled={disabled as boolean}
                    {...props}
                />
            </div>
            { error && (
                <Text variant="body-sm" className="!text-accent-red">
                    {error}
                </Text>
            )}
        </div>
    );
}

