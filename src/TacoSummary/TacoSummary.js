import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TacoSummary = props => {

    const [ingredient, setIngredient] = useState([])
    const [userClick, setUserClicked] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
        
    }, [])

    function randomRecipe(event) {
        setLoading(true)
        const APP_ID = process.env.REACT_APP_ID
        let foodArr = ['chicken','beef','Eggs', 'Dairy','Vegan', 'paleo','Carbs','pork','Diet','Health','soy','sugar']

        let randomSearch = Math.floor(Math.random()*foodArr.length)

        axios.get(`https://api.edamam.com/search?q=${randomSearch}&app_id=e5522ebc&app_key=${APP_ID}`)
            .then(res => {
                const recipes = res.data.hits
                // setIngredient(recipes)
                // return recipes
                let randomNum = Math.floor(Math.random()*recipes.length)
                setIngredient(
                    (recipes[randomNum].recipe.label) + ' Taco'
                )
                setUserClicked(true)
                setLoading(false)
            })
            setUserClicked(false)
    }

    let modal = null

    if(loading) {
        modal = (<p>It is Loading</p>)
    }


    return (
        <>
            
            <h1>Create your Taco</h1>
            { userClick && !loading ? <p>Your Taco: {ingredient}<span></span></p> : null }
            { loading && !userClick ? <p>It is Loading</p> : null }
            
            {/* { modal }  */}
            <button onClick={() => randomRecipe()}>Generate Your Taco!</button>
        </>
    )
}

export default TacoSummary