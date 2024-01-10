import { create } from 'zustand'

//defining interface of search

interface state {
  isSearchVisible: boolean,
  query: string
}

interface actions {
  toggleSearchVisibility: () => void,
}

const INITIAL_STATE: state = {
  isSearchVisible: false,
  query:'',
}

export const useSearchStore = create<state & actions>((set) => ({
  isSearchVisible: INITIAL_STATE.isSearchVisible,
  query: INITIAL_STATE.query,
  toggleSearchVisibility: () => {
    set(state => ({
      ...state,
      isSearchVisible: !state.isSearchVisible
    }))
  }
}))