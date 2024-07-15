interface StorageKey {
  accessToken: string | undefined;
}

const initStorage = <T extends keyof StorageKey>(key: T, storage: Storage) => {
  const storageKey = `${key}`;

  const get = (): StorageKey[T] | null => {
    const value = storage.getItem(storageKey);
    return value !== null ? value : null;
  };

  const set = (value: StorageKey[T] | null) => {
    if (value == null) {
      return storage.removeItem(storageKey);
    }
    storage.setItem(storageKey, value);
  };

  return { get, set };
};

export const authLocalStorage = initStorage('accessToken', localStorage);
