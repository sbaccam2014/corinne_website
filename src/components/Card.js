import tokens from '../design/tokens';

const Card = ({
  children,
  variant = "white",
  padding = "medium",
  className = ""
}) => {
  const baseStyles = "rounded-xl";

  const variants = {
    white: "bg-white shadow-md ring-1 ring-black/5",
    subtle: "ring-1 ring-gray-100",
    elevated: "bg-white/95 shadow-xl ring-1 ring-black/10",
    tinted: "",
  };

  const paddings = {
    small: "p-4 md:p-5",
    medium: "p-6 md:p-8",
    large: "p-8 md:p-10",
  };

  const backgrounds = {
    white: {},
    subtle: { backgroundColor: tokens.colors.background.gray },
    elevated: {},
    tinted: { backgroundColor: tokens.colors.background.gray },
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`;

  return (
    <div className={combinedClassName} style={backgrounds[variant]}>
      {children}
    </div>
  );
};

export default Card;
