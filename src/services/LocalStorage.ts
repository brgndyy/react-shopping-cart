const LOCAL_STORAGE_KEY = 'checkedProductIds';

const LocalStorage = {
  getCheckedProductIds: (): number[] => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  setCheckedProductIds: (ids: number[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ids));
  },

  clearCheckedProductIds: (): void => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  },
};

export default LocalStorage;