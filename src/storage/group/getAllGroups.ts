import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";

export const getAllGroups = async () => {
  const data = await AsyncStorage.getItem(GROUP_COLLECTION);

  if (!data) return [];

  return JSON.parse(data);
};
