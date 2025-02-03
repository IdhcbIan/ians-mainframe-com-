import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const CELL_SIZE = 15 // Reduced further
const GRID_SIZE = 28
const WIDTH = GRID_SIZE * CELL_SIZE
const HEIGHT = GRID_SIZE * CELL_SIZE

const CanvasContainer = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  margin: 0 auto; // Center horizontally
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Canvas = styled.canvas`
  border: 2px solid #0f0;
  background: #000;
  cursor: crosshair;
  
  // Remove position: absolute and transform effects
  &:hover {
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
  }
`

const Button = styled.button`
  padding: 8px 16px;
  background: transparent;
  border: 2px solid #0f0;
  color: #0f0;
  font-family: 'Share Tech Mono', monospace;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(0, 255, 0, 0.2);
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
    color: #ffffff;
    border-color: #ffffff;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`

const L1 = () => {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [grid, setGrid] = useState(Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0)))
  const [prediction, setPrediction] = useState(null)
  const [isFirstPrediction, setIsFirstPrediction] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Initial render
    drawGrid(ctx)
  }, [])

  const drawGrid = (ctx) => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    
    // Draw cells
    for(let row = 0; row < GRID_SIZE; row++) {
      for(let col = 0; col < GRID_SIZE; col++) {
        const color = grid[row][col] ? '#0f0' : '#000'
        ctx.fillStyle = color
        ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE)
      }
    }

    // Draw grid lines
    ctx.strokeStyle = '#030'
    ctx.lineWidth = 1
    
    for(let i = 0; i <= GRID_SIZE; i++) {
      // Vertical lines
      ctx.beginPath()
      ctx.moveTo(i * CELL_SIZE, 0)
      ctx.lineTo(i * CELL_SIZE, HEIGHT)
      ctx.stroke()
      
      // Horizontal lines
      ctx.beginPath() 
      ctx.moveTo(0, i * CELL_SIZE)
      ctx.lineTo(WIDTH, i * CELL_SIZE)
      ctx.stroke()
    }
  }

  const setCellColor = (x, y) => {
    const col = Math.floor(x / CELL_SIZE)
    const row = Math.floor(y / CELL_SIZE)
    
    if(row >= 0 && row < GRID_SIZE && col >= 0 && col < GRID_SIZE) {
      const newGrid = [...grid]
      newGrid[row][col] = 1
      setGrid(newGrid)
      
      const ctx = canvasRef.current.getContext('2d')
      drawGrid(ctx)
    }
  }

  const handleMouseDown = (e) => {
    setIsDrawing(true)
    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setCellColor(x, y)
  }

  const handleMouseMove = (e) => {
    if(!isDrawing) return
    
    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setCellColor(x, y)
  }

  const handleMouseUp = () => {
    setIsDrawing(false)
  }

  const handleClear = () => {
    setGrid(Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0)))
    setPrediction(null)
    const ctx = canvasRef.current.getContext('2d')
    drawGrid(ctx)
  }

  const handleRead = async () => {
    try {
      if (isFirstPrediction) {
        setPrediction('Starting EC2...')
        setIsFirstPrediction(false)
      } else {
        setPrediction('Loading...')
      }
      
      const flatGrid = grid.flat()
      
      const response = await fetch('https://of4e4p05kg.execute-api.sa-east-1.amazonaws.com/default/MNIST2/Predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: flatGrid }) // Send the flattened grid data
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('API Response:', data)
      
      // Handle the prediction response
      if (data.body && data.body.prediction !== undefined) {
        setPrediction(data.body.prediction)
      } else if (data.prediction !== undefined) {
        setPrediction(data.prediction)
      } else {
        throw new Error('Invalid response format from API')
      }
    } catch (error) {
      console.error('Error reading digit:', error)
      setPrediction(`Error: ${error.message}`)
    }
  }

  return (
    <CanvasContainer
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Canvas 
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      <ButtonContainer>
        <Button onClick={handleRead}>READ!!</Button>
        <Button onClick={handleClear}>CLEAR</Button>
      </ButtonContainer>
      {prediction !== null && (
        <div style={{ color: '#0f0', marginTop: '10px' }}>
          Prediction: {prediction}
        </div>
      )}
    </CanvasContainer>
  )
}

export default L1
