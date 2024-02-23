import { Alert } from "react-native";
import { useState } from "react";

import type { RouteParams } from "@routes/useRoutes";
import { useRoutes } from "@routes/useRoutes";

import type { PlayerStorageDTO, PlayerTeam } from "@storage/players";
import { addPlayerByGroup } from "@storage/players";
import { AppError } from "@utils/AppError";
import { generateRandomId } from "@utils/generateRandomId";

interface Props {
  setPlayers: React.Dispatch<React.SetStateAction<PlayerStorageDTO[]>>;
  selectedTeam: PlayerTeam;
}

export const useNewPlayer = ({ selectedTeam, setPlayers }: Props) => {
  const { route } = useRoutes();
  const { groupName } = route.params as RouteParams;

  const [newPlayerName, setNewPlayerName] = useState<string>("");

  const handleAddNewPlayerToTeam = async () => {
    const trimmedPlayerName = newPlayerName.trim();

    try {
      if (!trimmedPlayerName)
        throw new AppError("O nome do jogador é obrigatório.");

      const newPlayer: PlayerStorageDTO = {
        createdAt: Date.now(),
        team: selectedTeam,
        name: trimmedPlayerName,
        id: generateRandomId(),
      };

      await addPlayerByGroup(newPlayer, groupName);

      setPlayers((oldPlayers) => [...oldPlayers, newPlayer]);
      setNewPlayerName("");
    } catch (error) {
      const isAppError = error instanceof AppError;

      if (isAppError) return Alert.alert("Nova Pessoa", error.message);

      console.error(error);
      Alert.alert(
        "Nova Pessoa",
        "Não foi possível adicionar uma pessoa a esse time desse grupo."
      );
    }
  };

  return { newPlayerName, setNewPlayerName, handleAddNewPlayerToTeam };
};
