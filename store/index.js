export const state = () => ({
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
});

export const mutations = {
  changeSearchPopupStatus(state) {
    state.searchPopupStatus = !state.searchPopupStatus;
  }
};

export const actions = {
};

export const getters = {
};
