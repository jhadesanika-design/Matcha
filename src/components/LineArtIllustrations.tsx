import React from 'react';

interface IllustrationProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
}

/**
 * Continuous line art of person holding and sipping/eating, matching Screenshot 1
 */
export const HeroFigureIllustration: React.FC<IllustrationProps> = ({
  className = "w-[340px] h-[340px] md:w-[420px] md:h-[420px]",
  color = "#2D3D0C",
  strokeWidth = 3,
}) => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Hand-drawn line illustration of a person drinking matcha"
    >
      {/* Head, Hair & Profile in continuous flow */}
      <path
        d="M 185 110 
           C 175 100, 160 95, 145 105 
           C 135 112, 130 125, 133 140 
           C 134 148, 140 155, 146 158
           C 142 165, 145 178, 154 182
           C 152 190, 158 200, 172 205
           C 185 210, 195 205, 202 195"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Hair curls on top */}
      <path
        d="M 150 102 
           C 155 88, 175 82, 190 90
           C 200 95, 210 88, 220 92
           C 228 96, 230 108, 225 116
           C 220 124, 226 135, 220 145
           C 216 150, 210 152, 208 158"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Nose, serene closed eye, and lips */}
      <path
        d="M 215 142 
           C 225 148, 230 154, 226 162
           L 218 165
           C 222 170, 224 176, 218 180"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Gentle closed eye curve */}
      <path
        d="M 185 145 C 192 152, 202 150, 206 144"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Eyebrow */}
      <path
        d="M 182 135 C 190 132, 202 133, 206 137"
        stroke={color}
        strokeWidth={strokeWidth * 0.9}
        strokeLinecap="round"
      />
      {/* Chin and neck line flowing to collar */}
      <path
        d="M 198 195 C 185 208, 178 220, 170 235 L 160 250"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* T-shirt neckline */}
      <path
        d="M 148 245 C 165 260, 185 262, 205 248"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Left arm and shoulder arched holding the round treat/chawan */}
      <path
        d="M 152 248 
           C 120 270, 100 310, 110 350
           C 118 385, 150 400, 190 395
           C 215 390, 235 365, 240 330
           C 242 315, 238 290, 225 275"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Circular treat / round chawan bowl with concentric lines like screenshot 1 */}
      <path
        d="M 230 205 
           C 255 190, 290 200, 305 225
           C 318 248, 310 280, 285 295
           C 260 310, 225 300, 210 275
           C 198 255, 205 220, 230 205 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner circular contour */}
      <path
        d="M 240 220 
           C 258 208, 282 215, 292 235
           C 300 250, 295 272, 278 282
           C 260 292, 238 285, 228 268
           C 220 252, 225 230, 240 220 Z"
        stroke={color}
        strokeWidth={strokeWidth * 0.85}
        strokeLinecap="round"
      />
      {/* Center inner detail */}
      <circle cx="260" cy="252" r="14" stroke={color} strokeWidth={strokeWidth * 0.8} />
      <circle cx="260" cy="252" r="4" fill={color} />
      {/* Right arm & hand holding the treat */}
      <path
        d="M 226 172 
           C 245 168, 265 175, 275 188
           C 278 193, 275 200, 268 204
           C 260 208, 255 218, 260 225"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Second hand fingers supporting side */}
      <path
        d="M 298 205 C 305 210, 310 220, 306 226"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M 308 218 C 314 225, 315 235, 308 240"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Right lower arm sweeping back */}
      <path
        d="M 312 250 
           C 340 280, 345 325, 335 355
           C 328 375, 305 385, 275 375"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Gentle fold on shirt */}
      <path
        d="M 180 290 C 172 315, 165 340, 168 360"
        stroke={color}
        strokeWidth={strokeWidth * 0.75}
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * Continuous line art of person sipping from a warm chawan bowl, matching Screenshot 2
 */
