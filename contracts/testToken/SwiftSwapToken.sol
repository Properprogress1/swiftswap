//SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SwiftSwapToken is ERC20 {
    address immutable owner;

    constructor() ERC20("SwiftSwap", "SWFST") {
        owner = msg.sender;
        _mint(msg.sender, 100000e5);
    }

    function mintToken(uint _amount) external {
        require(msg.sender == owner, "Only owner can mint tokens");
        _mint(msg.sender, _amount);
    }
}
