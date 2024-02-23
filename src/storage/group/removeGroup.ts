import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { getAllGroups } from "./getAllGroups";

export const removeGroup = async (groupName: string) => {
  const playerStorageKey = `${PLAYER_COLLECTION}-${groupName}`;

  const groups = await getAllGroups();

  const filteredGroups = groups.filter((group) => group.name !== groupName);

  await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroups));

  await AsyncStorage.removeItem(playerStorageKey);
};
