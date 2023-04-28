import { isString } from '@abw/badger-utils'
import axios from 'axios'
import https from 'https'

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
})
axios.defaults.httpsAgent = httpsAgent

const axiosResponseToJSON = error => {

  const response = error.response
  if (! response) {
    return { message: error.message, client: 'axios' }
  }
  return isString(response.data)
    ? { message: response.data, client: 'axios' }
    : { ...response.data, client: 'axios' }
}

const fetchResponseToJSON = async response => {
  // console.log('fetch response: ', response)
  console.log('fetch headers: ', response.headers.get('content-type'))
  console.log('fetch BODY: ', await response.text())
  // response.json().then( json => console.log("GOT JSON: ", json) )
  // response.json().then( json => console.log("GOT JSON: ", json) )
  return { message: 'TODO' }
  // return await response.json()
  //  ? { message: response.data }
  //  : response.data
}

axios.get('https://api.local.coghub.net:2001/error/403-text')
  .then( response => console.log('403 error text: ', response.data ) )
  .catch( error => console.log('403 error text: ', axiosResponseToJSON(error) ) )

axios.get('https://api.local.coghub.net:2001/error/403-json')
  .then( response => console.log('403 error json: ', response ) )
  .catch( error => console.log('403 error json: ', axiosResponseToJSON(error) ) )

fetch('https://api.local.coghub.net:2001/error/403-text', { agent: httpsAgent })
  .then( async response => console.log('403 error text: ', fetchResponseToJSON(response) ) )
  .catch( async error => console.log('403 error text: ', await fetchResponseToJSON(error) ) )

fetch('https://api.local.coghub.net:2001/error/403-json', { agent: httpsAgent })
  .then( async response => console.log('403 error json: ', fetchResponseToJSON(response) ) )
  .catch( async error => console.log('403 error json: ', await fetchResponseToJSON(error) ) )
