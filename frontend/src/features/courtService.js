import axios from 'axios'

const API_URL = '/api/courts/'

const getCourts = async () => {
  const response = await axios.get(API_URL)
  console.log(response)

  return response.data
}

const courtService = {
  getCourts,
}

export default courtService
