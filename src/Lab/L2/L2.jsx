import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const CELL_SIZE = 15
const GRID_SIZE = 28
const WIDTH = GRID_SIZE * CELL_SIZE
const HEIGHT = GRID_SIZE * CELL_SIZE

const CanvasContainer = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  margin: 0 auto;
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

const L2 = () => {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [grid, setGrid] = useState(Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0)))

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    drawGrid(ctx)
  }, [grid])

  useEffect(() => {
    let timeoutId

    const runSimulation = () => {
      if (isRunning) {
        setGrid(g => {
          const nextGrid = g.map((row, i) =>
            row.map((cell, j) => {
              const neighbors = countNeighbors(g, i, j)
              if (cell === 1) {
                return neighbors === 2 || neighbors === 3 ? 1 : 0
              } else {
                return neighbors === 3 ? 1 : 0
              }
            })
          )
          return nextGrid
        })
        timeoutId = setTimeout(runSimulation, 150) // Reduced from 500ms to 350ms (30% faster)
      }
    }

    if (isRunning) {
      runSimulation()
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isRunning])

  const countNeighbors = (grid, row, col) => {
    let count = 0
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue
        const newRow = row + i
        const newCol = col + j
        if (newRow >= 0 && newRow < GRID_SIZE && newCol >= 0 && newCol < GRID_SIZE) {
          count += grid[newRow][newCol]
        }
      }
    }
    return count
  }

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
      ctx.beginPath()
      ctx.moveTo(i * CELL_SIZE, 0)
      ctx.lineTo(i * CELL_SIZE, HEIGHT)
      ctx.stroke()
      
      ctx.beginPath() 
      ctx.moveTo(0, i * CELL_SIZE)
      ctx.lineTo(WIDTH, i * CELL_SIZE)
      ctx.stroke()
    }
  }

  const toggleCell = (x, y) => {
    const col = Math.floor(x / CELL_SIZE)
    const row = Math.floor(y / CELL_SIZE)
    
    if(row >= 0 && row < GRID_SIZE && col >= 0 && col < GRID_SIZE) {
      const newGrid = [...grid]
      newGrid[row][col] = newGrid[row][col] ? 0 : 1
      setGrid(newGrid)
    }
  }

  const handleMouseDown = (e) => {
    setIsDrawing(true)
    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    toggleCell(x, y)
  }

  const handleMouseMove = (e) => {
    if(!isDrawing) return
    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    toggleCell(x, y)
  }

  const handleMouseUp = () => {
    setIsDrawing(false)
  }

  const clearGrid = () => {
    setGrid(Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0)))
    setIsRunning(false)
  }

  return (
    <CanvasContainer>
      <Canvas 
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Stop' : 'Start'}
        </Button>
        <Button onClick={clearGrid}>Clear</Button>
      </div>
    </CanvasContainer>
  )
}

export default L2
