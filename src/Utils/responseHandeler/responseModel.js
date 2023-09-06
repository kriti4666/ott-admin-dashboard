export const responseModel = (status, data)=>{
    return   {status, data}
}

export const axiosErrorHandler = (error)=>{
    if (error.response) {
        // Request made and server responded
        return{ status: error.response.status, data: error.response.data};
      } else if (error.request) {
        // The request was made but no response was received
        return{ status: 500, data: {message: "Expected error occurred."}};
      } else {
        // Something happened in setting up the request that triggered an Error
        return{ status: 500, data: {message: error.message}};
      }
}
