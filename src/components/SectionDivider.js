import tokens from '../design/tokens';

const SectionDivider = ({
  color = "white",
  direction = "down",
  variant = 1
}) => {
  const colors = {
    white: tokens.colors.background.white,
    lavender: tokens.colors.background.lavenderTint,
    sage: tokens.colors.background.sageTint,
    lavenderDark: tokens.colors.background.lavender,
  };

  const curves = {
    1: "M0,100 C360,140 720,60 1080,100 C1240,116 1340,116 1440,110 L1440,0 L0,0 Z",
    2: "M0,80 C480,120 960,40 1440,80 L1440,0 L0,0 Z",
    3: "M0,60 C360,100 720,20 1080,60 C1240,80 1340,80 1440,75 L1440,0 L0,0 Z",
  };

  const transform = direction === "up" ? "scale(1, -1)" : "";

  return (
    <svg
      className={`block w-full ${direction === "up" ? "-mb-1" : "-mt-1"}`}
      viewBox="0 0 1440 140"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ height: "60px" }}
    >
      <path
        d={curves[variant]}
        fill={colors[color]}
        transform={transform}
      />
    </svg>
  );
};

export default SectionDivider;
