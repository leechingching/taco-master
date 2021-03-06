import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../styles.scss";
import Spinner from '../Spinner/Spinner'

const TacoSummary = props => {

    const [ingredient, setIngredient] = useState([])
    const [image, setImage] = useState(null)
    const [userClick, setUserClicked] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
        
    }, [])

    function randomRecipe(event) {
        setLoading(true)
        const APP_ID = process.env.REACT_APP_ID
        let foodArr = [
            'chicken',
            'beef',
            'Eggs', 
            'Dairy',
            'Vegan', 
            'paleo','Carbs','pork','Diet','Health','soy','sugar']

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
                setImage(recipes[randomNum].recipe.image)
                setUserClicked(true)
                setLoading(false)
                console.log(recipes)
            })
            setUserClicked(false)

            
    }



    return (
        <>
            <h1>Create your Taco</h1>
            { userClick && !loading ? <div>
                <p>Your Taco: {ingredient}<span></span></p>
                <img src={image} alt={ingredient} />
            </div> : null }
            { loading && !userClick ? <Spinner /> : null }
            <button onClick={() => randomRecipe()}>Generate Your Taco!</button>
        </>
    )
}

export default TacoSummary