export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}) {
  const sizeClass = size === "sm" ? "button--sm" : size === "lg" ? "button--lg" : "";
  const widthClass = fullWidth ? "button--full" : "";
  const classes = ["button", `button--${variant}`, sizeClass, widthClass, className].filter(Boolean).join(" ");

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
