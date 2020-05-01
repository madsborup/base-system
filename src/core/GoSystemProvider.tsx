import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../types'

interface Props {
  theme: Theme;
  children: React.ReactNode
}

export const GoProvider: React.FC<Props> = ({theme, children}: Props) => {



  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export GoProvider: 