import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

interface StyleContextShape {
  body: string
  setBody: Dispatch<SetStateAction<string>>
}

export const StyleContext = createContext<StyleContextShape>({
  body: '',
  setBody: (value: SetStateAction<string>) => {}
})

export const StyledProvider = ({ children }: { children: ReactNode }) => {
  const [body, setBody] = useState('')

  return <StyleContext.Provider value={{ body, setBody }}>{children}</StyleContext.Provider>
}

export const usePageStyle = () => useContext(StyleContext)
