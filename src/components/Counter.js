// useSelector for only select perticular object in the store
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/index'

const Counter = () => {
    const mycounter = useSelector((state) => state.counter)
    const myShowcounter = useSelector((state)=>  state.Showcounter)
    // const myname = useSelector((state) => state.name)
    // const changecolor1 = useSelector((state) => state.changecolor)
    // const changecolor2 = useSelector((state) => state.changecolor2)
    const myvalue = 50
    const dispatch = useDispatch()
    const IncreaseHandler = () => {
      dispatch(counterActions.increase(50)) //{type:'UNIQUE_GENERATED_IDENTIFIER, payload:20}
      // In payload define object,array,string,number
    }
    // console.log(IncreaseHandler);
    const IncreamentHandler = () => {
        dispatch(counterActions.increment())
    }
    // console.log(IncreamentHandler);
    
    const DecreamentHandler = () => {
        dispatch(counterActions.decrement())
    }

    const toggleHandler = () => {
      dispatch(counterActions.toggle()) //{type : UNIQUE_IDENTIFIER,payloa:undefine}
    }

  return (
    <div>
    <center>
      <main className='counter'>
            <h1>Redux Counter</h1>
            { myShowcounter ? <div className='value'>{mycounter}</div> : "Nothing"}
            <div>
                <button onClick={IncreamentHandler}>Increament</button>
            </div>
            <div>
                <button onClick={DecreamentHandler}>Decreament</button>
            </div>
            <button onClick={IncreaseHandler}>IncreamentBy{myvalue}</button>
            <button onClick={toggleHandler}>Toggle Handler</button>
      </main>
      </center>
    </div>
  )
}

export default Counter
