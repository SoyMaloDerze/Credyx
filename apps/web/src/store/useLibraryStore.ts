import { create } from "zustand";

import { mockLibrary } from "../mock/library";
import type {
    AssetCollection,
    LibraryAsset,
} from "../types/library";

type SortOption =
    | "recent"
    | "oldest"
    | "name";

interface LibraryStore {
    assets: LibraryAsset[];

    selectedAsset: LibraryAsset | null;

    searchQuery: string;

    selectedCollection: AssetCollection | "All";

    sortBy: SortOption;

    isPreviewOpen: boolean;

    setSearchQuery: (query: string) => void;

    setCollection: (
        collection: AssetCollection | "All"
    ) => void;

    setSort: (sort: SortOption) => void;

    openPreview: (
        asset: LibraryAsset
    ) => void;

    closePreview: () => void;

    toggleFavorite: (
        id: string
    ) => void;

    togglePinned: (
        id: string
    ) => void;

    viewMode: | "grid" | "list";

    setViewMode: (
        mode: "grid" | "list"
    ) => void;
}

export const useLibraryStore =
    create<LibraryStore>((set) => ({
        assets: mockLibrary,

        selectedAsset: null,

        searchQuery: "",

        selectedCollection: "All",

        sortBy: "recent",

        isPreviewOpen: false,

        viewMode: "grid",

        setSearchQuery: (query) =>
            set({
                searchQuery: query,
            }),

        setCollection: (
            collection,
        ) =>
            set({
                selectedCollection: collection,
            }),

        setSort: (sort) =>
            set({
                sortBy: sort,
            }),

        setViewMode: (mode) =>
            set({
                viewMode: mode,
            }),

        openPreview: (asset) =>
            set({
                selectedAsset: asset,
                isPreviewOpen: true,
            }),

        closePreview: () =>
            set({
                selectedAsset: null,
                isPreviewOpen: false,
            }),

        toggleFavorite: (id) =>
            set((state) => ({
                assets: state.assets.map(
                    (asset) =>
                        asset.id === id
                            ? {
                                  ...asset,
                                  isFavorite:
                                      !asset.isFavorite,
                              }
                            : asset
                ),
            })),

        togglePinned: (id) =>
            set((state) => ({
                assets: state.assets.map(
                    (asset) =>
                        asset.id === id
                            ? {
                                  ...asset,
                                  isPinned:
                                      !asset.isPinned,
                              }
                            : asset
                ),
            })),
    }));