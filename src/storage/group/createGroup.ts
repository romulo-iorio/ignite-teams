import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";
import { Group } from "src/@types/Group";

import { getAllGroups } from "./getAllGroups";

const generateRandomId = () => {
  return Math.random().toString(36).substring(7);
};

export const createGroup = async (newGroupName: string) => {
  const groups = await getAllGroups();

  const newGroup: Group = {
    createdAt: new Date().getTime(),
    id: generateRandomId(),
    name: newGroupName,
  };

  const newGroupsJSON = JSON.stringify([...groups, newGroup]);

  await AsyncStorage.setItem(GROUP_COLLECTION, newGroupsJSON);
};
