import { create } from "zustand";

import type { Credential } from "../types/credential";

import { getCredentials } from "../services/credential.service";

interface VaultStore {
    assets: Credential[];

    loading: boolean;

    error: string | null;

    selectedAsset: Credential | null;

    editingAsset: Credential | null;

    isModalOpen: boolean;

    isDrawerOpen: boolean;

    searchQuery: string;

    loadAssets: () => Promise<void>;

    setAssets: (assets: Credential[]) => void;

    openModal: (asset?: Credential) => void;

    closeModal: () => void;

    openDrawer: (asset: Credential) => void;

    closeDrawer: () => void;

    setSearchQuery: (query: string) => void;
}

export const useVaultStore = create<VaultStore>((set) => ({
    assets: [],

    loading: false,

    error: null,

    selectedAsset: null,

    editingAsset: null,

    isModalOpen: false,

    isDrawerOpen: false,

    searchQuery: "",

    async loadAssets() {
        set({
            loading: true,
            error: null,
        });

        try {
            const { credentials } =
                await getCredentials();

            set({
                assets: credentials,
                loading: false,
            });
        } catch (error) {
            set({
                loading: false,
                error:
                    error instanceof Error
                        ? error.message
                        : "Failed to load credentials.",
            });
        }
    },

    setAssets: (assets) =>
        set({
            assets,
        }),

    openModal: (asset) =>
        set({
            isModalOpen: true,
            editingAsset: asset ?? null,
            isDrawerOpen: false,
        }),

    closeModal: () =>
        set({
            isModalOpen: false,
            editingAsset: null,
        }),

    openDrawer: (asset) =>
        set({
            selectedAsset: asset,
            isDrawerOpen: true,
        }),

    closeDrawer: () =>
        set({
            selectedAsset: null,
            isDrawerOpen: false,
        }),

    setSearchQuery: (query) =>
        set({
            searchQuery: query,
        }),
}));