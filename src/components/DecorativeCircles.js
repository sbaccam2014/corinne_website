import tokens from '../design/tokens';

const DecorativeCircles = ({ variant = "triple" }) => {
  if (variant === "triple") {
    return (
      <div className="relative h-24 w-24 md:h-28 md:w-28">
        {/* Center flower with 5 petals */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Lavender petals */}
          <ellipse cx="50" cy="25" rx="12" ry="20" fill={tokens.colors.brand.purpleFaded} transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="25" rx="12" ry="20" fill={tokens.colors.brand.purplePale} transform="rotate(72 50 50)" />
          <ellipse cx="50" cy="25" rx="12" ry="20" fill={tokens.colors.brand.purpleFaded} transform="rotate(144 50 50)" />
          <ellipse cx="50" cy="25" rx="12" ry="20" fill={tokens.colors.brand.purpleTransparent} transform="rotate(216 50 50)" />
          <ellipse cx="50" cy="25" rx="12" ry="20" fill={tokens.colors.brand.purpleFaded} transform="rotate(288 50 50)" />

          {/* Sage green accent petals */}
          <ellipse cx="75" cy="75" rx="10" ry="16" fill={tokens.colors.brand.sageFaded} transform="rotate(45 75 75)" />
          <ellipse cx="25" cy="75" rx="8" ry="14" fill={tokens.colors.brand.sageAlt} transform="rotate(-45 25 75)" />

          {/* Center circle */}
          <circle cx="50" cy="50" r="8" fill={tokens.colors.brand.sageOverlay} />
        </svg>
      </div>
    );
  }

  if (variant === "dual") {
    return (
      <div className="relative h-20 w-20 md:h-24 md:w-24">
        {/* Simple flower with petals */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Lavender petals */}
          <ellipse cx="50" cy="20" rx="14" ry="22" fill={tokens.colors.brand.purpleFaded} transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="20" rx="14" ry="22" fill={tokens.colors.brand.purplePale} transform="rotate(90 50 50)" />
          <ellipse cx="50" cy="20" rx="14" ry="22" fill={tokens.colors.brand.purpleFaded} transform="rotate(180 50 50)" />
          <ellipse cx="50" cy="20" rx="14" ry="22" fill="rgba(147, 112, 219, 0.4)" transform="rotate(270 50 50)" />

          {/* Sage green accent petal */}
          <ellipse cx="75" cy="75" rx="10" ry="16" fill={tokens.colors.brand.sageFaded} transform="rotate(45 75 75)" />

          {/* Center circle */}
          <circle cx="50" cy="50" r="10" fill={tokens.colors.brand.sageOverlay} />
        </svg>
      </div>
    );
  }

  return null;
};

export default DecorativeCircles;
