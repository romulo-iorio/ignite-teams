import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";

export const createGroup = async (newGroupName: string) => {
  const data = await AsyncStorage.getItem(GROUP_COLLECTION);
  const groups = data ? JSON.parse(data) : [];

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