export const ChawanSippingIllustration: React.FC<IllustrationProps> = ({
  className = "w-[240px] h-[240px] md:w-[280px] md:h-[280px]",
  color = "#4F6815",
  strokeWidth = 3,
}) => {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Hand-drawn line illustration of person holding and sipping matcha chawan"
    >
      {/* Curly relaxed hair */}
      <path
        d="M 140 70 
           C 145 55, 165 50, 178 58 
           C 188 48, 208 48, 218 60 
           C 228 54, 245 62, 245 78
           C 245 88, 238 98, 242 108
           C 246 118, 238 130, 230 134"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Face profile & serene closed eyes */}
      <path
        d="M 148 85 C 138 98, 142 115, 152 122"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M 172 105 C 178 112, 188 112, 194 105"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M 170 98 C 176 94, 186 94, 192 98"
        stroke={color}
        strokeWidth={strokeWidth * 0.85}
        strokeLinecap="round"
      />
      {/* Nose pointing down toward bowl */}
      <path
        d="M 200 108 L 208 122 L 198 126"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Gentle lips sipping */}
      <path
        d="M 194 135 C 198 138, 204 138, 206 135"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Ceramic Chawan Bowl */}
      <path
        d="M 175 142 
           C 170 148, 168 165, 174 185 
           C 180 205, 205 210, 230 205 
           C 255 200, 262 180, 258 160 
           C 255 146, 250 142, 245 142 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Top rim of chawan bowl */}
      <path
        d="M 175 142 C 195 152, 225 152, 245 142"
        stroke={color}
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
      />
      {/* Gentle steam rising */}
      <path
        d="M 188 132 C 185 125, 190 120, 186 114"
        stroke={color}
        strokeWidth={strokeWidth * 0.7}
        strokeLinecap="round"
      />
      <path
        d="M 230 132 C 234 124, 228 118, 232 112"
        stroke={color}
        strokeWidth={strokeWidth * 0.7}
        strokeLinecap="round"
      />
      {/* Left hand cupping the bowl */}
      <path
        d="M 158 170 
           C 152 175, 155 186, 165 188
           M 156 182 C 150 188, 154 198, 166 200
           M 158 196 C 154 204, 160 214, 172 215"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Right hand fingers supporting the other side */}
      <path
        d="M 245 170 
           C 254 175, 254 185, 246 190
           M 245 184 C 252 190, 250 200, 240 203
           M 238 198 C 244 205, 238 214, 228 215"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Forearms and shoulders framing the moment */}
      <path
        d="M 140 185 C 120 205, 122 235, 150 250"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M 255 180 C 280 200, 290 230, 280 260"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * Continuous line art of Chasen bamboo whisk and ceremonial tea leaves
 */
export const ChasenWhiskIllustration: React.FC<IllustrationProps> = ({
  className = "w-[240px] h-[240px]",
  color = "#4F6815",
  strokeWidth = 2.5,
}) => {
  return (
    <svg
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Hand-drawn bamboo chasen whisk line art"
    >
      {/* Whisk handle */}
      <path
        d="M 120 40 L 140 40 L 142 85 L 118 85 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="118" y1="55" x2="142" y2="55" stroke={color} strokeWidth={strokeWidth * 0.8} />
      <line x1="117" y1="70" x2="143" y2="70" stroke={color} strokeWidth={strokeWidth * 0.8} />

      {/* Whisk string binding */}
      <path
        d="M 112 92 C 122 96, 138 96, 148 92"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Whisk bamboo tines splaying out */}
      <path
        d="M 118 85 C 105 110, 85 130, 80 160 C 76 185, 90 195, 105 190 C 115 185, 118 165, 120 145"
        stroke={color}
        strokeWidth={strokeWidth * 0.9}
        strokeLinecap="round"
      />
      <path
        d="M 142 85 C 155 110, 175 130, 180 160 C 184 185, 170 195, 155 190 C 145 185, 142 165, 140 145"
        stroke={color}
        strokeWidth={strokeWidth * 0.9}
        strokeLinecap="round"
      />
      {/* Inner tines curled inwards */}
      <path
        d="M 124 95 C 120 120, 115 140, 125 160 C 130 168, 135 165, 132 155"
        stroke={color}
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
      />
      <path
        d="M 136 95 C 140 120, 145 140, 135 160"
        stroke={color}
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
      />
      <circle cx="130" cy="180" r="8" stroke={color} strokeWidth={strokeWidth * 0.7} strokeDasharray="3 3" />

      {/* Decorative Camellia Sinensis tea leaves at bottom */}
      <path
        d="M 60 210 C 75 195, 95 200, 105 215 C 90 225, 70 220, 60 210 Z"
        stroke={color}
        strokeWidth={strokeWidth * 0.85}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="65" y1="210" x2="100" y2="215" stroke={color} strokeWidth={strokeWidth * 0.6} />

      <path
        d="M 160 215 C 175 200, 195 205, 200 220 C 185 230, 168 226, 160 215 Z"
        stroke={color}
        strokeWidth={strokeWidth * 0.85}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="164" y1="216" x2="196" y2="218" stroke={color} strokeWidth={strokeWidth * 0.6} />
    </svg>
  );
};
