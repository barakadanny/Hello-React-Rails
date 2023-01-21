import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchGreetings} from '../greetingSlice'

function Greetings() {
    const greeting = useSelector(state => state.greeting);
    const dispatch = useDispatch();
    dispatch(fetchGreetings());

    console.log(greeting);
    return (<h1>{greeting}</h1>);
}

export default Greetings;