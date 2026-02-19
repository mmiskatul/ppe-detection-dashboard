const stats = [
  {
    label: "PPE Compliance",
    value: "87.3%",
    sub: "Aggregated across all category",
    delta: "+2.1%",
  },
  {
    label: "Risk Avoided",
    value: "1,247",
    sub: "Corrective action taken",
    delta: "+2.1%",
  },
  {
    label: "Total Incidents",
    value: "112",
    sub: "This month",
    delta: "-2.1%",
  },
  {
    label: "Active Users",
    value: "1,247",
    sub: "Monitored personnel",
    delta: "+2.1%",
  },
  {
    label: "Est. Savings",
    value: "$1.247M",
    sub: "Injuries prevented",
    delta: "+2.1%",
  },
  {
    label: "Incident Rate",
    value: "0.26",
    sub: "Per 100 workers/day",
    delta: "-2.1%",
  },
];

const violations = [
  { label: "Helmet", value: 38, color: "#f59e0b" },
  { label: "Gloves", value: 38, color: "#3b82f6" },
  { label: "Glasses", value: 38, color: "#22c55e" },
  { label: "Vest", value: 38, color: "#8b5cf6" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="top-bar">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Dashboard Overview
          </h1>
          <p className="text-sm text-slate-500">
            Real time safety performance monitoring
          </p>
        </div>
        <div className="filters">
          <div className="filter-pill">Week</div>
          <div className="filter-pill">Month</div>
          <div className="filter-pill">Year</div>
        </div>
      </div>

      <div className="grid-cards">
        {stats.map((stat) => (
          <div key={stat.label} className="card space-y-2">
            <div className="flex items-center">
              <div className="kpi-label">{stat.label}</div>
              <div className="kpi-pill">{stat.delta}</div>
            </div>
            <div className="kpi-value">{stat.value}</div>
            <div className="kpi-sub">{stat.sub}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-800">
              Compliance & Incidents
            </div>
          </div>
          <div className="text-xs text-slate-400">Mon - Sun</div>
        </div>
        <svg className="chart" viewBox="0 0 600 220">
          <defs>
            <linearGradient id="grid" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="600" height="220" fill="url(#grid)" />
          <path
            d="M20 140 C 100 110, 160 150, 240 120 C 320 90, 400 110, 520 80"
            stroke="#f97316"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M20 160 C 100 150, 180 190, 260 140 C 340 100, 420 120, 520 110"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="none"
          />
        </svg>
        <div className="flex items-center justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Incident
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Compliance
          </span>
        </div>
      </div>

      <div className="card">
        <div className="text-sm font-semibold text-slate-800">
          Violations by Type
        </div>
        <div className="progress-row">
          {violations.map((item) => (
            <div key={item.label} className="progress-item">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-bar"
                  style={{
                    width: `${item.value}%`,
                    background: item.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-slate-400">
          Total violations: 89
        </div>
      </div>
    </div>
  );
}
