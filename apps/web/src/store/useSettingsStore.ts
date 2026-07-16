import { create } from "zustand";

import { mockSettings } from "../mock/settings";
import type { Settings } from "../types/settings";

interface SettingsStore {
    settings: Settings;

    isDirty: boolean;

    updateSettings: (
        settings: Partial<Settings>
    ) => void;

    saveSettings: () => void;

    resetSettings: () => void;
}

export const useSettingsStore =
    create<SettingsStore>((set) => ({
        settings: mockSettings,

        isDirty: false,

        updateSettings: (settings) =>
            set((state) => ({
                settings: {
                    ...state.settings,
                    ...settings,
                },
                isDirty: true,
            })),

        saveSettings: () =>
            set({
                isDirty: false,
            }),

        resetSettings: () =>
            set({
                settings: mockSettings,
                isDirty: false,
            }),
    }));