import { useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";

import type { PlayerStorageDTO, PlayerTeam } from "@storage/players";
import type { RouteParams } from "@routes/useRoutes";
import { getAllPlayersByGroup, removePlayerFromGroup } from "@storage/players";
import { useRoutes } from "@routes/useRoutes";

const fetchPlayersByGroup = async (
  groupName: string,
  setPlayers: React.Dispatch<React.SetStateAction<PlayerStorageDTO[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);

  try {
    const players = await getAllPlayersByGroup(groupName);
    setPlayers(players);
  } catch (error) {
    console.error(error);
    Alert.alert("Pessoas", "Não foi possível carregar as pessoas dessa turma.");
  }

  setIsLoading(false);
};

interface Props {
  selectedTeam: PlayerTeam;
}

export const usePlayers = ({ selectedTeam }: Props) => {
  const { route } = useRoutes();
  const { groupName } = route.params as RouteParams;

  const [isLoading, setIsLoading] = useState(true);
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  useEffect(() => {
    fetchPlayersByGroup(groupName, setPlayers, setIsLoading);
  }, [groupName]);

  const currentTeamPlayers = useMemo(() => {
    const filteredPlayers = players.filter(
      (player) => player.team === selectedTeam
    );
    return filteredPlayers.sort((a, b) => a.name.localeCompare(b.name));
  }, [players, selectedTeam]);

  const handleRemovePlayerFromGroup = async (playerId: string) => {
    try {
      await removePlayerFromGroup(playerId, groupName);
      setPlayers((oldPlayers) =>
        oldPlayers.filter((player) => player.id !== playerId)
      );
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Remover Pessoa",
        "Não foi possível remover essa pessoa dessa turma."
      );
    }
  };

  return {
    players: currentTeamPlayers,
    handleRemovePlayerFromGroup,
    setPlayers,
    isLoading,
  };
};
