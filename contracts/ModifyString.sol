//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract ModifyString {
  string public x;

  constructor(string memory _x) {
    x = _x;
  }

  function modifyToDude() public {
    x = "Sup dude!";
  }

}