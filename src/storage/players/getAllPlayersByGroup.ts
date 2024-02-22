import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export const getAllPlayersByGroup = async (
  groupName: string
): Promise<PlayerStorageDTO[]> => {
  const storageKey = `${PLAYER_COLLECTION}-${groupName}`;

  const data = await AsyncStorage.getItem(storageKey);

  if (!data) return [];

  return JSON.parse(data) as PlayerStorageDTO[];
};
