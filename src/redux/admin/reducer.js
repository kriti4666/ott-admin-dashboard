import adminActionTypes from "./actionType";

const initialState = {
    loading: false,
    error: null,
    isLogin: false,
    token: null,
    languageData: [],
    result: "",
    genreData: [],
    artistData: [],
    technicianData: [],
    movieData: [],
    data: [],
    getByIdData: {},

}

export const getLanguageReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case adminActionTypes.LANGUAGE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case adminActionTypes.LANGUAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                languageData: payload,
                error: null,
            }
        case adminActionTypes.LANGUAGE_FAILURE:
            return {
                ...state,
                loading: false,
                languageData: [],
                error: payload
            }
        default: return state;
    }
}

export const getLanguageByIDReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_LANGUAGE_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "ADD_LANGUAGE_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "ADD_LANGUAGE_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}
export const addLanguagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_LANGUAGE_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "ADD_LANGUAGE_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "ADD_LANGUAGE_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}
export const updateLanguagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case adminActionTypes.UPDATE_LANGUAGE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case adminActionTypes.UPDATE_LANGUAGE_SUCCESS:
            console.log(payload, "data")
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case adminActionTypes.UPDATE_LANGUAGE_FAILURE:
            return {
                ...state,
                loading: false,
                result: {},
                error: payload
            }
        default: return state;
    }
}
export const deleteLanguagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case adminActionTypes.DELETE_LANGUAGE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case adminActionTypes.DELETE_LANGUAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case adminActionTypes.DELETE_LANGUAGE_FAILURE:
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}


// Genre Module Reducer


export const getGenreListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "GENRE_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "GENRE_SUCCESS":
            return {
                ...state,
                loading: false,
                genreData: payload,
                error: null,
            }
        case "GENRE_FAILURE":
            return {
                ...state,
                loading: false,
                genreData: [],
                error: payload
            }
        default: return state;
    }
}

export const addGenreReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_GENRE_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "ADD_GENRE_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "ADD_GENRE_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}

export const updateGenreReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "UPDATE_GENRE_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "UPDATE_GENRE_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case 'UPDATE_GENRE_FAILURE':
            return {
                ...state,
                loading: false,
                result: {},
                error: payload
            }
        default: return state;
    }
}

export const deleteGenreReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DELETE_GENRE_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'DELETE_GENRE_SUCCESS':
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case 'DELETE_GENRE_FAILURE':
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }


}


// Artist Module reducer

export const getArtistListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ARTIST_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "ARTIST_SUCCESS":
            return {
                ...state,
                loading: false,
                artistData: payload,
                error: null,
            }
        case "ARTIST_FAILURE":
            return {
                ...state,
                loading: false,
                artistData: [],
                error: payload
            }
        default: return state;
    }
}

export const getArtistByIDReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ARTIST_BY_ID_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "ARTIST_BY_ID_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "ARTIST_BY_ID_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}
export const addArtistReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case adminActionTypes.ADD_ARTIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case adminActionTypes.ADD_ARTIST_SUCCESS:
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case adminActionTypes.ADD_ARTIST_FAILURE:
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}

export const updateArtistReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "UPDATE_ARTIST_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "UPDATE_ARTIST_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "UPDATE_ARTIST_FAILURE":
            return {
                ...state,
                loading: false,
                result: {},
                error: payload
            }
        default: return state;
    }
}
export const deleteArtistReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "DELETE_ARTIST_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "DELETE_ARTIST_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case  "DELETE_ARTIST_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}



export const TechnicianListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "TECHNICIAN_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "TECHNICIAN_SUCCESS":
            return {
                ...state,
                loading: false,
                technicianData: payload,
                error: null,
            }
        case "TECHNICIAN_FAILURE":
            return {
                ...state,
                loading: false,
                technicianData: [],
                error: payload
            }
        default: return state;
    }
}

export const getTechnicianByIDReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'TECHNICIAN_BY_ID_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "TECHNICIAN_BY_ID_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "TECHNICIAN_BY_ID_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}
export const addTechnicianReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case adminActionTypes.ADD_TECHNICIAN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case adminActionTypes.ADD_TECHNICIAN_SUCCESS:
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case adminActionTypes.ADD_TECHNICIAN_FAILURE:
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}

export const updateTechinicianReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "UPDATE_TECHNICIAN_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "UPDATE_TECHNICIAN_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "UPDATE_TECHNICIAN_FAILURE":
            return {
                ...state,
                loading: false,
                result: {},
                error: payload
            }
        default: return state;
    }
}
export const deleteTechnicianReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "DELETE_TECHNICIAN_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "DELETE_TECHNICIAN_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case  "DELETE_TECHNICIAN_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}

