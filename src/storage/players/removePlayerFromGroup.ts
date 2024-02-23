import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { getAllPlayersByGroup } from "./getAllPlayersByGroup";

export const removePlayerFromGroup = async (
  playerId: string,
  groupName: string
) => {
  const storageKey = `${PLAYER_COLLECTION}-${groupName}`;

  const players = await getAllPlayersByGroup(groupName);

  const filteredPlayers = players.filter((player) => player.id !== playerId);

  await AsyncStorage.setItem(storageKey, JSON.stringify(filteredPlayers));
};
