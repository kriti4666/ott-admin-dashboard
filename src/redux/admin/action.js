import axios from "axios";
import adminActionTypes from "./actionType";
// const url = process.env.REACT_APP_URL_DEV;
// axios.defaults.baseURL = url;


// Language Module Action
export const getLanguages = () => async (dispatch) => {
    dispatch({ type: adminActionTypes.LANGUAGE_REQUEST })
    try {
        const { data } = await axios.get("https://myscreenauth.annamrajus.com/api/Language");
        if (data.length > 0) {
            dispatch({ type: adminActionTypes.LANGUAGE_SUCCESS, payload: data })
        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.LANGUAGE_FAILURE, payload: error });
    }

}

export const AddLanguage = (langData) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    dispatch({ type: adminActionTypes.ADD_LANGUAGE_REQUEST })
    try {
        const response = await axios.post("https://myscreenauth.annamrajus.com/api/Language", langData);
        if (response.data.success) {
            dispatch({ type: adminActionTypes.ADD_LANGUAGE_SUCCESS, payload: response.data.message })
        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.ADD_LANGUAGE_FAILURE, payload: error });
    }

}

export const getLanguageByID = (id) => async (dispatch) => {
    dispatch({ type: adminActionTypes.LANGUAGE_BY_ID_REQUEST })
    try {
        const response = await axios.get(`https://myscreenauth.annamrajus.com/api/Language/${id}`);
        if (response.errors) {
            dispatch({ type: adminActionTypes.LANGUAGE_BY_ID_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.LANGUAGE_BY_ID_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.LANGUAGE_BY_ID_FAILURE, payload: error });
    }

}

// pass data
export const EditLanguage = (id, data) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    dispatch({ type: adminActionTypes.UPDATE_LANGUAGE_REQUEST })
    try {
        const response = await axios.put(`https://myscreenauth.annamrajus.com/api/Language/${id}`, data);
        if (response.errors) {
            dispatch({ type: adminActionTypes.UPDATE_LANGUAGE_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.UPDATE_LANGUAGE_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.UPDATE_LANGUAGE_FAILURE, payload: error });
    }

}

// pass id
export const deleteLanguage = (id) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };

    // console.log("idac:", id)
    dispatch({ type: adminActionTypes.DELETE_LANGUAGE_REQUEST })
    try {
        const response = await axios.delete(`https://myscreenauth.annamrajus.com/api/Language/${id}`);
        console.log("res: ", response)

        if (response.errors) {
            dispatch({ type: adminActionTypes.DELETE_LANGUAGE_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.DELETE_LANGUAGE_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.DELETE_LANGUAGE_FAILURE, payload: error });
    }

}


//  Genre Module Action

export const getGenreList = () => async (dispatch) => {
    dispatch({ type: adminActionTypes.GENRE_REQUEST })
    try {
        const { data } = await axios.get("https://myscreenauth.annamrajus.com/api/Genre");
        if (data.length > 0) {
            dispatch({ type: adminActionTypes.GENRE_SUCCESS, payload: data })
        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.GENRE_FAILURE, payload: error });
    }

}


export const AddGenreData = (genreFormData) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    dispatch({ type: adminActionTypes.ADD_GENRE_REQUEST })
    try {
        const response = await axios.post("https://myscreenauth.annamrajus.com/api/Genre", genreFormData);
        if (response.data.success) {
            dispatch({ type: adminActionTypes.ADD_GENRE_SUCCESS, payload: response.data.message })
        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.ADD_GENRE_FAILURE, payload: error });
    }

}

export const EditGenre = (id, data) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    console.log(id, "id", data, "data")
    dispatch({ type: adminActionTypes.UPDATE_GENRE_REQUEST })
    try {
        const response = await axios.put(`https://myscreenauth.annamrajus.com/api/Genre/${id}`, data);
        console.log(response, "res")
        if (response.errors) {
            dispatch({ type: adminActionTypes.UPDATE_GENRE_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.UPDATE_GENRE_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.UPDATE_GENRE_FAILURE, payload: error });
    }

}

