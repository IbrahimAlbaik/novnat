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
    pageData: {
      sliders: [],
      features: [],
      technologies: [],
      galleries: [],
      faqs: [],
      teams: [],
      stories: [],
      goals: [],
      partners: []
    },
    error: null,
    loading: true,
    dataFetched: false
  }),

  getters: {
    getPageData: (state) => state.pageData,
    getError: (state) => state.error,
    isLoading: (state) => state.loading,
    isDataFetched: (state) => state.dataFetched
  },

  actions: {
    async fetchPageData({ commit, state }, axios) {
      if (state.dataFetched) {
        return state.pageData;
      }

      try {
        commit('setLoading', true);
        const response = await axios.get('/landingPage');
        if (response?.data?.data) {
          commit('setPageData', response.data.data);
          commit('setDataFetched', true);
        }
        return response?.data?.data;
      } catch (error) {
        console.error('Error fetching page data:', error);
        commit('setError', error.response ? error.response.data : 'API call failed');
        throw error;
      } finally {
        commit('setLoading', false);
      }
    }
  },

  mutations: {
    setPageData(state, data) {
      state.pageData = data;
    },
    setError(state, error) {
      state.error = error;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setDataFetched(state, fetched) {
      state.dataFetched = fetched;
    }
  }
});

export default store;
