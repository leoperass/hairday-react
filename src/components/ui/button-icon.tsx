import Icon from "./icon";
import TrashIcon from "../assets/icons/trash.svg?react";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonIconVariants = cva(
    `
        inline-flex items-center justify-center
        bg-transparent fill-yellow focus:fill-yellow-dark cursor-pointer transition group 
        hover:fill-yellow-dark
    `, {
    variants: {
        size: {
            md: "w-4 h-4"
        }
    },
    defaultVariants: {
        size: "md"
    }
}
)

interface ButtonIconProps extends React.ComponentProps<"button">,
    VariantProps<typeof buttonIconVariants> {
    icon: React.ComponentProps<typeof Icon>["svg"]
}

export default function ButtonIcon({ icon: IconSvg, size, ...props }: ButtonIconProps) {
    return (
        <button {...props}>
            <Icon svg={IconSvg} className={buttonIconVariants({ size })} />
        </button>
    )
}