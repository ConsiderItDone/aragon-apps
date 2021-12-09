const hardhatConfig = require('@aragon/hardhat-config')

hardhatConfig.networks = {
    ...hardhatConfig.networks,
    dev: {
        url: 'http://localhost:8545',
    },
};

module.exports = hardhatConfig
