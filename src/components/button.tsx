import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";

export const buttonVariants = cva('flex items-center justify-center cursor-pointer transition rounded-lg group', {
    variants: {
        variant: {
            primary: "bg-yellow border border-transparent hover:border-yellow-light text-gray-900"
        },
        size: {
            md: "h-14 px-4"
        },
        disabled: {
            true: "opacity-30 pointer-events-none"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false,
    }
})

export const buttonTextVariants = cva("", {
    variants: {
        variant: {
            primary: "text-gray-900"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

interface ButtonProps extends 
    Omit<React.ComponentProps<"button">, "size" | "disabled">, 
    VariantProps<typeof buttonVariants>{}


export default function Button({
    variant,
    size,
    disabled,
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button 
            className={buttonVariants({variant,size,disabled,className})}
            {...props}
        >
            <Text variant="body-sm-bold" className={buttonTextVariants({variant})}>
                {children}
            </Text>
        </button>
    )
}