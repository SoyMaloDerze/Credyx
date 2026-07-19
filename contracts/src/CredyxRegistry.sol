// SPDX-License-Identifier: MIT
pragma solidity ^0.8.35;

import {Ownable} from "lib/openzeppelin-contracts/contracts/access/Ownable.sol";

contract CredyxRegistry is Ownable {

    /* -------------------------------------------------------------------------- */
    /*                                   Constructor                              */
    /* -------------------------------------------------------------------------- */

    constructor(address initialOwner)
        Ownable(initialOwner)
    {
        authorizedIssuers[initialOwner] = true;

        emit IssuerAuthorized(initialOwner);
    }

    /* -------------------------------------------------------------------------- */
    /*                                 Custom Errors                              */
    /* -------------------------------------------------------------------------- */

    error CredentialAlreadyExists();
    error CredentialNotFound();
    error CredentialAlreadyRevoked();

    error UnauthorizedIssuer();
    error IssuerAlreadyAuthorized();
    error IssuerNotAuthorized();

    /* -------------------------------------------------------------------------- */
    /*                                    Events                                  */
    /* -------------------------------------------------------------------------- */

    event CredentialRegistered(
        bytes32 indexed hash,
        address indexed issuer,
        address indexed owner
    );

    event CredentialRevoked(
        bytes32 indexed hash,
        address indexed issuer
    );

    event IssuerAuthorized(
        address indexed issuer
    );

    event IssuerRevoked(
        address indexed issuer
    );

    /* -------------------------------------------------------------------------- */
    /*                                    Models                                  */
    /* -------------------------------------------------------------------------- */

    struct Credential {
        bytes32 hash;
        address owner;
        address issuer;
        uint64 issuedAt;
        bool revoked;
    }

    /* -------------------------------------------------------------------------- */
    /*                                   Storage                                  */
    /* -------------------------------------------------------------------------- */

    mapping(bytes32 => Credential)
        private credentials;

    mapping(address => bool)
        public authorizedIssuers;

    /* -------------------------------------------------------------------------- */
    /*                                  Modifiers                                 */
    /* -------------------------------------------------------------------------- */

    modifier onlyAuthorizedIssuer() {
        if (!authorizedIssuers[msg.sender]) {
            revert UnauthorizedIssuer();
        }

        _;
    }

    /* -------------------------------------------------------------------------- */
    /*                              Issuer Management                             */
    /* -------------------------------------------------------------------------- */

    function authorizeIssuer(
        address issuer
    )
        external
        onlyOwner
    {
        if (authorizedIssuers[issuer]) {
            revert IssuerAlreadyAuthorized();
        }

        authorizedIssuers[issuer] = true;

        emit IssuerAuthorized(issuer);
    }

    function revokeIssuer(
        address issuer
    )
        external
        onlyOwner
    {
        if (!authorizedIssuers[issuer]) {
            revert IssuerNotAuthorized();
        }

        authorizedIssuers[issuer] = false;

        emit IssuerRevoked(issuer);
    }

    /* -------------------------------------------------------------------------- */
    /*                             Credential Management                          */
    /* -------------------------------------------------------------------------- */

    function registerCredential(
        bytes32 hash,
        address owner
    )
        external
        onlyAuthorizedIssuer
    {
        if (credentials[hash].issuedAt != 0) {
            revert CredentialAlreadyExists();
        }

        credentials[hash] = Credential({
            hash: hash,
            owner: owner,
            issuer: msg.sender,
            issuedAt: uint64(block.timestamp),
            revoked: false
        });

        emit CredentialRegistered(
            hash,
            msg.sender,
            owner
        );
    }


    function verifyCredential(
        bytes32 hash
    )
        external
        view
        returns (bool)
    {
        Credential memory credential =
            credentials[hash];

        if (credential.issuedAt == 0) {
            return false;
        }

        return !credential.revoked;
    }


    function getCredential(
        bytes32 hash
    )
        external
        view
        returns (Credential memory)
    {
        Credential memory credential =
            credentials[hash];

        if (credential.issuedAt == 0) {
            revert CredentialNotFound();
        }

        return credential;
    }


    function revokeCredential(
        bytes32 hash
    )
        external
        onlyAuthorizedIssuer
    {
        Credential storage credential =
            credentials[hash];

        if (credential.issuedAt == 0) {
            revert CredentialNotFound();
        }

        if (credential.revoked) {
            revert CredentialAlreadyRevoked();
        }

        if (credential.issuer != msg.sender) {
            revert UnauthorizedIssuer();
        }

        credential.revoked = true;

        emit CredentialRevoked(
            hash,
            msg.sender
        );
    }


}