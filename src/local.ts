export const setLocalStorage = <T>(key: string, value: T | T[]) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = <T>(key: string, defaultValue: T | T[]): T => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
}