"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";

const weeklyData = [
  { day: "Lun", value: 60 },
  { day: "Mar", value: 80 },
  { day: "Mer", value: 70 },
  { day: "Jeu", value: 90 },
  { day: "Ven", value: 40 },
  { day: "Sam", value: 100 },
  { day: "Dim", value: 75 }
];

const monthlyData = [
  { week: "S1", value: 65 },
  { week: "S2", value: 72 },
  { week: "S3", value: 85 },
  { week: "S4", value: 58 }
];

const yearlyData = [
  { month: "Jan", value: 62 },
  { month: "Fév", value: 70 },
  { month: "Mar", value: 55 },
  { month: "Avr", value: 78 },
  { month: "Mai", value: 81 },
  { month: "Juin", value: 69 }
];

export default function DashboardCharts() {
  return (
    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
      <div className="card">
        <h3>Hebdo</h3>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={weeklyData}>
            <XAxis dataKey="day" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="value" fill="#5b6cff" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="card">
        <h3>Mois</h3>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={monthlyData}>
            <XAxis dataKey="week" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="value" fill="#4ade80" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="card">
        <h3>Année</h3>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={yearlyData}>
            <XAxis dataKey="month" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line dataKey="value" stroke="#f97316" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