// pass id
export const deleteGenre = (id) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    dispatch({ type: adminActionTypes.DELETE_GENRE_REQUEST })
    try {
        const response = await axios.delete(`https://myscreenauth.annamrajus.com/api/Genre/${id}`);
        if (response.errors) {
            dispatch({ type: adminActionTypes.DELETE_GENRE_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.DELETE_GENRE_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.DELETE_GENRE_FAILURE, payload: error });
    }

}


//  Artist Module Action

export const getArtistList = () => async (dispatch) => {
    dispatch({ type: adminActionTypes.ARTIST_REQUEST })
    try {
        const { data } = await axios.get("https://myscreenauth.annamrajus.com/api/Artist");
        if (data.length > 0) {
            dispatch({ type: adminActionTypes.ARTIST_SUCCESS, payload: data })
        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.ARTIST_FAILURE, payload: error });
    }

}

export const AddArtistData = (artistFormData) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    dispatch({ type: adminActionTypes.ADD_ARTIST_REQUEST })
    try {
        const response = await axios.post("https://myscreenauth.annamrajus.com/api/Artist", artistFormData);
        if (response.data.success) {
            dispatch({ type: adminActionTypes.ADD_ARTIST_SUCCESS, payload: response.data.message })
        } else {
            dispatch({ type: adminActionTypes.ADD_ARTIST_FAILURE, payload: response.errors });
        }
        console.log(response.data.message)

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.ADD_ARTIST_FAILURE, payload: error });
    }

}

export const EditArtist = (id, data) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    console.log(id, "id", data, "data")
    dispatch({ type: adminActionTypes.UPDATE_ARTIST_REQUEST })
    try {
        const response = await axios.put(`https://myscreenauth.annamrajus.com/api/Artist/${id}`, data);
        // console.log(response, "res")
        if (response.errors) {
            dispatch({ type: adminActionTypes.UPDATE_ARTIST_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.UPDATE_ARTIST_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.UPDATE_ARTIST_FAILURE, payload: error });
    }

}


export const deleteArtist = (id) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    dispatch({ type: adminActionTypes.DELETE_ARTIST_REQUEST })
    try {
        const response = await axios.delete(`https://myscreenauth.annamrajus.com/api/Artist/${id}`);
        if (response.errors) {
            dispatch({ type: adminActionTypes.DELETE_ARTIST_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.DELETE_ARTIST_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.DELETE_ARTIST_FAILURE, payload: error });
    }

}

// Technician
export const getTechnicianList = () => async (dispatch) => {
    dispatch({ type: adminActionTypes.TECHNICIAN_REQUEST })
    try {
        const { data } = await axios.get("https://myscreenauth.annamrajus.com/api/Technician");
        if (data.length > 0) {
            dispatch({ type: adminActionTypes.TECHNICIAN_SUCCESS, payload: data })
        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.TECHNICIAN_FAILURE, payload: error });
    }

}

export const AddTechnicianData = (artistFormData) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    dispatch({ type: adminActionTypes.ADD_TECHNICIAN_REQUEST })
    try {
        const response = await axios.post("https://myscreenauth.annamrajus.com/api/Technician", artistFormData);
        if (response.data.success) {
            dispatch({ type: adminActionTypes.ADD_TECHNICIAN_SUCCESS, payload: response.data.message })
        } else {
            dispatch({ type: adminActionTypes.ADD_TECHNICIAN_FAILURE, payload: response.errors });
        }
        console.log(response.data.message)

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.ADD_TECHNICIAN_FAILURE, payload: error });
    }

}

export const EditTechnician = (id, data) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    console.log(id, "id", data, "data")
    dispatch({ type: adminActionTypes.UPDATE_TECHNICIAN_REQUEST })
    try {
        const response = await axios.put(`https://myscreenauth.annamrajus.com/api/Technician/${id}`, data);
        if (response.errors) {
            dispatch({ type: adminActionTypes.UPDATE_TECHNICIAN_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.UPDATE_TECHNICIAN_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.UPDATE_TECHNICIAN_FAILURE, payload: error });
    }

}


