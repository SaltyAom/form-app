import { atom, useAtom } from 'jotai'

export const usernameAtom = atom('')
export const useUsername = () => useAtom(usernameAtom)
