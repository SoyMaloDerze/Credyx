import { Contract, JsonRpcProvider, Wallet } from "ethers";
import abi from "../abi/CredyxRegistry.json";

import { env } from "../config/env";

const rpcUrl = env.RPC_URL;
const privateKey = env.PRIVATE_KEY;
const contractAddress = env.CONTRACT_ADDRESS;

const provider = new JsonRpcProvider(rpcUrl);

const wallet = new Wallet(privateKey, provider);

const registry = new Contract(
    contractAddress,
    abi,
    wallet
);

export default registry;