export const deleteTechnician = (id) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    dispatch({ type: adminActionTypes.DELETE_TECHNICIAN_REQUEST })
    try {
        const response = await axios.delete(`https://myscreenauth.annamrajus.com/api/Technician/${id}`);
        if (response.errors) {
            dispatch({ type: adminActionTypes.DELETE_TECHNICIAN_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.DELETE_TECHNICIAN_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.DELETE_TECHNICIAN_FAILURE, payload: error });
    }

}

//  Movies Module Action

export const getMoviesList = () => async (dispatch) => {
    dispatch({ type: adminActionTypes.ARTIST_REQUEST })
    try {
        const { data } = await axios.get("https://myscreenauth.annamrajus.com/api/Movie");
        if (data.length > 0) {
            dispatch({ type: adminActionTypes.MOVIE_SUCCESS, payload: data })
        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.MOVIE_FAILURE, payload: error });
    }

}

export const AddMovieData = (MovieFormData) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    // console.log(MovieFormData, "actionmov")
    try {
        dispatch({ type: adminActionTypes.ADD_MOVIE_REQUEST })
        const response = await axios.post("https://myscreenauth.annamrajus.com/api/Movie", MovieFormData);
        if (response.data.success) {
            dispatch({ type: adminActionTypes.ADD_MOVIE_SUCCESS, payload: response.data.message })
        } else {
            dispatch({ type: adminActionTypes.ADD_MOVIE_FAILURE, payload: response });
        }
        console.log(response.data, "res")

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.ADD_MOVIE_FAILURE, payload: error });
    }

}

export const UpdateMovie = (id, data) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    // console.log("Kriti", id,"id", data, "data")
    dispatch({ type: adminActionTypes.UPDATE_MOVIE_REQUEST })
    try {
        const response = await axios.put(`https://myscreenauth.annamrajus.com/api/Movie/${id}`, data);
        console.log(response, "res")
        if (response.data.success) {
            dispatch({ type: adminActionTypes.UPDATE_MOVIE_SUCCESS, payload: response.data.message })

        } else {
            dispatch({ type: adminActionTypes.UPDATE_MOVIE_FAILURE, payload: response });
        }
        

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.UPDATE_MOVIE_FAILURE, payload: error });
    }

}


export const deleteMovie = (id) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    dispatch({ type: adminActionTypes.DELETE_MOVIE_REQUEST })
    try {
        const response = await axios.delete(`https://myscreenauth.annamrajus.com/api/Movie/${id}`);
        if (response.errors) {
            dispatch({ type: adminActionTypes.DELETE_MOVIE_FAILURE, payload: response });
        } else {
            dispatch({ type: adminActionTypes.DELETE_MOVIE_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.DELETE_MOVIE_FAILURE, payload: error });
    }

}


//  Shows Module Action

export const getShowsList = () => async (dispatch) => {
    dispatch({ type: adminActionTypes.SHOWS_REQUEST })
    try {
        const { data } = await axios.get("https://myscreenauth.annamrajus.com/api/Show");
        if (data.length > 0) {
            dispatch({ type: adminActionTypes.SHOWS_SUCCESS, payload: data })
        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.SHOWS_FAILURE, payload: error });
    }

}

export const AddShowData = (showFormData) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    dispatch({ type: adminActionTypes.ADD_SHOWS_REQUEST })
    try {
        const response = await axios.post("https://myscreenauth.annamrajus.com/api/Show", showFormData);
        if (response.data.success) {
            dispatch({ type: adminActionTypes.ADD_SHOWS_SUCCESS, payload: response.data.message })
        } else {
            dispatch({ type: adminActionTypes.ADD_SESSION_FAILURE, payload: response.errors });
        }
        console.log(response.data.message)

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.ADD_SESSION_FAILURE, payload: error });
    }

}

