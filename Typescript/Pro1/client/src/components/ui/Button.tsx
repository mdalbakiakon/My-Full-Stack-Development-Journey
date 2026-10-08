// button types
type ButtonVariant = "default" | "counting";

// size of the button
type ButtonSize = "sm" | "md" | "cr";

// button shape
type ButtonShape = "rectangle" | "circle";

// buttonprops
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  className?: string;
};

// style for button variant
const VARIANT_CLASS: Record<ButtonVariant, string> = {
  default: "bg-(--btn-col) rounded-2xl font-semibold",
  counting: "bg-(--btn-ctn-col)",
};

// style for button size
const SIZE_CLASS: Record<ButtonSize, string> = {
  sm: "",
  md: "px-3 py-1.75 md:px-4 md:py-2.5",
  cr: ""
};

// shape for button shape
const SHAPE_CLASS: Record<ButtonShape, string> = {
  rectangle: "",
  circle: "rounded-full",
};




export function Button({
  variant = "default",
  size = "md",
  shape = "rectangle",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${VARIANT_CLASS[variant]} ${SIZE_CLASS[size]} ${SHAPE_CLASS[shape]} ${className} cursor-pointer flex justify-center items-center`}
      {...props}
    >
      {children}
    </button>
  );
}
