import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageHelper {
  async setItem(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting AsyncStorage item:', error);
    }
  }

  async getItem(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error getting AsyncStorage item:', error);
      return null;
    }
  }
}

export default new AsyncStorageHelper();
