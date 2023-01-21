import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchGreetings} from '../greetingSlice'

function Greetings() {
    const greeting = useSelector(state => state.greeting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGreetings());
    }, [dispatch]);

    console.log(greeting);
    return (<h1>{greeting.message}</h1>);
}

export default Greetings;