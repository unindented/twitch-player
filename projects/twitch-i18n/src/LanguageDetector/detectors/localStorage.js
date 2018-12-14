export default {
  lookup: ({ lookupLocalStorage }) =>
    window.localStorage.getItem(lookupLocalStorage),

  cacheUserLanguage: (lng, { lookupLocalStorage }) => {
    window.localStorage.setItem(lookupLocalStorage, lng);
  },
};
