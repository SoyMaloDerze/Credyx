import { create } from "zustand";

import { mockCredentials } from "../mock/credentials";
import type { Credential } from "../types/credential";

interface VaultStore {
    assets: Credential[];

    selectedAsset: Credential | null;

    isModalOpen: boolean;

    isDrawerOpen: boolean;

    openModal: (asset?: Credential) => void;

    closeModal: () => void;

    openDrawer: (asset: Credential) => void;

    closeDrawer: () => void;

    createAsset: (asset: Credential) => void;

    updateAsset: (id: string, asset: Credential) => void;

    deleteAsset: (id: string) => void;

    editingAsset: Credential | null;

    searchQuery: string;

    setSearchQuery: (query: string) => void;

}

export const useVaultStore = create<VaultStore>((set) => ({
    assets: mockCredentials,

    selectedAsset: null,

    isModalOpen: false,

    isDrawerOpen: false,

    editingAsset: null,

    searchQuery: "",

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

    createAsset: (asset) =>
        set((state) => ({
            assets: [asset, ...state.assets],
            isModalOpen: false,
        })),

    updateAsset: (id, asset) =>
        set((state) => ({
            assets: state.assets.map((item) =>
                item.id === id
                    ? {
                        ...asset,
                        id,
                    }
                    : item,
            ),
            editingAsset: null,
            isModalOpen: false,
        })),

    deleteAsset: (id) =>
        set((state) => ({
            assets: state.assets.filter(
                (asset) => asset.id !== id
            ),
            selectedAsset:
                state.selectedAsset?.id === id
                    ? null
                    : state.selectedAsset,
        })),

    setSearchQuery: (query) =>
        set({
            searchQuery: query,
        }),
}));