export const movieListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "MOVIE_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "MOVIE_SUCCESS":
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case "MOVIE_FAILURE":
            return {
                ...state,
                loading: false,
                data: [],
                error: payload
            }
        default: return state;
    }
}


export const addMovieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_MOVIE_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "ADD_MOVIE_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "ADD_MOVIE_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}

export const updateMovieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "UPDATE_MOVIE_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "UPDATE_MOVIE_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "UPDATE_MOVIE_FAILURE":
            return {
                ...state,
                loading: false,
                result: {},
                error: payload
            }
        default: return state;
    }
}
export const deleteMovieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "DELETE_MOVIE_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "DELETE_MOVIE_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case  "DELETE_MOVIE_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}
export const showListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SHOWS_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "SHOWS_SUCCESS":
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case "SHOWS_FAILURE":
            return {
                ...state,
                loading: false,
                data: [],
                error: payload
            }
        default: return state;
    }
}


export const addShowReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_SHOWS_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "ADD_SHOWS_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "ADD_SHOWS_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}

export const updateShowReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "UPDATE_SHOWS_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "UPDATE_SHOWS_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "UPDATE_SHOWS_FAILURE":
            return {
                ...state,
                loading: false,
                result: {},
                error: payload
            }
        default: return state;
    }
}
export const deleteShowReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "DELETE_SHOWS_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "DELETE_SHOWS_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case  "DELETE_SHOWS_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}
export const sessionListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SESSION_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "SESSION_SUCCESS":
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case "SESSION_FAILURE":
            return {
                ...state,
                loading: false,
                data: [],
                error: payload
            }
        default: return state;
    }
}


export const addSessionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_SESSION_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "ADD_SESSION_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "ADD_SESSION_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}

export const updateSessionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "UPDATE_SESSION_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "UPDATE_SESSION_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "UPDATE_SESSION_FAILURE":
            return {
                ...state,
                loading: false,
                result: {},
                error: payload
            }
        default: return state;
    }
}
export const deleteSessionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "DELETE_SESSION_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "DELETE_SESSION_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case  "DELETE_SESSION_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}
export const episodeListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "EPISODES_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "EPISODES_SUCCESS":
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case "EPISODES_FAILURE":
            return {
                ...state,
                loading: false,
                data: [],
                error: payload
            }
        default: return state;
    }
}


export const addEpisodeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_EPISODES_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "ADD_EPISODES_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "ADD_EPISODES_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}

export const updateEpisodeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "UPDATE_EPISODES_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "UPDATE_EPISODES_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "UPDATE_EPISODES_FAILURE":
            return {
                ...state,
                loading: false,
                result: {},
                error: payload
            }
        default: return state;
    }
}
export const deleteEpisodeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "DELETE_EPISODES_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "DELETE_EPISODES_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case  "DELETE_EPISODES_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}
export const sliderListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SLIDER_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "SLIDER_SUCCESS":
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case "SLIDER_FAILURE":
            return {
                ...state,
                loading: false,
                data: [],
                error: payload
            }
        default: return state;
    }
}


export const addSliderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_SLIDER_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "ADD_SLIDER_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "ADD_SLIDER_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}

export const updateSliderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "UPDATE_SLIDER_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "UPDATE_SLIDER_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "UPDATE_SLIDER_FAILURE":
            return {
                ...state,
                loading: false,
                result: {},
                error: payload
            }
        default: return state;
    }
}
export const deleteSliderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "DELETE_SLIDER_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "DELETE_SLIDER_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case  "DELETE_SLIDER_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}
export const homeSectionListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "HOME_SECTION_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "HOME_SECTION_SUCCESS":
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case "HOME_SECTION_FAILURE":
            return {
                ...state,
                loading: false,
                data: [],
                error: payload
            }
        default: return state;
    }
}


export const addHomeSectionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_HOME_SECTION_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "ADD_HOME_SECTION_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "ADD_HOME_SECTION_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}

export const updateHomeSectionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "UPDATE_HOME_SECTION_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "UPDATE_HOME_SECTION_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case "UPDATE_HOME_SECTION_FAILURE":
            return {
                ...state,
                loading: false,
                result: {},
                error: payload
            }
        default: return state;
    }
}
export const deleteHomeSectionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "DELETE_HOME_SECTION_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "DELETE_HOME_SECTION_SUCCESS":
            return {
                ...state,
                loading: false,
                result: payload,
                error: null,
            }
        case  "DELETE_HOME_SECTION_FAILURE":
            return {
                ...state,
                loading: false,
                result: "",
                error: payload
            }
        default: return state;
    }
}