export const UpdateShowAction = (id, data) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    try {
        dispatch({ type: adminActionTypes.UPDATE_SHOWS_REQUEST })
        const response = await axios.put(`https://myscreenauth.annamrajus.com/api/Show/${id}`, data);
        // console.log(response, "res")
        if (response.errors) {
            dispatch({ type: adminActionTypes.UPDATE_SHOWS_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.UPDATE_SHOWS_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.UPDATE_SHOWS_FAILURE, payload: error })
    }
}

export const deleteShowAction = (id) => async (dispatch) => {
    // const token = localStorage.getItem("token")
    // const headers = { Authorization: `Bearer ${token}` };
    dispatch({ type: adminActionTypes.DELETE_SHOWS_REQUEST })
    try {
        const response = await axios.delete(`https://myscreenauth.annamrajus.com/api/show/${id}`);
        if (response.errors) {
            dispatch({ type: adminActionTypes.DELETE_SHOWS_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.DELETE_SHOWS_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.DELETE_SESSION_FAILURE, payload: error });
    }

}

//  Season Module Action

export const getSessionList = () => async (dispatch) => {
    dispatch({ type: adminActionTypes.SESSION_REQUEST })
    try {
        const { data } = await axios.get("https://myscreenauth.annamrajus.com/api/Season");
        if (data.length > 0) {
            dispatch({ type: adminActionTypes.SESSION_SUCCESS, payload: data })
        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.SESSION_FAILURE, payload: error });
    }

}

export const AddSessionData = (SessionFormData) => async(dispatch)=> {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    try {
        dispatch({ type: adminActionTypes.ADD_SESSION_REQUEST })
        const response = await axios.post("https://myscreenauth.annamrajus.com/api/Season", SessionFormData);
        if (response.data.success) {
            dispatch({ type: adminActionTypes.ADD_SESSION_SUCCESS, payload: response.data.message })
        } else {
            dispatch({ type: adminActionTypes.ADD_SESSION_FAILURE, payload: response.errors });
        }
        console.log(response.data.message)

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.ADD_SESSION_FAILURE, payload: error });
    }

}

export const UpdateSeasonRequest = (id, data) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    try {
        dispatch({ type: adminActionTypes.UPDATE_SESSION_REQUEST })
        const response = await axios.put(`https://myscreenauth.annamrajus.com/api/Season/${id}`, data);
        // console.log(response, "res")
        if (response.errors) {
            dispatch({ type: adminActionTypes.UPDATE_SESSION_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.UPDATE_SESSION_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.UPDATE_SESSION_FAILURE, payload: error })
    }
}

export const deleteSeasonRequest = (id) => async (dispatch) => {
    // const token = localStorage.getItem("token")
    // const headers = { Authorization: `Bearer ${token}` };
    try {
        dispatch({ type: adminActionTypes.DELETE_SESSION_REQUEST })
        const response = await axios.delete(`https://myscreenauth.annamrajus.com/api/Season/${id}`);
        if (response.errors) {
            dispatch({ type: adminActionTypes.DELETE_SESSION_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.DELETE_SESSION_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.DELETE_SESSION_FAILURE, payload: error });
    }

}

//  Episode Module Action

export const getEpisodeList = () => async (dispatch) => {
    try {
        dispatch({ type: adminActionTypes.EPISODES_REQUEST })
        const { data } = await axios.get("https://myscreenauth.annamrajus.com/api/Episode");
        if (data.length > 0) {
            dispatch({ type: adminActionTypes.EPISODES_SUCCESS, payload: data })
        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.EPISODES_FAILURE, payload: error });
    }

}

export const AddEpisodeData = (episodeFormData) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    try {
        dispatch({ type: adminActionTypes.ADD_EPISODES_REQUEST })
        const response = await axios.post("https://myscreenauth.annamrajus.com/api/Episode", episodeFormData);
        if (response.data.success) {
            dispatch({ type: adminActionTypes.ADD_EPISODES_SUCCESS, payload: response.data.message })
        } else {
            dispatch({ type: adminActionTypes.ADD_EPISODES_FAILURE, payload: response.errors });
        }
        console.log(response.data.message)

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.ADD_EPISODES_FAILURE, payload: error });
    }

}

