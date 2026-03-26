import { useMemo, useState } from 'react'

export default function App() {
  const [score, setScore] = useState(0)

  const rank = useMemo(() => {
    if (score >= 100) return 'Guildmaster'
    if (score >= 50) return 'Knight'
    if (score >= 20) return 'Adventurer'
    if (score >= 10) return 'Scout'
    return 'Novice'
  }, [score])

  return (
    <main className="app-shell">
      <section className="panel">
        <p className="eyebrow">AutoAdventure</p>
        <h1>Tiny placeholder build</h1>
        <p className="copy">
          Click to gather adventure points. Real upgrades, RPG systems, and a skill tree come next.
        </p>

        <div className="stats">
          <div className="stat-card">
            <span>Adventure Points</span>
            <strong>{score}</strong>
          </div>
          <div className="stat-card">
            <span>Rank</span>
            <strong>{rank}</strong>
          </div>
        </div>

        <button className="quest-button" onClick={() => setScore((value) => value + 1)}>
          Go on a tiny adventure
        </button>
      </section>
    </main>
  )
}
