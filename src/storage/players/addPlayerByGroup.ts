import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

import type { PlayerStorageDTO } from "./PlayerStorageDTO";
import { getAllPlayersByGroup } from "./getAllPlayersByGroup";

export const addPlayerByGroup = async (
  newPlayer: PlayerStorageDTO,
  groupName: string
) => {
  const storageKey = `${PLAYER_COLLECTION}-${groupName}`;

  const players = await getAllPlayersByGroup(groupName);

  const playerAlreadyExistsOnGroup = players.find(
    (player) => player.name === newPlayer.name
  );

  if (playerAlreadyExistsOnGroup)
    throw new AppError("Essa pessoa já está adicionada a um time desse grupo.");

  const newPlayersJSON = JSON.stringify([...players, newPlayer]);

  await AsyncStorage.setItem(storageKey, newPlayersJSON);
};
