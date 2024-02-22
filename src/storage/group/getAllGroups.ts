import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";
import { Group } from "src/@types/Group";

export const getAllGroups = async (): Promise<Group[]> => {
  const data = await AsyncStorage.getItem(GROUP_COLLECTION);

  if (!data) return [];

  return JSON.parse(data) as Group[];
};
