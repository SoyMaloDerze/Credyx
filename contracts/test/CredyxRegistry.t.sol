// SPDX-License-Identifier: MIT
pragma solidity ^0.8.35;

import {Test} from "forge-std/Test.sol";
import {CredyxRegistry} from "../src/CredyxRegistry.sol";

contract CredyxRegistryTest is Test {

    CredyxRegistry registry;

    address owner = address(1);
    address issuer = address(2);
    address anotherIssuer = address(3);
    address student = address(4);

    bytes32 credentialHash =
        keccak256("Bachelor of Computer Engineering");

    function setUp() public {
        vm.prank(owner);
        registry = new CredyxRegistry(owner);

        vm.prank(owner);
        registry.authorizeIssuer(issuer);

        vm.prank(owner);
        registry.authorizeIssuer(anotherIssuer);
    }

    /* -------------------------------------------------------------------------- */
    /*                               Deployment Tests                             */
    /* -------------------------------------------------------------------------- */

    function testOwnerIsSetCorrectly() public {
        assertEq(
            registry.owner(),
            owner
        );
    }

    /* -------------------------------------------------------------------------- */
    /*                           Registration Tests                               */
    /* -------------------------------------------------------------------------- */

    function testAuthorizedIssuerCanRegisterCredential() public {
        vm.prank(issuer);

        registry.registerCredential(
            credentialHash,
            student
        );

        bool verified = registry.verifyCredential(
            credentialHash
        );

        assertTrue(verified);
    }

    function testUnauthorizedIssuerCannotRegisterCredential() public {
        vm.expectRevert(
            CredyxRegistry.UnauthorizedIssuer.selector
        );

        registry.registerCredential(
            credentialHash,
            student
        );
    }

    function testCannotRegisterDuplicateCredential() public {
        vm.startPrank(issuer);

        registry.registerCredential(
            credentialHash,
            student
        );

        vm.expectRevert(
            CredyxRegistry.CredentialAlreadyExists.selector
        );

        registry.registerCredential(
            credentialHash,
            student
        );

        vm.stopPrank();
    }


    function testVerifyReturnsFalseForUnknownCredential() public {
        bool verified = registry.verifyCredential(
            credentialHash
        );

        assertFalse(verified);
    }

    function testGetCredential() public {
        vm.prank(issuer);

        registry.registerCredential(
            credentialHash,
            student
        );

        CredyxRegistry.Credential memory credential =
            registry.getCredential(credentialHash);

        assertEq(
            credential.owner,
            student
        );

        assertEq(
            credential.issuer,
            issuer
        );

        assertFalse(
            credential.revoked
        );
    }

    function testCannotGetUnknownCredential() public {
        vm.expectRevert(
            CredyxRegistry.CredentialNotFound.selector
        );

        registry.getCredential(
            credentialHash
        );
    }


    function testIssuerCanRevokeCredential() public {
        vm.startPrank(issuer);

        registry.registerCredential(
            credentialHash,
            student
        );

        registry.revokeCredential(
            credentialHash
        );

        vm.stopPrank();

        bool verified =
            registry.verifyCredential(
                credentialHash
            );

        assertFalse(verified);
    }

    function testCannotRevokeTwice() public {
        vm.startPrank(issuer);

        registry.registerCredential(
            credentialHash,
            student
        );

        registry.revokeCredential(
            credentialHash
        );

        vm.expectRevert(
            CredyxRegistry.CredentialAlreadyRevoked.selector
        );

        registry.revokeCredential(
            credentialHash
        );

        vm.stopPrank();
    }

    function testAnotherIssuerCannotRevokeCredential() public {
        vm.prank(issuer);

        registry.registerCredential(
            credentialHash,
            student
        );

        vm.prank(anotherIssuer);

        vm.expectRevert(
            CredyxRegistry.UnauthorizedIssuer.selector
        );

        registry.revokeCredential(
            credentialHash
        );
    }


    function testCannotRevokeUnknownCredential() public {
        vm.prank(issuer);

        vm.expectRevert(
            CredyxRegistry.CredentialNotFound.selector
        );

        registry.revokeCredential(
            credentialHash
        );
    }


    
    
}