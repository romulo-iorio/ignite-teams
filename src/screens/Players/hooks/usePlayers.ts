import { useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";

import type { PlayerStorageDTO, PlayerTeam } from "@storage/players";
import type { RouteParams } from "@routes/useRoutes";
import { getAllPlayersByGroup } from "@storage/players";
import { useRoutes } from "@routes/useRoutes";

const fetchPlayersByGroup = async (
  groupName: string,
  setPlayers: React.Dispatch<React.SetStateAction<PlayerStorageDTO[]>>
) => {
  try {
    const players = await getAllPlayersByGroup(groupName);
    setPlayers(players);
  } catch (error) {
    console.error(error);
    Alert.alert("Pessoas", "Não foi possível carregar as pessoas desse grupo.");
  }
};

interface Props {
  selectedTeam: PlayerTeam;
}

export const usePlayers = ({ selectedTeam }: Props) => {
  const { route } = useRoutes();
  const { groupName } = route.params as RouteParams;

  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  useEffect(() => {
    fetchPlayersByGroup(groupName, setPlayers);
  }, [groupName]);

  const currentTeamPlayers = useMemo(
    () => players.filter((player) => player.team === selectedTeam),
    [players, selectedTeam]
  );

  return { players: currentTeamPlayers, setPlayers };
};