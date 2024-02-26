import React from 'react';
import {Button} from 'react-bootstrap';
//import {Table} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import { decreament, increament } from './Counter';



const CounterDis = () => {
    const dispatch =useDispatch();
    const counters =useSelector((state)=>(state.CounterReducer.counter));
  return (
    <div>
      <Button onClick={()=>dispatch(increament())} variant="warning">
       Increament 
      </Button>
      <h1>{counters}</h1>
      <Button onClick= {()=>dispatch(decreament())} variant="danger">
        Decreament
      </Button>
    
    
    </div>
  )
}

export default CounterDis
