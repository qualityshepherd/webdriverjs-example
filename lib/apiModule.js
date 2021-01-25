import fetch from 'node-fetch'

const baseUrl = 'https://cat-fact.herokuapp.com'

const api = {
  /**
   * make a get api request
   * @param  {string} url - relative url to api
   * @return {json} - the response
   */
  async get (url) {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'get'
    })
      .catch(error => this.handleError(error))
    return response
  },

  /**
   * handle caught errors
   * @param  {json} error - a caught error response
   * @return {json}
   */
  handleError (error) {
    // .response is for 4xx/5xx errors... return them so we can test for them
    if (error.ok) {
      return error
    } else {
      // something weird happened :\
      throw this.SomethingWentWrong(error.statusText)
    }
  },

  SomethingWentWrong (err) {
    console.log(err)
  }
}
export default api
