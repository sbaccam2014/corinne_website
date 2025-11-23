import tokens from '../design/tokens';
import DecorativeCircles from "./DecorativeCircles";

const SectionHeader = ({
  overline,
  heading,
  subheading,
  centered = false,
  showDecoration = false,
  decorationVariant = "triple",
  headingColor,
  className = ""
}) => {
  const alignment = centered ? "text-center" : "";
  const decorationAlignment = centered ? "justify-center" : "";
  const color = headingColor || tokens.colors.brand.purple;

  return (
    <div className={`${alignment} ${className}`}>
      {showDecoration && (
        <div className={`flex ${decorationAlignment} mb-6`}>
          <DecorativeCircles variant={decorationVariant} />
        </div>
      )}

      {overline && (
        <div className="text-xs tracking-[0.2em] font-semibold mb-3" style={{color: tokens.colors.brand.sage}}>
          {overline}
        </div>
      )}

      <h2 className="font-nunito text-3xl md:text-4xl lg:text-5xl font-normal leading-tight" style={{color}}>
        {heading}
      </h2>

      {subheading && (
        <p className="mt-3 text-sm text-slate-600">
          {subheading}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
