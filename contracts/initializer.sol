//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";


contract BaseContract is Initializable {
    uint public y;

    function initialize() public onlyInitializing {
        y = 42;
    }
}

contract MyContract is BaseContract {
    uint256 public x;

    function initialize(uint256 _x) public initializer {
        BaseContract.initialize();
        x = _x;
    }
}
