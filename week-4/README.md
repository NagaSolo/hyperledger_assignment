## Lab for Commercial Paper environment stack [WEEK 4]

### Step 0: Open 3 terminals:
- 1 for monitoring network as magnetocorp dev - (logsoutput)
- 1 for packaging, installing, deploying chaincode as magnetocorp admin - (isabella)
- 1 for packaging, installing, deploying chaincode as digibank admin - (balaji)


### Step 1
- Pull fabric-samples, cd into 'commercial-paper' and start the network
```
    cd fabric-samples/commercial-paper

    ./network-starter.sh
```
![hyperledger_fabric_week4-step1-all-running-after-network-start](https://user-images.githubusercontent.com/63999419/150631749-cd2309f4-5ce0-4fbf-bebb-cc0abc884dea.png)


### Step 2
- inspect network
```
    docker network inspect net_test

    or

    docker network inspect <name-of-papernet-network>
```
![hyperledger_fabric_week4-step2-inspect-stack-network](https://user-images.githubusercontent.com/63999419/150631750-7fd64900-e023-43cc-af68-d7a8c5be29f6.png)


### Step 3 (logsoutput)
- Magnetocorp can monitor network using logsoutput
```
    ./configuration/cli/monitordocker.sh net_test
```
![hyperledger_fabric_week4-step3-as-magnetocorp-start-logsoutput-to-monitor-network](https://user-images.githubusercontent.com/63999419/150631751-b4e2d808-b1c6-49fb-827c-bc988aa912c1.png)


### Step 4, 5 (Editor)
- Basically, we just looking and try to understand chaincode, consisting of buy, enroll, issue, redeem contracts


### Step 6 (magnetocorp)
- Here, as magnetocorp done developing chaincode, admin should package, install, and approve it for the organisation to the network

- packaging chaincode
```
    peer lifecycle chaincode package cp.tar.gz --lang node --path ./contract --label cp_0
```
- install chaincode to network:
```
    peer lifecycle chaincode install cp.tar.gz
```

- querying package id for later approval
```
    peer lifecycle chaincode queryinstalled
```

- save package id to environment
```
    export PACKAGE_ID=<id-from-previous-step>
```

- Approve for org
```
    peer lifecycle chaincode approveformyorg --orderer localhost:7050 --ordererTLSHostnameOverride orderer.example.com --channelID mychannel --name papercontract -v 0 --package-id $PACKAGE_ID --sequence 1 --tls --cafile $ORDERER_CA
```
![hyperledger_fabric_week4-step6 0-as-magnetocorp-package-install-chaincode](https://user-images.githubusercontent.com/63999419/150631752-5103a8df-ab95-4c6a-8833-e9a0b4814e58.png)
![hyperledger_fabric_week4-step6 1-as-magnetocorp-approve-chaincode](https://user-images.githubusercontent.com/63999419/150631753-cc32d5e6-92b0-424d-9af6-d8275ef6520d.png)


### Step 7 (digibank)
- as digibank need to package, install, approve chaincode on their side also
```
    cd commercial-paper/organization/digibank/
```

- packaging chaincode
```
    peer lifecycle chaincode package cp.tar.gz --lang node --path ./contract --label cp_0
```

- install chaincode on digibank peer
```
    peer lifecycle chaincode install cp.tar.gz
```

- query package id
```
    peer lifecycle chaincode queryinstalled
```

- save to environment
```
    export PACKAGE_ID=<id from above query>
```

- approve for digibank org
```
    peer lifecycle chaincode approveformyorg --orderer localhost:7050 --ordererTLSHostnameOverride orderer.example.com --channelID mychannel --name papercontract -v 0 --package-id $PACKAGE_ID --sequence 1 --tls --cafile $ORDERER_CA
```
![hyperledger_fabric_week4-step7-as-digibank-package-install-approve-chaincode](https://user-images.githubusercontent.com/63999419/150631754-fef58079-7bf2-4206-9790-0f6cc9812e00.png)


### Step 8 (can be done by magnetocorp or by digibank)
- On this case, commit the chaincode is done by digibank
```
    peer lifecycle chaincode commit -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --peerAddresses localhost:7051 --tlsRootCertFiles ${PEER0_ORG1_CA} --peerAddresses localhost:9051 --tlsRootCertFiles ${PEER0_ORG2_CA} --channelID mychannel --name papercontract -v 0 --sequence 1 --tls --cafile $ORDERER_CA --waitForEvent
```
![hyperledger_fabric_week4-step8 0-as-digibank-package-commit-chaincode](https://user-images.githubusercontent.com/63999419/150631756-77ebc0d5-fe97-417b-b892-867bc562d17f.png)

- if commit is successful, chaincode containers will start for digibank peer and magnetocorp peer
![hyperledger_fabric_week4-step8 1-chaincode-container-running-on-both-org](https://user-images.githubusercontent.com/63999419/150631757-1a0b595a-600a-4eb0-b3c2-72b6505d49f8.png)


### Step 9 (magnetocorp)
- This is to install client app dependency for magnetocorp
```
    npm i
```
![hyperledger_fabric_week4-step9-as-magnetocorp-install-client-app-dependency](https://user-images.githubusercontent.com/63999419/150631758-a6445da9-72c2-4979-9951-db2ff01aa684.png)


### Step 10 (magnetocorp)
- Enroll Isabella and issue her wallet id using enroll app for magnetocorp
```
    node enrollUser.js
```
![hyperledger_fabric_week4-step10-as-magnetocorp-use-client-app-to-enroll-isabella-and-create-id-for-her](https://user-images.githubusercontent.com/63999419/150631761-cc69702b-6004-43ed-b852-0277f1c1ac4b.png)


### Step 11 (magnetocorp)
- Issuing commercial paper to network using magnetocorp client app
```
    node issue.js
```
![hyperledger_fabric_week4-step11-as-magnetocorp-use-client-app-to-issue-commercial-paper-to-network](https://user-images.githubusercontent.com/63999419/150631762-a682c8b5-2ac8-43ae-9e53-ddc38ccb04b0.png)


### Step 13 (digibank)
- install dependency to app for digibank client app
```
    npm i
```
![hyperledger_fabric_week4-step13-as-digibank-install-client-app-to-interact](https://user-images.githubusercontent.com/63999419/150631763-2fd53e2d-f5c4-49e0-b40c-6d7190f78d7d.png)


### Step 14 (digibank)
- using `enroll` app enroll balaji and issue him an id/wallet/private pubkey
```
    node enrollUser.js
```
![hyperledger_fabric_week4-step14-as-digibank-use-client-app-to-enroll-issueid-to-balaji](https://user-images.githubusercontent.com/63999419/150631765-79fa5f8a-36f3-4d09-b746-a912c8bf0709.png)


### Step 15 (digibank)
- balaji can now buy the contract using `buy` app
```
    node buy.js
```
![hyperledger_fabric_week4-step15-as-digibank-use-client-app-balaji-buy-contract](https://user-images.githubusercontent.com/63999419/150631767-054c6a83-e37a-49e6-96eb-212aa1a0f66d.png)


### Step 16 (digibank)
- balaji now can redeem contract from Magnetocorp using `redeem` app
```
    node redeem.js
```
![hyperledger_fabric_week4-step16-as-digibank-use-client-app-balaji-redeem-contract-from-magnetocorp](https://user-images.githubusercontent.com/63999419/150631746-bc55761f-abf3-4f2c-8ea8-c2a594709b5b.png)


### Step 17, Lab Finish (any terminal)
- can use any of the terminal back back to `commercial-paper` dir, run:
```
    ./network-clean.sh
```
![hyperledger_fabric_week4-step17-finish-clean-stack](https://user-images.githubusercontent.com/63999419/150631747-8fac7acd-c0e7-4090-8360-a7f3adeef82e.png)