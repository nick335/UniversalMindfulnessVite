import { create } from 'zustand';

//defining interface of cart
interface state {
  isCartOpen: boolean,
  noOfCartItem: number
}
interface actions {
  toggleCart: () => void,
}

const INITIAL_STATE: state = {
  isCartOpen: false,
  noOfCartItem: 0,
}

export const useCartStore = create<state & actions>((set) => ({
  isCartOpen: INITIAL_STATE.isCartOpen,
  noOfCartItem: INITIAL_STATE.noOfCartItem,
  toggleCart: () => {
    set(state => ({
      ...state,
      isCartOpen: !state.isCartOpen
    }))
  }
}))