const STORAGE_KEY = "probify.preferences";

export const loadPreferences = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return { isMuted: Boolean(parsed.isMuted) };
  } catch {
    return { isMuted: false };
  }
};

export const savePreferences = (preferences) => {
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ isMuted: Boolean(preferences.isMuted) })); } catch { /* Penyimpanan lokal tidak wajib tersedia. */ }
};
