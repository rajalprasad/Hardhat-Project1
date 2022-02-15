const { expect, assert } = require("chai");

describe("ModifyVariable", function () {
  it("should change x to 1337", async function () {
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");
    const contract = await ModifyVariable.deploy(10);
    await contract.deployed();

    // modify x from 10 to 1337 via this function!
    await contract.modifyToLeet();
    // getter for state variable x
    const newX = await contract.x();
    assert.equal(newX.toNumber(), 1337);
  });
});

describe("ModifyString", function () {
  it("should change x to Sup dude!", async function () {
    const ModifyString = await ethers.getContractFactory("ModifyString");
    const contract = await ModifyString.deploy("Hello there");
    await contract.deployed();

    // modify x from Hello there to Sup dude! via this function!
    await contract.modifyToDude();
    // getter for state variable x
    const newX = await contract.x();
    assert.equal(newX, "Sup dude!");
  });
});