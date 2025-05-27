const FORM_KEY = 'multiStepFormData';

export const saveToStorage = (data: any) => {
  localStorage.setItem(FORM_KEY, JSON.stringify(data));
};

export const getFromStorage = (): any | null => {
  const data = localStorage.getItem(FORM_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearStorage = () => {
  localStorage.removeItem(FORM_KEY);
};
