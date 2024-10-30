import { createStore } from 'vuex';
const store = createStore({

  state: () => ({
    novnat: {
      id: 1,
      title: 'NovNat',
      logo: 'novnat-logo.png',
      address: 'Birmingham Research Park,<br /> Vincent Drive, <br /> Birmingham <br /> B15 2SQ<br /> United Kingdom',
      register: 'Company registered in England and Wales',
      phone: '+44 (0) 752 128 0697',
      location: '',
      email: 'info@novnat.co.uk',
      socialMediaLinks: [{ id: 1, icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/company/novnattech/' }],
    },
    searchPopupStatus: false,
    landingPageData: null,  // Holds the API response data
    error: null,            // Holds any error from the API call
    loading: false,         // Optional: Loading state for fetching data
  }),

  getters: {
    getLandingPageData: (state) => state.landingPageData,  // Get the API response data
    getLandingPageError: (state) => state.error,           // Get the API error
    isLoading: (state) => state.loading,                    // Get loading state
  },

  actions: {
    async fetchLandingPageData({ commit }, axios) {
      commit('setLoading', true); // Set loading to true
      try {
        const response = await axios.get('/landingPage'); // Use leading slash for proper endpoint
        commit('setLandingPageData', response.data); // Commit only the data
      } catch (error) {
        console.error('Error fetching landing page data:', error);
        commit('setError', error.response ? error.response.data : 'API call failed');
      } finally {
        commit('setLoading', false); // Set loading to false
      }
    },
  },
  mutations: {
    setLandingPageData(state, data) {
      state.landingPageData = data; // Update the state with API data
    },
    setError(state, error) {
      state.error = error;  // Update the state with error information
    },
    setLoading(state, loading) {
      state.loading = loading; // Update loading state
    },
  }
});

export default store;
