export type PlayerTeam = "Time A" | "Time B";

export interface PlayerStorageDTO {
  createdAt: number;
  team: PlayerTeam;
  name: string;
  id: string;
}
