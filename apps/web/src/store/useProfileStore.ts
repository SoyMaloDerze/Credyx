import { create } from "zustand";

import { mockProfile } from "../mock/profile";
import type { Profile } from "../types/profile";

interface ProfileStore {
    profile: Profile;

    isDirty: boolean;

    updateProfile: (
        profile: Partial<Profile>,
    ) => void;

    saveProfile: () => void;

    resetProfile: () => void;
}

export const useProfileStore =
    create<ProfileStore>((set) => ({
        profile: mockProfile,

        isDirty: false,

        updateProfile: (profile) =>
            set((state) => ({
                profile: {
                    ...state.profile,
                    ...profile,
                },
                isDirty: true,
            })),


        resetProfile: () =>
            set({
                profile: mockProfile,
                isDirty: false,
            }),
            

        saveProfile: () =>
            set({
                isDirty: false,
            }),
    }));