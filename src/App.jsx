import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {createTheme, colors, ThemeProvider} from '@mui/material'
import './App.css'
import NavBar from './components/NavBar/NavBar'

const theme=createTheme({
  status:{
    danger: '#e53e3e',
  },
  palette:{
    secondary:{
      main: colors.indigo[500],
    },
    neutral:{
      main: colors.grey[500],
      darker: colors.grey[700],
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<NavBar/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
