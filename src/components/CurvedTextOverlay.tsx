import React from 'react';

interface CurvedTextOverlayProps {
  text?: string;
  className?: string;
  color?: string;
}

export const CurvedTextOverlay: React.FC<CurvedTextOverlayProps> = ({
  text = "WHERE MATCHA MEETS THE COAST WHERE MATCHA MEE",
  className = "w-full max-w-[620px] h-[130px]",
  color = "#F7EFDA",
}) => {
  return (
    <div className={`relative pointer-events-none select-none flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 700 160"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Smooth natural undulating curve across the figure matching screenshot 1 */}
          <path
            id="hero-curve-path"
            d="M 20,115 C 160,25 320,135 480,45 C 570,-5 660,60 700,95"
            fill="transparent"
          />
        </defs>
        <text
          fill={color}
          className="font-serif font-semibold tracking-[0.14em] uppercase"
          style={{
            fontSize: '22px',
            fontFamily: "'DM Serif Display', 'Playfair Display', Georgia, serif",
          }}
        >
          <textPath
            href="#hero-curve-path"
            startOffset="50%"
            textAnchor="middle"
          >
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};
