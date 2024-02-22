type PlayerTeam = "A" | "B";

export interface PlayerStorageDTO {
  createdAt: number;
  team: PlayerTeam;
  name: string;
  id: string;
}
