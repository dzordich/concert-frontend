import AsyncStorage from "@react-native-async-storage/async-storage";

export const getItem = async (storageKey) => {
  try {
    const item = await AsyncStorage.getItem(storageKey);
    return item ? JSON.parse(item) : item;
  } catch (e) {
    console.error("Exception raised in localStorage.getItem:");
    console.error(e);
    return null;
  }
};

export const setItem = async (storageKey, value) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(value));
  } catch (e) {
    console.error("Exception raised in localStorage.getItem:");
    console.error(e);
  }
};
