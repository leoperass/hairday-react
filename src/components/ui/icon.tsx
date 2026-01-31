import { cva, type VariantProps } from "class-variance-authority";

const IconVariants = cva("inline-block shrink-0", {
    variants: {
        variant: {
            primary: "fill-gray-100",
            secondary: "fill-yellow",
        },
        size: {
            sm: "h-5 w-5"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "sm",
    }
})

interface IconProps extends 
    React.ComponentProps<"svg">,
    VariantProps<typeof IconVariants>{
    svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({svg: Svg,variant,size,className, ...props}: IconProps) {
    return (
        <Svg className={IconVariants({variant,size,className})} {...props}/>
    )
}