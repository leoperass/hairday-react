import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-sans", {
    variants: {
        variant: {
            "body-sm": "text-sm leading-5 font-normal text-gray-300",
            "body-sm-bold": "text-sm leading-5 font-bold text-gray-300",
            "body-md": "text-base leading-6 font-normal text-gray-200",
            "body-md-bold": "text-base leading-6 font-bold text-gray-200",
            "body-lg": "text-3xl leading-6 font-bold text-gray-100"
        },
        defaultVariants: {
            variant: "body-md"
        }
    }
});

interface TextProps  extends VariantProps<typeof textVariants>{
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
}


export default function Text({as = "span",variant, className, children, ...props}: TextProps) {
    return React.createElement (
        as,
        {
            className: textVariants({variant, className}),
            ...props
        },
        children
    )
};