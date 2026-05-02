const towns = [
  { name: 'Naperville', primary: true },
  { name: 'Aurora' },
  { name: 'Plainfield' },
  { name: 'Bolingbrook' },
  { name: 'Lisle' },
  { name: 'Wheaton' },
  { name: 'Woodridge' },
  { name: 'Downers Grove' },
];

export default function ServiceArea() {
  return (
    <section className="relative">
      <div className="container-x py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left — map illustration */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative aspect-[5/4] rounded-2xl overflow-hidden border border-ink-800/10 bg-bone-100">
              {/* Stylized "map" */}
              <svg viewBox="0 0 500 400" className="absolute inset-0 w-full h-full">
                <defs>
                  <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="rgba(15,14,13,0.08)" />
                  </pattern>
                </defs>
                <rect width="500" height="400" fill="url(#dots)" />

                {/* Roads */}
                <path d="M0 130 Q150 110 270 160 T500 200" stroke="rgba(15,14,13,0.12)" strokeWidth="2" fill="none" />
                <path d="M60 0 Q90 180 200 260 T420 400" stroke="rgba(15,14,13,0.12)" strokeWidth="2" fill="none" />
                <path d="M0 280 Q200 250 300 290 T500 320" stroke="rgba(15,14,13,0.10)" strokeWidth="1.5" fill="none" />
                <path d="M250 0 Q260 100 220 180 T280 400" stroke="rgba(15,14,13,0.10)" strokeWidth="1.5" fill="none" />

                {/* Service area shape */}
                <path
                  d="M120 130 Q210 80 310 110 Q400 140 380 240 Q360 320 240 320 Q140 320 110 240 Q90 170 120 130 Z"
                  fill="rgba(176,136,86,0.10)"
                  stroke="rgba(176,136,86,0.55)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Pins */}
                {[
                  { x: 240, y: 200, label: 'Naperville', primary: true },
                  { x: 140, y: 180, label: 'Aurora' },
                  { x: 200, y: 290, label: 'Plainfield' },
                  { x: 320, y: 270, label: 'Bolingbrook' },
                  { x: 310, y: 180, label: 'Lisle' },
                  { x: 320, y: 110, label: 'Wheaton' },
                  { x: 360, y: 220, label: 'Woodridge' },
                  { x: 390, y: 160, label: 'Downers Grove' },
                ].map((p) => (
                  <g key={p.label}>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={p.primary ? 7 : 4}
                      fill={p.primary ? '#b08856' : '#1a1817'}
                    />
                    {p.primary && (
                      <circle cx={p.x} cy={p.y} r="14" fill="none" stroke="#b08856" strokeWidth="1.5" opacity="0.4" />
                    )}
                    <text
                      x={p.x + (p.primary ? 12 : 8)}
                      y={p.y + 4}
                      fontSize={p.primary ? '13' : '11'}
                      fontWeight={p.primary ? '600' : '500'}
                      fill="#1a1817"
                      fontFamily="Inter, sans-serif"
                    >
                      {p.label}
                    </text>
                  </g>
                ))}
              </svg>

              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-bone-50/90 backdrop-blur border border-ink-800/10 text-[11px] font-medium text-ink-800">
                <span className="inline-block h-2 w-2 rounded-full bg-bronze-500 mr-2 align-middle" />
                Active service area
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="eyebrow mb-5">Local service</div>
            <h2 className="h-display text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.05] text-balance">
              Garage transformations across Naperville &amp; nearby suburbs.
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-2">
              {towns.map((t) => (
                <div
                  key={t.name}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-lg ${
                    t.primary
                      ? 'bg-ink-800 text-bone-100 border border-ink-800'
                      : 'bg-bone-50 border border-ink-800/10 text-ink-800'
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${t.primary ? 'bg-bronze-400' : 'bg-bronze-500'}`} />
                  <span className="text-[14px] font-medium">{t.name}</span>
                </div>
              ))}
            </div>

            <a href="#quote" className="btn-primary mt-8">
              Check availability in your area
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
