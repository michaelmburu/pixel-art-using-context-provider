import React, { createContext, useContext, useState } from 'react'

//Create Context
const ColorContext = createContext({
    color: 'lightGrey',
    setColor: () => {}
})

function ColorPicker () {
    // On click, set color state
    const {setColor} = useContext(ColorContext)
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }} onClick={() => setColor(color)} />)}
    </div>
  )
}

function Pixel () {
    //Get current color state
    const {color} = useContext(ColorContext)
    
    //Get & set pixel color state
    const[pixelColor, setPixelColor] = useState('lightGrey')
  return <div style={{ height: '20px', width: '20px', backgroundColor: pixelColor, margin: '1px' }} onClick={() => setPixelColor(color)}/>
}

function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {
    
    //Create color state
    const [color, setColor] = useState('lightGrey')
  return (
    <div>
    {/* Initialize provider*/}
    <ColorContext.Provider value={{color, setColor}}>
      <ColorPicker />
      <Pixels />
    </ColorContext.Provider>
    </div>
  )
}