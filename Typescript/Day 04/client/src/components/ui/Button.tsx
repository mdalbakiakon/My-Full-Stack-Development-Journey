type ButtonSize = "sm" | "md" | "cr";

type ButtonShape = "rect" | "circ";

type ButtonVariant = "default" | "cta";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: ButtonSize;
    shape?: ButtonShape;
    variant?: ButtonVariant;
    className?: string;
};

const SIZE_CLASS: Record<ButtonSize, string> = {
    sm: "",
    md: "px-3 py-1.75 md:px-4 md:py-2.5",
    cr: ""
};

const SHAPE_CLASS: Record<ButtonShape, string> = {
    rect: "rounded-2xl",
    circ: "h-full aspect-square rounded-full",
};

const VARIANT_CLASS: Record<ButtonVariant, string> = {
    default: "",
    cta: "bg-(--btn-cta-col)",
};




export function Button({
    size = "md",
    shape = "rect",
    variant = "default",
    className = "",
    children,
    ...props
}: ButtonProps) {
    return (
        <button className={`
            ${SIZE_CLASS[size]} 
            ${SHAPE_CLASS[shape]}
            ${VARIANT_CLASS[variant]}
            ${className}
            flex justify-center items-center cursor-pointer`} {...props}>

            {children}

        </button>
    );
}
