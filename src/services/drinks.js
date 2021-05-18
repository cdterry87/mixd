import axios from 'axios'

import { API_URL } from '../config'

export const getRandomDrink = async () => {
  try {
    const response = await axios.get(`${API_URL}/random.php`)
    return response.data.drinks[0]
  } catch (error) {
    console.error(error)
  }
}

export const getDrinkById = async id => {
  try {
    const response = await axios.get(`${API_URL}/lookup.php?i=${id}`)
    return response.data.drinks[0]
  } catch (error) {
    console.error(error)
  }
}

export const getIngredientById = async id => {
  try {
    const response = await axios.get(`${API_URL}/lookup.php?iid=${id}`)
    return response.data.drinks[0]
  } catch (error) {
    console.error(error)
  }
}

export const searchDrinkByName = async name => {
  try {
    const response = await axios.get(`${API_URL}/search.php?s=${name}`)
    return response.data.drinks
  } catch (error) {
    console.error(error)
  }
}

export const searchDrinkByIngredient = async ingredient => {
  try {
    const response = await axios.get(`${API_URL}/filter.php?i=${ingredient}`)
    return response.data.drinks
  } catch (error) {
    console.error(error)
  }
}

export const searchIngredientByName = async name => {
  try {
    const response = await axios.get(`${API_URL}/search.php?i=${name}`)
    return response.data.ingredients
  } catch (error) {
    console.error(error)
  }
}

export const drinksService = {
  getRandomDrink,
  getDrinkById,
  getIngredientById,
  searchDrinkByName,
  searchDrinkByIngredient,
  searchIngredientByName
}
