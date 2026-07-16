export interface Settings {
    notifications: {
        email: boolean;

        push: boolean;

        security: boolean;

        productUpdates: boolean;
    };

    security: {
        twoFactorEnabled: boolean;

        biometricEnabled: boolean;

        autoLock: boolean;

        sessionTimeout: "15 min" | "30 min" | "1 hour";
    };

    wallet: {
        connected: boolean;

        network: "Monad Testnet";

        address: string;

        verified: boolean;

        lastSync: string;
    };

    data: {
        autoBackup: boolean;

        exportFormat: "JSON" | "PDF";

        lastBackup: string;
    };

    developer: {
        developerMode: boolean;

        blockchainInspector: boolean;

        transactionLogs: boolean;

        mockData: boolean;
    };
}