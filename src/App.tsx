import React from 'react'
import { Box } from './components/Box'

const App = () => {
  return (
    <div>
      Hello.
      <Box color='red' bg='green' size='small'>
        Test
      </Box>
      <Box color='green' bg='red'>
        Test
      </Box>
    </div>
  )
}

export default App