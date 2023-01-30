import { useGameStore } from '../hooks/gameStore'
import { Square } from './Square'

export function TicTacToe() {
  const [isGameOver, resetGame] = useGameStore((state) => [
    state.isGameOver(),
    state.resetGame,
  ])

  return (
    <>
      <div className="flex w-36 flex-wrap">
        <Square position={0} />
        <Square position={1} />
        <Square position={2} />

        <Square position={3} />
        <Square position={4} />
        <Square position={5} />

        <Square position={6} />
        <Square position={7} />
        <Square position={8} />
      </div>
      {isGameOver && (
        <div>
          <p>Fim de jogo!</p>
          <button
            onClick={() => {
              resetGame()
            }}
          >
            Reiniciar
          </button>
        </div>
      )}
    </>
  )
}
