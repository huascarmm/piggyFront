pragma solidity 0.7.0;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract piggyBanck is Ownable {
    function deposit() public payable {}

    function withdraw(uint256 value) public onlyOwner returns (bool) {
        uint256 contractBalance = address(this).balance;

        if (value < contractBalance) {
            msg.sender.transfer(value);
            return true;
        }

        return false;
    }
}
