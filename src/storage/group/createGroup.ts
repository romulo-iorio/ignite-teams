import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";
import { getAllGroups } from "./getAllGroups";

export const createGroup = async (newGroupName: string) => {
  const groups = await getAllGroups();

  const newGroup = {
    id: String(new Date().getTime()),
    createdAt: new Date().getTime(),
    groupName: newGroupName,
  };

  await AsyncStorage.setItem(
    GROUP_COLLECTION,
    JSON.stringify([...groups, newGroup])
  );
};
