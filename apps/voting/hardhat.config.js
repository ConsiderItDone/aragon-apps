const hardhatConfig = require('@aragon/hardhat-config')
const customNetworks = require('./networks.json')

hardhatConfig.networks = {
    ...hardhatConfig.networks,
    ...customNetworks,
};

module.exports = hardhatConfig
