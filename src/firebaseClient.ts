// @ts-nocheck

// Lightweight stubs that mimic the Firebase client API used in the game.
// They provide deterministic data suitable for local/offline builds.

export const initializeApp = () => ({ appId: 'stub-app' });

export const getAuth = () => ({ currentUser: null });

export const signInAnonymously = async () => ({ user: { uid: `anon-${Math.random().toString(36).slice(2, 10)}` } });

export const signInWithCustomToken = async (_auth, _token) => ({ user: { uid: `token-${Math.random().toString(36).slice(2, 10)}` } });

export const onAuthStateChanged = (_auth, callback) => {
  const timeoutId = setTimeout(() => {
    callback({ uid: `local-${Math.random().toString(36).slice(2, 10)}` });
  }, 0);
  return () => clearTimeout(timeoutId);
};

export const getFirestore = () => ({ db: 'stub' });

const store = new Map();

export const doc = (_db, path: string) => ({ path });

export const setDoc = async (ref, data) => {
  store.set(ref.path, data);
};

export const getDoc = async (ref) => {
  const data = store.get(ref.path);
  return {
    exists: () => data !== undefined,
    data: () => data,
  };
};

export const setLogLevel = () => {};
