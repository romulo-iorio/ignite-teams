import AsyncStorage from "@react-native-async-storage/async-storage";

import { generateRandomId } from "@utils/generateRandomId";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { Group } from "src/@types/Group";

import { getAllGroups } from "./getAllGroups";

export const createGroup = async (newGroupName: string) => {
  const groups = await getAllGroups();

  const groupAlreadyExists = groups.find(
    (group) => group.name === newGroupName
  );

  if (groupAlreadyExists)
    throw new AppError("Já existe uma turma cadastrado com esse nome.");

  const newGroup: Group = {
    createdAt: new Date().getTime(),
    id: generateRandomId(),
    name: newGroupName,
  };

  const newGroupsJSON = JSON.stringify([...groups, newGroup]);

  await AsyncStorage.setItem(GROUP_COLLECTION, newGroupsJSON);
};
