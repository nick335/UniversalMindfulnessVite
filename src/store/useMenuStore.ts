import { create } from "zustand";

// defining interface of menu
interface state {
 isOpen: boolean
 aboutDropdown: boolean
 hasInteracted: boolean,
}

interface Actions {
 toggleMenu: () => void,
 toggleDropdown: () => void,
 setHasInteracted:(interaction: boolean) => void
 setIsDropdownOpen:(isOpen: boolean) => void
}

const INITIAL_STATE: state = {
 isOpen: false,
 aboutDropdown: false,
 hasInteracted: false,
}


export const useMenuStore = create<state & Actions>((set) => ({
 isOpen: INITIAL_STATE.isOpen,
 aboutDropdown: INITIAL_STATE.aboutDropdown,
 hasInteracted: INITIAL_STATE.hasInteracted,
 toggleMenu: () => {
  set(state => ({
   ...state, 
   isOpen: !state.isOpen
  }))
 },
 toggleDropdown: () => {
  set(state => ({
    ...state,
    aboutDropdown: !state.aboutDropdown
  }))
 },
 setHasInteracted: (interaction) => {
  set(state => ({
    ...state,
    hasInteracted: interaction
  }))
 },
 setIsDropdownOpen: (isOpen) => {
  set(state => ({
   ...state,
   aboutDropdown: isOpen
  }))
 },
}))