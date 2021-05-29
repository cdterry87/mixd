import axios from 'axios'

import { COCKTAIL_DB_API_URL } from '../config'

const getRandomDrink = async () => {
  try {
    const response = await axios.get(`${COCKTAIL_DB_API_URL}/random.php`)
    return response.data.drinks[0]
  } catch (error) {
    console.error(error)
  }
}

const getDrinkById = async id => {
  try {
    const response = await axios.get(
      `${COCKTAIL_DB_API_URL}/lookup.php?i=${id}`
    )
    return response.data.drinks[0]
  } catch (error) {
    console.error(error)
  }
}

const searchDrinkByName = async name => {
  try {
    const response = await axios.get(
      `${COCKTAIL_DB_API_URL}/search.php?s=${name}`
    )
    return response.data.drinks || []
  } catch (error) {
    console.error(error)
  }
}

const searchDrinkByIngredient = async ingredient => {
  try {
    const response = await axios.get(
      `${COCKTAIL_DB_API_URL}/filter.php?i=${ingredient}`
    )
    return response.data.drinks || []
  } catch (error) {
    console.error(error)
  }
}

export const cocktailDbService = {
  getRandomDrink,
  getDrinkById,
  searchDrinkByName,
  searchDrinkByIngredient
}
