import type { Settings } from "../types/settings";

export const mockSettings: Settings = {
    notifications: {
        email: true,
        push: true,
        security: true,
        productUpdates: false,
    },

    security: {
        twoFactorEnabled: true,
        biometricEnabled: false,
        autoLock: true,
        sessionTimeout: "30 min",
    },

    wallet: {
        connected: true,
        network: "Monad Testnet",
        address: "0x74F3...92AE",
        verified: true,
        lastSync: "2 minutes ago",
    },

    data: {
        autoBackup: true,
        exportFormat: "JSON",
        lastBackup: "Today",
    },

    developer: {
        developerMode: false,
        blockchainInspector: false,
        transactionLogs: false,
        mockData: true,
    },
};