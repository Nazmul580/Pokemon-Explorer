


export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING_TRUE':
            return { ...state, isLoading: true };

        case 'SET_DATA':
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                filterData: action.payload
            };

        case 'SET_ERROR':
            return { ...state, isLoading: false, error: action.payload };

        case 'FILTER_DATA_BY_SEARCH':
            const data = state.data;
            const inputValue = action.payload;
            const tempData = [...data];
            const filteredData = tempData.filter((pokemon) => {
                return pokemon.name.toLowerCase().includes(inputValue.toLowerCase());
            });
            return {
                ...state,
                filterData: filteredData,
            }

        case 'FILTER_DATA_BY_CATEGORY':
            const allData = state.data;
            const temp_Data = [...allData];
            const filteredDataByCategory = temp_Data.filter((pokemon) => {

                return pokemon.types.some((t) => t.type.name === action.payload);
            });
            if (action.payload === "All") { return { ...state, filterData: temp_Data, currentPage: 1 } }
            return {
                ...state,
                filterData: filteredDataByCategory,
            }

        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }

        case 'ADD_TO_FAVOURITE':
            const favouritePokemon = state.favouritePokemon;
            const isAlreadyFavourited = favouritePokemon.some((favourite) => favourite.id === action.payload.id);
            if (isAlreadyFavourited) {
                return state;
            }
            const updatedFavourite = [...favouritePokemon, action.payload];
            localStorage.setItem('favourite_pokemon', JSON.stringify(updatedFavourite));

            return {
                ...state,
                favouritePokemon: updatedFavourite
            }

        case 'REMOVE_FROM_FAVOURITE':
            const favourite_Pokemon = state.favouritePokemon;
            const updatedFavouriteAfterRemove = favourite_Pokemon.filter((pokemon) => pokemon.id !== action.payload.id);
            localStorage.setItem('favourite_pokemon', JSON.stringify(updatedFavouriteAfterRemove));

            return {
                ...state,
                favouritePokemon: updatedFavouriteAfterRemove
            }

        default:
            return state;
    }
}