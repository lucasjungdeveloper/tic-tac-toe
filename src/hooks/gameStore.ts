import { create } from 'zustand'

type Player = 'X' | 'O' | ''

type GameStoreState = {
  game: Player[]
  isXToMove: boolean
  resetGame: () => void
  makeMove: (index: number) => void
  isGameOver: () => boolean
}

const initialGame: Player[] = ['', '', '', '', '', '', '', '', '']

export const useGameStore = create<GameStoreState>()((set, get) => ({
  game: [...initialGame],
  isXToMove: true,
  resetGame: () => {
    set({ game: [...initialGame], isXToMove: true })
  },
  makeMove: (index: number) => {
    if (get().isGameOver()) {
      return
    }
    const game = get().game
    const isXToMove = get().isXToMove

    if (game[index] !== '') return

    game[index] = isXToMove ? 'X' : 'O'

    set({ game, isXToMove: !isXToMove })
  },
  isGameOver: () => {
    const game = get().game

    // check diagonals
    if (game[4] !== '') {
      if (game[0] === game[4] && game[4] === game[8]) return true
      if (game[2] === game[4] && game[4] === game[6]) return true
    }

    for (let i = 0; i < game.length; i++) {
      // check rows
      if (game[i] !== '' && (i === 0 || i === 3 || i === 6)) {
        if (game[i] === game[i + 1] && game[i + 1] === game[i + 2]) return true
      }

      // check columns
      if (game[i] !== '' && (i === 0 || i === 1 || i === 2)) {
        if (game[i] === game[i + 3] && game[i + 3] === game[i + 6]) return true
      }
    }

    // draw
    if (
      game[0] !== '' &&
      game[1] !== '' &&
      game[2] !== '' &&
      game[3] !== '' &&
      game[4] !== '' &&
      game[5] !== '' &&
      game[6] !== '' &&
      game[7] !== '' &&
      game[8] !== ''
    ) {
      return true
    }

    return false
  },
}))
