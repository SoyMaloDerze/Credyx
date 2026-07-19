// SPDX-License-Identifier: MIT
pragma solidity ^0.8.35;

import {Script} from "forge-std/Script.sol";
import {CredyxRegistry} from "../src/CredyxRegistry.sol";

contract DeployCredyxRegistry is Script {

    function run()
        external
        returns (CredyxRegistry registry)
    {
        vm.startBroadcast();

        registry = new CredyxRegistry(msg.sender);

        vm.stopBroadcast();
    }
}