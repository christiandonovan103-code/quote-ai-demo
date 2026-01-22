export default function Container({ size = "lg", className = "", children, ...props }) {
  const sizeClass = {
    sm: "container--sm",
    md: "container--md",
    lg: "container--lg",
    xl: "container--xl",
  }[size];

  const classes = ["container", sizeClass, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
