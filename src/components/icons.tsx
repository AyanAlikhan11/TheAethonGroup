export function RocketIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 drop-shadow-lg">
      {/* Stars background */}
      <circle cx="12" cy="14" r="1.5" fill="#FBBF24" opacity="0.8" />
      <circle cx="68" cy="10" r="1" fill="#60A5FA" opacity="0.6" />
      <circle cx="72" cy="28" r="1.2" fill="#F472B6" opacity="0.5" />
      <circle cx="8" cy="38" r="1" fill="#34D399" opacity="0.6" />
      {/* Flame outer */}
      <ellipse cx="40" cy="68" rx="8" ry="10" fill="url(#flame1)" />
      {/* Flame inner */}
      <ellipse cx="40" cy="68" rx="4" ry="6" fill="url(#flame2)" />
      {/* Fins left */}
      <path d="M26 52C26 52 20 60 23 66L32 56L26 52Z" fill="#F97316" stroke="#EA580C" strokeWidth="1" />
      {/* Fins right */}
      <path d="M54 52C54 52 60 60 57 66L48 56L54 52Z" fill="#F97316" stroke="#EA580C" strokeWidth="1" />
      {/* Body */}
      <path d="M28 54C28 36 32 18 40 8C48 18 52 36 52 54C52 58 46 62 40 62C34 62 28 58 28 54Z" fill="url(#rocketBody)" stroke="#EA580C" strokeWidth="1.5" />
      {/* Red stripe */}
      <path d="M32 20C36 14 44 14 48 20" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Window outer */}
      <circle cx="40" cy="38" r="8" fill="#FEF3C7" stroke="#EA580C" strokeWidth="1.5" />
      {/* Window inner */}
      <circle cx="40" cy="38" r="5" fill="#38BDF8" />
      <circle cx="38" cy="36" r="2" fill="white" opacity="0.8" />
      {/* Sparkle */}
      <path d="M60 18L62 14L64 18L68 20L64 22L62 26L60 22L56 20Z" fill="#FBBF24" />
      <defs>
        <linearGradient id="rocketBody" x1="28" y1="8" x2="52" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" />
          <stop offset="0.5" stopColor="#FBBF24" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        <radialGradient id="flame1" cx="40" cy="68" r="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="0.4" stopColor="#F97316" />
          <stop offset="0.7" stopColor="#EF4444" />
          <stop offset="1" stopColor="#EF4444" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="flame2" cx="40" cy="68" r="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEF3C7" />
          <stop offset="0.5" stopColor="#FDE68A" />
          <stop offset="1" stopColor="#FBBF24" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 drop-shadow-lg">
      {/* Sound waves */}
      <path d="M62 28C66 32 66 48 62 52" stroke="#2DD4BF" strokeWidth="3" strokeLinecap="round" />
      <path d="M68 22C74 28 74 52 68 58" stroke="#5EEAD4" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <path d="M74 18C82 26 82 54 74 62" stroke="#99F6E4" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      {/* Music notes */}
      <circle cx="66" cy="16" r="2.5" fill="#F472B6" />
      <line x1="68.5" y1="16" x2="68.5" y2="8" stroke="#F472B6" strokeWidth="1.5" />
      <circle cx="72" cy="62" r="2" fill="#FBBF24" />
      <line x1="74" y1="62" x2="74" y2="55" stroke="#FBBF24" strokeWidth="1.5" />
      {/* Megaphone body */}
      <path d="M16 34L54 22V58L16 46V34Z" fill="url(#megaGrad)" stroke="#0F766E" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Handle */}
      <rect x="12" y="34" width="8" height="12" rx="3" fill="#14B8A6" stroke="#0F766E" strokeWidth="1.5" />
      {/* Bell end */}
      <ellipse cx="54" cy="40" rx="5" ry="18" fill="#5EEAD4" stroke="#0F766E" strokeWidth="1.5" />
      <ellipse cx="54" cy="40" rx="2.5" ry="12" fill="#99F6E4" opacity="0.5" />
      {/* Button */}
      <circle cx="22" cy="40" r="3" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
      <circle cx="21" cy="39" r="1" fill="white" opacity="0.5" />
      {/* Highlight */}
      <path d="M22 36L48 26" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <defs>
        <linearGradient id="megaGrad" x1="16" y1="22" x2="54" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2DD4BF" />
          <stop offset="0.5" stopColor="#14B8A6" />
          <stop offset="1" stopColor="#0D9488" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function FunnelIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 drop-shadow-lg">
      {/* Particles entering - colorful */}
      <circle cx="24" cy="10" r="3" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <circle cx="40" cy="6" r="2.5" fill="#60A5FA" stroke="#3B82F6" strokeWidth="0.8" />
      <circle cx="56" cy="10" r="3" fill="#A78BFA" stroke="#7C3AED" strokeWidth="0.8" />
      <circle cx="32" cy="4" r="1.8" fill="#34D399" stroke="#059669" strokeWidth="0.8" />
      <circle cx="48" cy="4" r="1.8" fill="#F472B6" stroke="#DB2777" strokeWidth="0.8" />
      <circle cx="18" cy="18" r="2" fill="#FB923C" stroke="#EA580C" strokeWidth="0.8" />
      <circle cx="62" cy="18" r="2" fill="#38BDF8" stroke="#0284C7" strokeWidth="0.8" />
      {/* Top rim */}
      <ellipse cx="40" cy="20" rx="28" ry="8" fill="#FECDD3" stroke="#E11D48" strokeWidth="1.5" />
      {/* Funnel body */}
      <path d="M12 20C12 20 30 44 30 48V62C30 66 35 70 40 70C45 70 50 66 50 62V48C50 44 68 20 68 20" fill="url(#funnelGrad)" stroke="#E11D48" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Inner shine */}
      <path d="M20 22C20 22 34 40 34 46V58C34 62 37 64 40 64" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      {/* Drops - colorful */}
      <ellipse cx="40" cy="74" rx="3" ry="4" fill="#FB7185" />
      <circle cx="34" cy="76" r="2" fill="#FBBF24" opacity="0.7" />
      <circle cx="46" cy="77" r="1.5" fill="#60A5FA" opacity="0.6" />
      <circle cx="37" cy="78" r="1" fill="#34D399" opacity="0.5" />
      <circle cx="43" cy="79" r="1.2" fill="#A78BFA" opacity="0.5" />
      <defs>
        <linearGradient id="funnelGrad" x1="12" y1="20" x2="50" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FECDD3" />
          <stop offset="0.5" stopColor="#FDA4AF" />
          <stop offset="1" stopColor="#FB7185" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function RobotIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 drop-shadow-lg">
      {/* Antenna */}
      <line x1="40" y1="6" x2="40" y2="14" stroke="#C4B5FD" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="40" cy="4" r="4" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
      <circle cx="40" cy="4" r="1.5" fill="#FEF3C7" />
      {/* Head */}
      <rect x="14" y="14" width="52" height="34" rx="8" fill="url(#robotGrad)" stroke="#7C3AED" strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx="28" cy="30" r="7" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
      <circle cx="52" cy="30" r="7" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
      <circle cx="28" cy="30" r="3.5" fill="#7C3AED" />
      <circle cx="52" cy="30" r="3.5" fill="#7C3AED" />
      <circle cx="26" cy="28" r="1.5" fill="white" />
      <circle cx="50" cy="28" r="1.5" fill="white" />
      {/* Mouth - happy smile */}
      <path d="M32 40C35 44 45 44 48 40" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Cheeks */}
      <ellipse cx="22" cy="38" rx="3" ry="2" fill="#F9A8D4" opacity="0.5" />
      <ellipse cx="58" cy="38" rx="3" ry="2" fill="#F9A8D4" opacity="0.5" />
      {/* Ears */}
      <rect x="6" y="24" width="8" height="14" rx="4" fill="#A78BFA" stroke="#7C3AED" strokeWidth="1.5" />
      <rect x="66" y="24" width="8" height="14" rx="4" fill="#A78BFA" stroke="#7C3AED" strokeWidth="1.5" />
      {/* Body */}
      <rect x="22" y="48" width="36" height="18" rx="6" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="1.5" />
      {/* Body screen */}
      <rect x="30" y="52" width="20" height="10" rx="3" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1" />
      <text x="40" y="60" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#7C3AED">AI</text>
      {/* Arms */}
      <rect x="12" y="50" width="10" height="6" rx="3" fill="#A78BFA" stroke="#7C3AED" strokeWidth="1" />
      <rect x="58" y="50" width="10" height="6" rx="3" fill="#A78BFA" stroke="#7C3AED" strokeWidth="1" />
      <defs>
        <linearGradient id="robotGrad" x1="14" y1="14" x2="66" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDD6FE" />
          <stop offset="0.5" stopColor="#C4B5FD" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function ChartBrainIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 drop-shadow-lg">
      {/* Brain outline */}
      <path d="M24 20C16 22 10 30 14 40C14 40 8 42 10 50C12 56 18 56 22 56C24 62 32 66 40 62C48 66 56 62 58 56C62 56 68 56 70 50C72 42 66 40 66 40C70 30 64 22 56 20C50 14 42 14 40 18C38 14 30 14 24 20Z" fill="url(#brainGrad)" stroke="#2563EB" strokeWidth="1.5" />
      {/* Brain wrinkles */}
      <path d="M40 20V60" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M28 28C34 30 46 30 52 28" stroke="#93C5FD" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M26 42C34 44 46 44 54 42" stroke="#93C5FD" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Chart bars inside - colorful */}
      <rect x="28" y="42" width="6" height="14" rx="2" fill="#F97316" opacity="0.9" />
      <rect x="37" y="34" width="6" height="22" rx="2" fill="#3B82F6" opacity="0.9" />
      <rect x="46" y="38" width="6" height="18" rx="2" fill="#10B981" opacity="0.9" />
      {/* Trend line */}
      <path d="M30 50L40 38L50 42" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Sparkles */}
      <path d="M62 14L64 10L66 14L70 16L66 18L64 22L62 18L58 16Z" fill="#FBBF24" />
      <path d="M14 12L15.5 9L17 12L20 13.5L17 15L15.5 18L14 15L11 13.5Z" fill="#F472B6" opacity="0.7" />
      <defs>
        <linearGradient id="brainGrad" x1="10" y1="14" x2="70" y2="66" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BFDBFE" />
          <stop offset="0.5" stopColor="#93C5FD" />
          <stop offset="1" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function GraphUpIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 drop-shadow-lg">
      {/* Bar chart - colorful */}
      <rect x="10" y="48" width="12" height="22" rx="3" fill="url(#bar1)" />
      <rect x="28" y="34" width="12" height="36" rx="3" fill="url(#bar2)" />
      <rect x="46" y="22" width="12" height="48" rx="3" fill="url(#bar3)" />
      <rect x="64" y="14" width="12" height="56" rx="3" fill="url(#bar4)" />
      {/* Bar highlights */}
      <rect x="12" y="50" width="3" height="18" rx="1.5" fill="white" opacity="0.3" />
      <rect x="30" y="36" width="3" height="32" rx="1.5" fill="white" opacity="0.3" />
      <rect x="48" y="24" width="3" height="44" rx="1.5" fill="white" opacity="0.3" />
      <rect x="66" y="16" width="3" height="52" rx="1.5" fill="white" opacity="0.3" />
      {/* Trend arrow */}
      <path d="M14 52L34 38L54 26L72 16" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M64 12L72 16L68 24" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Percentage badge */}
      <circle cx="16" cy="12" r="7" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
      <text x="16" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">%</text>
      {/* Sparkle */}
      <path d="M56 8L57.5 5L59 8L62 9.5L59 11L57.5 14L56 11L53 9.5Z" fill="#FBBF24" />
      <defs>
        <linearGradient id="bar1" x1="10" y1="48" x2="22" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FB923C" />
          <stop offset="1" stopColor="#F97316" />
        </linearGradient>
        <linearGradient id="bar2" x1="28" y1="34" x2="40" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#0EA5E9" />
        </linearGradient>
        <linearGradient id="bar3" x1="46" y1="22" x2="58" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="bar4" x1="64" y1="14" x2="76" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A78BFA" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function CrownShieldIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 drop-shadow-lg">
      {/* Shield */}
      <path d="M40 6L12 18V38C12 54 40 72 40 72C40 72 68 54 68 38V18L40 6Z" fill="url(#shieldGrad)" stroke="#4338CA" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Shield inner glow */}
      <path d="M40 12L18 22V38C18 50 40 64 40 64C40 64 62 50 62 38V22L40 12Z" fill="url(#shieldInner)" opacity="0.4" />
      {/* Crown */}
      <path d="M24 38L30 26L35 32L40 22L45 32L50 26L56 38" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="24" y="38" width="32" height="8" rx="2" fill="url(#crownGrad)" stroke="#D97706" strokeWidth="1" />
      {/* Gems */}
      <circle cx="32" cy="42" r="2.5" fill="#EF4444" stroke="#DC2626" strokeWidth="0.8" />
      <circle cx="40" cy="42" r="2.5" fill="#3B82F6" stroke="#2563EB" strokeWidth="0.8" />
      <circle cx="48" cy="42" r="2.5" fill="#10B981" stroke="#059669" strokeWidth="0.8" />
      {/* Crown tips */}
      <circle cx="30" cy="24" r="3" fill="#FDE68A" stroke="#D97706" strokeWidth="1" />
      <circle cx="40" cy="20" r="3" fill="#FDE68A" stroke="#D97706" strokeWidth="1" />
      <circle cx="50" cy="24" r="3" fill="#FDE68A" stroke="#D97706" strokeWidth="1" />
      {/* Sparkle */}
      <path d="M62 14L63.5 11L65 14L68 15.5L65 17L63.5 20L62 17L59 15.5Z" fill="#FBBF24" />
      <defs>
        <linearGradient id="shieldGrad" x1="12" y1="6" x2="68" y2="72" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5B4FC" />
          <stop offset="0.5" stopColor="#818CF8" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="shieldInner" x1="18" y1="12" x2="62" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#E0E7FF" />
        </linearGradient>
        <linearGradient id="crownGrad" x1="24" y1="38" x2="56" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" />
          <stop offset="1" stopColor="#FBBF24" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function PaintPaletteIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 drop-shadow-lg">
      {/* Palette body */}
      <path d="M40 6C20 6 6 20 6 36C6 52 18 66 34 66C36 66 38 64 38 60C38 56 40 54 44 54H52C62 54 72 44 72 36C72 20 60 6 40 6Z" fill="url(#paletteGrad)" stroke="#DB2777" strokeWidth="1.5" />
      {/* Color dots - vivid */}
      <circle cx="22" cy="26" r="6" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
      <circle cx="22" cy="26" r="2.5" fill="#FCA5A5" opacity="0.5" />
      <circle cx="40" cy="16" r="6" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
      <circle cx="40" cy="16" r="2.5" fill="#FDE68A" opacity="0.5" />
      <circle cx="58" cy="26" r="6" fill="#10B981" stroke="#059669" strokeWidth="1" />
      <circle cx="58" cy="26" r="2.5" fill="#A7F3D0" opacity="0.5" />
      <circle cx="20" cy="46" r="6" fill="#3B82F6" stroke="#2563EB" strokeWidth="1" />
      <circle cx="20" cy="46" r="2.5" fill="#BFDBFE" opacity="0.5" />
      <circle cx="34" cy="54" r="4.5" fill="#A855F7" stroke="#7C3AED" strokeWidth="1" />
      <circle cx="34" cy="54" r="2" fill="#D8B4FE" opacity="0.5" />
      {/* Brush */}
      <rect x="52" y="44" width="16" height="7" rx="3.5" fill="#F472B6" stroke="#DB2777" strokeWidth="1" transform="rotate(-35 52 44)" />
      <rect x="62" y="40" width="14" height="4" rx="2" fill="#92400E" transform="rotate(-35 62 40)" />
      {/* Paint splatter */}
      <circle cx="66" cy="56" r="3" fill="#FBBF24" opacity="0.6" />
      <circle cx="70" cy="50" r="2" fill="#EF4444" opacity="0.5" />
      <circle cx="10" cy="34" r="2" fill="#F472B6" opacity="0.4" />
      <defs>
        <linearGradient id="paletteGrad" x1="6" y1="6" x2="72" y2="66" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBCFE8" />
          <stop offset="0.5" stopColor="#F9A8D4" />
          <stop offset="1" stopColor="#F472B6" />
        </linearGradient>
      </defs>
    </svg>
  )
}