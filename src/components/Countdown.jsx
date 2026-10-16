import { useEffect, useState } from "react";

function getElapsed(startDate) {
  const now = new Date();
  const start = new Date(startDate);

  if (now < start) {
    return { years: 0, months: 0, days: 0, hours: 0 };
  }

  let years = 0;
  let anniversary = new Date(start);

  while (true) {
    const nextAnniversary = new Date(anniversary);
    nextAnniversary.setFullYear(nextAnniversary.getFullYear() + 1);

    if (now < nextAnniversary) break;

    years += 1;
    anniversary = nextAnniversary;
  }

  let months = now.getMonth() - anniversary.getMonth();
  let days = now.getDate() - anniversary.getDate();
  let hours = now.getHours() - anniversary.getHours();

  if (hours < 0) {
    hours += 24;
    days -= 1;
  }

  if (days < 0) {
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
    months -= 1;
  }

  if (months < 0) {
    months += 12;
  }

  return {
    years,
    months: Math.max(0, months),
    days: Math.max(0, days),
    hours: Math.max(0, hours),
  };
}

export default function Countdown({ startDate }) {
  const [elapsed, setElapsed] = useState(() => getElapsed(startDate));

  useEffect(() => {
    const timer = window.setInterval(
      () => setElapsed(getElapsed(startDate)),
      60_000,
    );
    return () => window.clearInterval(timer);
  }, [startDate]);

  return (
    <div className="counter" aria-label="Tiempo juntos">
      {Object.entries(elapsed).map(([label, value]) => (
        <div className="count" key={label}>
          <strong>{value}</strong>
          <span>
            {
              { years: "Años", months: "Meses", days: "Días", hours: "Horas" }[
                label
              ]
            }
          </span>
        </div>
      ))}
    </div>
  );
}
