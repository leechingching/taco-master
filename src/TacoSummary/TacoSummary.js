import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TacoSummary = props => {

    useEffect(() => {
        let config = {
            headers: { 
                'Content-Type': 'application/json', 
                'X-RapidAPI-Key': process.env.REACT_APP_FOOD_API_KEY }
          };
        axios.post('https://zestful.p.rapidapi.com/parseIngredients', config)
            .then(res => {
                console.log(res)
            })
            .catch(console.log('failed to get the API'))
    }, [])

    return (
        <>
            <h1>Create your Taco</h1>
            <p>Your Taco: <span></span></p>
            <button>Generate Your Taco!</button>
        </>
    )
}

export default TacoSummary