export const UpdateEpisodeRequest = (id, data) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    try {
        dispatch({ type: adminActionTypes.UPDATE_EPISODES_REQUEST })
        const response = await axios.put(`https://myscreenauth.annamrajus.com/api/Episode/${id}`, data);
        // console.log(response, "res")
        if (response.errors) {
            dispatch({ type: adminActionTypes.UPDATE_EPISODES_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.UPDATE_EPISODES_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.UPDATE_EPISODES_FAILURE, payload: error })
    }
}

export const deleteEpisodeRequest = (id) => async (dispatch) => {
    // const token = localStorage.getItem("token")
    // const headers = { Authorization: `Bearer ${token}` };
    try {
        dispatch({ type: adminActionTypes.DELETE_EPISODES_REQUEST })
        const response = await axios.delete(`https://myscreenauth.annamrajus.com/api/Episode/${id}`);
        if (response.errors) {
            dispatch({ type: adminActionTypes.DELETE_EPISODES_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.DELETE_EPISODES_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.DELETE_EPISODES_FAILURE, payload: error });
    }

}

//  HomeSlider Module Action

export const getSliderList = () => async (dispatch) => {
    try {
        dispatch({ type: adminActionTypes.SLIDER_REQUEST })
        const { data } = await axios.get("https://myscreenauth.annamrajus.com/api/HomeSlider");
        if (data.length > 0) {
            dispatch({ type: adminActionTypes.SLIDER_SUCCESS, payload: data })
        }else{
            dispatch({ type: adminActionTypes.SLIDER_FAILURE, payload: data });

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.SLIDER_FAILURE, payload: error });
    }

}

export const AddSliderData = (sliderFormData) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    try {
        dispatch({ type: adminActionTypes.ADD_SLIDER_REQUEST })
        const response = await axios.post("https://myscreenauth.annamrajus.com/api/HomeSlider", sliderFormData);
        if (response.data.success) {
            dispatch({ type: adminActionTypes.ADD_SLIDER_SUCCESS, payload: response.data.message })
        } else {
            dispatch({ type: adminActionTypes.ADD_SLIDER_FAILURE, payload: response.errors });
        }
        console.log(response.data.message)

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.ADD_SLIDER_FAILURE, payload: error });
    }

}

export const UpdateSliderRequest = (id, data) => async (dispatch) => {
    // const token = localStorage.getItem("token");
    // const headers = { Authorization: `Bearer ${token}` };
    try {
        dispatch({ type: adminActionTypes.UPDATE_SLIDER_REQUEST })
        const response = await axios.put(`https://myscreenauth.annamrajus.com/api/HomeSlider/${id}`, data);
        // console.log(response, "res")
        if (response.errors) {
            dispatch({ type: adminActionTypes.UPDATE_SLIDER_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.UPDATE_SLIDER_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.UPDATE_SLIDER_FAILURE, payload: error })
    }
}

export const deleteSliderRequest = (id) => async (dispatch) => {
    // const token = localStorage.getItem("token")
    // const headers = { Authorization: `Bearer ${token}` };
    try {
        dispatch({ type: adminActionTypes.DELETE_SLIDER_REQUEST })
        const response = await axios.delete(`https://myscreenauth.annamrajus.com/api/HomeSlider/${id}`);
        if (response.errors) {
            dispatch({ type: adminActionTypes.DELETE_SLIDER_FAILURE, payload: response.errors });
        } else {
            dispatch({ type: adminActionTypes.DELETE_SLIDER_SUCCESS, payload: response.data.message })

        }

    } catch (error) {
        console.log(`Error: ${error}`)
        dispatch({ type: adminActionTypes.DELETE_SLIDER_FAILURE, payload: error });
    }

}

