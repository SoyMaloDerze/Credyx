import AddVaultAssetModal from "../components/vault/AddVaultAssetModal";
import CredentialCard from "../components/vault/CredentialCard";
import EmptyState from "../components/vault/EmptyState";
import FloatingButton from "../components/vault/FloatingButton";
import Hero from "../components/vault/Hero";
import VaultSnapshot from "../components/vault/VaultSnapshot";
import VaultAssetDrawer from "../components/vault/VaultAssetDrawer";
import VaultSearch from "../components/vault/VaultSearch";
import SearchEmptyState from "../components/vault/SearchEmptyState";
import { AnimatePresence, motion } from "framer-motion";



import { useVaultStore } from "../store/useVaultStore";

export default function VaultPage() {
    const {
        assets,
        searchQuery,
        setSearchQuery,
        isModalOpen,
        isDrawerOpen,
        selectedAsset,
        openModal,
        closeModal,
        openDrawer,
        closeDrawer,
        editingAsset,
    } = useVaultStore();

    const filteredAssets = assets.filter((asset) => {
        const query = searchQuery.trim().toLowerCase();

        if (!query) {
            return true;
        }

        return (
            asset.title.toLowerCase().includes(query) ||
            asset.description.toLowerCase().includes(query) ||
            asset.type.toLowerCase().includes(query)
        );
    });

    
    const hasVaultAssets = assets.length > 0;
    const hasSearchResults = filteredAssets.length > 0;

    return (
        <>
            <div className="space-y-8">

                {/* Hero */}
                <Hero
                    onCreateAsset={openModal}
                />

                {/* Vault Search */}
                <VaultSearch
                    value={searchQuery}
                    onChange={setSearchQuery}
                />

                {/* Vault overview */}
                <VaultSnapshot />

                {/* Vault assets */}
                {!hasVaultAssets ? (
                    <EmptyState
                        onCreateAsset={openModal}
                    />
                ) : hasSearchResults ? (
                    <section id="vault-assets">
                        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
                                    Vault Assets
                                </p>

                                <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                                    Everything stored inside your vault.
                                </h2>

                                <p className="mt-3 max-w-2xl text-zinc-400">
                                    Securely organized credentials ready to
                                    autofill applications whenever you need
                                    them.
                                </p>
                            </div>

                            <button className="rounded-full border border-white/10 bg-white/3 px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/8 hover:text-white">
                                View All Assets
                            </button>
                        </div>

                        <AnimatePresence mode="popLayout">
                            <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                {filteredAssets.map((credential) => (
                                    <CredentialCard
                                        key={credential.id}
                                        title={credential.title}
                                        description={credential.description}
                                        type={credential.type}
                                        lastSynced={credential.lastSynced}
                                        icon={credential.icon}
                                        isPrimary={credential.isPrimary}
                                        onClick={() => openDrawer(credential)}
                                    />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                        
                    </section>
                ) : (
                    <SearchEmptyState
                        onClearSearch={() => setSearchQuery("")}
                    />
                )}

                {/* Floating action */}
                <FloatingButton
                    onClick={openModal}
                />

                {/* Create asset modal */}
                <AddVaultAssetModal
                    key={editingAsset?.id ?? "create"}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />

                {/* Vault Assets */}
                <VaultAssetDrawer
                    isOpen={isDrawerOpen}
                    asset={selectedAsset}
                    onClose={closeDrawer}
                />
            </div>
        </>
    );
}