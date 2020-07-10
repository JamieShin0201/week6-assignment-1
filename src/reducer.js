import { equal } from './utils';

const initialState = {
  restaurant: {},
  regions: [],
  categories: [],
  restaurants: [],
  selectedRegion: null,
  selectedCategory: null,
  selectedRestaurantId: null,
};

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },

  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },

  selectRegion(state, { payload: { regionId } }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find(equal('id', regionId)),
    };
  },

  selectCategory(state, { payload: { categoryId } }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equal('id', categoryId)),
    };
  },

  selectRestaurant(state, { payload: { restaurantId } }) {
    return {
      ...state,
      selectedRestaurantId: restaurantId,
    };
  },

  setRestaurant(state, { payload: { restaurant } }) {
    return {
      ...state,
      restaurant,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
