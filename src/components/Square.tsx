import { useGameStore } from '../hooks/gameStore'

type SquareProps = {
  position: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

export function Square({ position }: SquareProps) {
  const [game, makeMove] = useGameStore((state) => [state.game, state.makeMove])

  const handleClick = () => {
    makeMove(position)
  }

  return (
    <div
      onClick={handleClick}
      className="flex h-12 w-12 items-center justify-center border border-neutral-500 hover:cursor-pointer hover:bg-neutral-800"
    >
      <h1 className="select-none text-3xl font-bold">{game[position]}</h1>
    </div>
  )
}
