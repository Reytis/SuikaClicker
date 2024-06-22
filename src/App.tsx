import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [coef, setCoef] = useState(1)
  const [buyed, setBuyed] = useState([0,0,0,0,0,0,0,0,0,0,0,0])

  const [autoCoef, setAutoCoef] = useState(0)
  const [autoBuyed, setAutoBuyed] = useState([0,0,0,0,0,0,0,0,0,0,0,0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + autoCoef)
    }, 1000)

    return () => clearInterval(interval)
  }, [autoCoef])



  const handleClick = () => {
    setCount((count) => count + (1 * coef))
  }

  const handleReset = () => {
    setCount(0)

    setCoef(1)
    setBuyed([0,0,0,0,0,0,0,0,0,0,0,0])

    setAutoCoef(0)
    setAutoBuyed([0,0,0,0,0,0,0,0,0,0,0,0])
  }


  const handleCost = (coefAdd: number, id: number) => {
    if(count >= defineCost(coefAdd, id)) {
      setBuyed(prevBuyed => {
        const newBuyed = [...prevBuyed]
        newBuyed[id] += 1
        return newBuyed
      })
      setCount((count) => count - defineCost(coefAdd, id)) 
      setCoef((coef) => coef + coefAdd)
    }
  }  
  const defineCost = (coefAdd: number, id: number) => {
    const cost = buyed[id] > 0 ? coefAdd * 20 + Math.pow(coefAdd * 1.75, buyed[id] * 0.75) : coefAdd * 20
    return Math.round(cost)
  }


  const handleAutoCost = (coefAdd: number, id: number) => {
    if(count >= defineAutoCost(coefAdd, id)) {
      setAutoBuyed(prevBuyed => {
        const newBuyed = [...prevBuyed]
        newBuyed[id] += 1
        return newBuyed
      })
      setCount((count) => count - defineCost(coefAdd, id))
      setAutoCoef(coef => coef + coefAdd)
    }
  }
  const defineAutoCost = (coefAdd: number, id: number) => {
    const cost = autoBuyed[id] > 0 ? coefAdd * 1000 + Math.pow(coefAdd * 1.75, autoBuyed[id] * 0.75) : coefAdd * 1000
    return Math.round(cost)
  }

  return (
    <>
      <h1>Suika Clicker</h1>
      <h3>
        Suikass: {count} <br />
        Multiplacator: {coef} <br />
        AutoSuik: {autoCoef}
      </h3>
        <button onClick={() => handleClick()}>
          Suika
        </button>
      <div className="card">
        <h2>Upgrade per Click</h2>
        <button onClick={() => handleCost(1, 0)}>
          Upgrade: 1 <br />
          Cost: {defineCost(1, 0)} <br /> 
          Buyed: {buyed[0]}
        </button>
        <button onClick={() => handleCost(2, 1)}>
          Upgrade: 2 <br />
          Cost: {defineCost(2, 1)} <br />  
          Buyed: {buyed[1]}
        </button>
        <button onClick={() => handleCost(5, 2)}>
          Upgrade: 5 <br />
          Cost: {defineCost(5, 2)} <br />
          Buyed: {buyed[2]}
        </button>
        <button onClick={() => handleCost(10, 3)}>
          Upgrade: 10 <br />
          Cost: {defineCost(10, 3)} <br />
          Buyed: {buyed[3]}
        </button>
        <button onClick={() => handleCost(25, 4)}>
          Upgrade: 25 <br />
          Cost: {defineCost(25, 4)} <br />
          Buyed: {buyed[4]}
        </button>
        <button onClick={() => handleCost(100, 5)}>
          Upgrade: 100 <br />
          Cost: {defineCost(100, 5)} <br />
          Buyed: {buyed[5]}
        </button>
        <button onClick={() => handleCost(666, 6)}>
          Upgrade: 666 <br />
          Cost: {defineCost(666, 6)} <br />
          Buyed: {buyed[6]}
        </button>
        <button onClick={() => handleCost(777, 7)}>
          Upgrade: 777 <br />
          Cost: {defineCost(777, 7)} <br />
          Buyed: {buyed[7]}
        </button>
        <button onClick={() => handleCost(1000, 8)}>
          Upgrade: 1000 <br />
          Cost: {defineCost(1000, 8)} <br />
          Buyed: {buyed[8]}
        </button>
        <button onClick={() => handleCost(2500, 9)}>
          Upgrade: 2500 <br />
          Cost: {defineCost(2500, 9)} <br />
          Buyed: {buyed[9]}
        </button>
        <button onClick={() => handleCost(5000, 10)}>
          Upgrade: 5000 <br />
          Cost: {defineCost(5000, 10)} <br />
          Buyed: {buyed[10]}
        </button>
        <button onClick={() => handleCost(10000, 11)}>
          Upgrade: 10k <br />
          Cost: {defineCost(10000, 11)} <br />
          Buyed: {buyed[11]}
        </button>
      </div>
      <div className="card">
        <h2>Upgrade AutoClick</h2>
        <button onClick={() => handleAutoCost(1, 0)}>
          Upgrade: 1 <br />
          Cost: {defineAutoCost(1, 0)} <br /> 
          Buyed: {autoBuyed[0]}
        </button>
        <button onClick={() => handleAutoCost(2, 1)}>
          Upgrade: 2 <br />
          Cost: {defineAutoCost(2, 1)} <br />  
          Buyed: {autoBuyed[1]}
        </button>
        <button onClick={() => handleAutoCost(5, 2)}>
          Upgrade: 5 <br />
          Cost: {defineAutoCost(5, 2)} <br />
          Buyed: {autoBuyed[2]}
        </button>
        <button onClick={() => handleAutoCost(10, 3)}>
          Upgrade: 10 <br />
          Cost: {defineAutoCost(10, 3)} <br />
          Buyed: {autoBuyed[3]}
        </button>
        <button onClick={() => handleAutoCost(25, 4)}>
          Upgrade: 25 <br />
          Cost: {defineAutoCost(25, 4)} <br />
          Buyed: {autoBuyed[4]}
        </button>
        <button onClick={() => handleAutoCost(100, 5)}>
          Upgrade: 100 <br />
          Cost: {defineAutoCost(100, 5)} <br />
          Buyed: {autoBuyed[5]}
        </button>
        <button onClick={() => handleAutoCost(666, 6)}>
          Upgrade: 666 <br />
          Cost: {defineAutoCost(666, 6)} <br />
          Buyed: {autoBuyed[6]}
        </button>
        <button onClick={() => handleAutoCost(777, 7)}>
          Upgrade: 777 <br />
          Cost: {defineAutoCost(777, 7)} <br />
          Buyed: {autoBuyed[7]}
        </button>
        <button onClick={() => handleAutoCost(1000, 8)}>
          Upgrade: 1000 <br />
          Cost: {defineAutoCost(1000, 8)} <br />
          Buyed: {autoBuyed[8]}
        </button>
        <button onClick={() => handleAutoCost(2500, 9)}>
          Upgrade: 2500 <br />
          Cost: {defineAutoCost(2500, 9)} <br />
          Buyed: {autoBuyed[9]}
        </button>
        <button onClick={() => handleAutoCost(5000, 10)}>
          Upgrade: 5000 <br />
          Cost: {defineAutoCost(5000, 10)} <br />
          Buyed: {autoBuyed[10]}
        </button>
        <button onClick={() => handleAutoCost(10000, 11)}>
          Upgrade: 10k <br />
          Cost: {defineAutoCost(10000, 11)} <br />
          Buyed: {autoBuyed[11]}
        </button>
      </div>
      <button onClick={() => handleReset()}>
        Reset Game
      </button>
    </>
  )
}

export default App
