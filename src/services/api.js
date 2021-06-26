import axios from 'axios'

import { CATEGORIES } from '../constants/categories'
import { COCKTAIL_DB_API_URL, MEAL_DB_API_URL } from '../config'

const getApiUrl = category => {
  return category === CATEGORIES.MEALS ? MEAL_DB_API_URL : COCKTAIL_DB_API_URL
}

const getRandom = async category => {
  const API_URL = getApiUrl(category)

  try {
    const response = await axios.get(`${API_URL}/random.php`)
    return response.data[category][0]
  } catch (error) {
    console.error(error)
  }
}

const getById = async (id, category) => {
  const API_URL = getApiUrl(category)

  try {
    const response = await axios.get(`${API_URL}/lookup.php?i=${id}`)
    return response.data[category][0]
  } catch (error) {
    console.error(error)
  }
}

const searchByName = async (name, category) => {
  const API_URL = getApiUrl(category)

  console.log('searchByName API_URL', API_URL)
  console.log('searchByName category', category)

  try {
    const response = await axios.get(`${API_URL}/search.php?s=${name}`)
    return response.data[category] || []
  } catch (error) {
    console.error(error)
  }
}

const searchByIngredient = async (ingredient, category) => {
  const API_URL = getApiUrl(category)

  try {
    const response = await axios.get(`${API_URL}/filter.php?i=${ingredient}`)
    return response.data[category] || []
  } catch (error) {
    console.error(error)
  }
}

export const apiService = {
  getRandom,
  getById,
  searchByName,
  searchByIngredient
}
