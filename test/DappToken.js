const DappToken = artifacts.require('./DappToken.sol');

contract('DappToken', accounts => {
	let tokenInstance;
	it('Initialiazes the contract with the correct values', () => {
		return DappToken.deployed()
			.then(instance => {
				tokenInstance = instance;
				return tokenInstance.name();
			})
			.then(name => {
				assert.equal(name, 'Dapp Token', 'has the correct name');
				return tokenInstance.symbol();
			})
			.then(symbol => {
				assert.equal(symbol, 'DAPP', 'has the correct symbol');
				return tokenInstance.standard();
			})
			.then(standard => {
				assert.equal(standard, 'Dapp Token V1.0', 'has the correct standard');
			});
	});
	it('it allocates the initial supply upon deployment', () => {
		return DappToken.deployed()
			.then(instance => {
				tokenInstance = instance;
				return tokenInstance.totalSupply();
			})
			.then(totalSupply => {
				assert.equal(totalSupply.toNumber(), 1000001, 'sets the total supply to 1,000,000');
				return tokenInstance.balanceOf(accounts[0]);
			})
			.then(adminBalance => {
				assert.equal(adminBalance.toNumber(), 1000001, 'it allocates the initial supply to the admin');
			});
	});

	it('Transfer token ownership', () => {
		return DappToken.deployed()
			.then(instance => {
				tokenInstance = instance;
				return tokenInstance.transfer.call(accounts[1], 99999999999999999999999999);
			})
			.then(assert.fail)
			.catch(err => {
				assert(err.message.indexOf('revert') < 0, 'error message must contain revert');
				return tokenInstance.transfer(accounts[1], 250000, { from: accounts[0] });
			})
			.then(receipt => {
				return tokenInstance.balanceOf(accounts[1]);
			})
			.then(balance => {
				assert.equal(balance.toNumber(), 250000, 'adds the amount to the receiving account');
				return tokenInstance.balanceOf(accounts[0]);
			})
			.then(balance => {
				assert.equal(balance.toNumber(), 750001, 'deducts the amount from the sending account');
			});
	});
});
