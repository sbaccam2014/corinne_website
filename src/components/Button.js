import tokens from '../design/tokens';

const Button = ({
  children,
  variant = "primary",
  href = "#contact",
  onClick,
  size = "medium",
  className = ""
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-semibold hover:opacity-90 transition";

  const variants = {
    primary: "text-white",
    secondary: "text-white",
  };

  const sizes = {
    small: "px-4 py-2 text-xs",
    medium: "px-5 py-2.5 text-sm",
    large: "px-6 py-3 text-sm",
  };

  const colors = {
    primary: { backgroundColor: tokens.colors.brand.sage },
    secondary: { backgroundColor: tokens.colors.brand.purple },
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <a
      href={href}
      onClick={onClick}
      className={combinedClassName}
      style={colors[variant]}
    >
      {children}
    </a>
  );
};

export default Button;
