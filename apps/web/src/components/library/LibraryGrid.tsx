import { AnimatePresence, motion } from "framer-motion";

import LibraryCard from "./LibraryCard";
import LibraryEmptyState from "./LibraryEmptyState";

import { useLibraryStore } from "../../store/useLibraryStore";

export default function LibraryGrid() {
    const {
        assets,
        searchQuery,
        selectedCollection,
        sortBy,
        viewMode,
        openPreview,
        toggleFavorite,
        togglePinned,
    } = useLibraryStore();

    const filteredAssets = assets
        .filter((asset) => {
            const query = searchQuery.trim().toLowerCase();

            const matchesSearch =
                !query ||
                asset.title.toLowerCase().includes(query) ||
                asset.description
                    .toLowerCase()
                    .includes(query) ||
                asset.tags.some((tag) =>
                    tag.toLowerCase().includes(query)
                );

            const matchesCollection =
                selectedCollection === "All" ||
                asset.collection === selectedCollection;

            return (
                matchesSearch &&
                matchesCollection
            );
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "name":
                    return a.title.localeCompare(
                        b.title
                    );

                case "oldest":
                    return a.createdAt.localeCompare(
                        b.createdAt
                    );

                case "recent":
                default:
                    return b.createdAt.localeCompare(
                        a.createdAt
                    );
            }
        });

    if (!filteredAssets.length) {
        return <LibraryEmptyState />;
    }

    return (
        <AnimatePresence mode="popLayout">

            <motion.section
                layout
                className={
                    viewMode === "grid"
                        ? "grid gap-7 md:grid-cols-2 xl:grid-cols-3"
                        : "space-y-5"
                }
            >
                {filteredAssets.map((asset) => (
                    <LibraryCard
                        key={asset.id}
                        asset={asset}
                        onClick={() =>
                            openPreview(asset)
                        }
                        onFavorite={() =>
                            toggleFavorite(
                                asset.id
                            )
                        }
                        onPinned={() =>
                            togglePinned(
                                asset.id
                            )
                        }
                    />
                ))}
            </motion.section>

        </AnimatePresence>
    );
}