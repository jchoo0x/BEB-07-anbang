// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AnBangToken is ERC20, Ownable {

    struct building_info{
        contract_type form;
        uint256 deposit;
        uint256 maintenance;
        string building_status;

        uint256 tokenId;
        address nft_address;
    }

    struct contractProposal{
        address landlord;
        address lessee;
        address server;
        string landlord_special;
        string lessee_special;
        vote_Status landlord_vote;
        vote_Status lessee_vote;
        vote_Status server_vote;
        bool vote;

        building_info building;
    }

    enum contract_type{
        charter, //전세
        monthly //월세
    }

    enum vote_Status{
        OK,
        NO,
        Wait
    }

    mapping(uint256=>contractProposal) public contractMapping;

    event writeSpecialContract(string landlord_special, string lessee_special);
    event voteComplete(contractProposal _proposal);

    constructor() ERC20("AnBangToken", "ABT") {
        _mint(msg.sender, 10000);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
 
    function setProposal(uint256 _index, contractProposal memory data) public onlyOwner {
        contractMapping[_index] = data;
    }

    function getProposal(uint256 _index) public view returns(contractProposal memory){
        return contractMapping[_index];
    }

    function vote(address addr, uint256 tokenId,vote_Status voting) public {
        uint vote_OK_num = 0;
        uint vote_Wait_num = 3;
        contractProposal memory _proposal = getProposal(tokenId);
        require(_proposal.vote == true, "not voting");
        if(_proposal.landlord == addr){
            _proposal.landlord_vote = voting;
        }
        else if(_proposal.lessee == addr){
            _proposal.lessee_vote = voting;
        }
        else if(_proposal.server == addr){
            _proposal.server_vote = voting;
        }

        if(_proposal.landlord_vote != vote_Status.Wait){
            vote_Wait_num--;
            if(_proposal.landlord_vote == vote_Status.OK){
                vote_OK_num++;
            }
        }
        else if(_proposal.lessee_vote != vote_Status.Wait){
            vote_Wait_num--;
            if(_proposal.lessee_vote == vote_Status.OK){
                vote_OK_num++;
            }
        }
        else if(_proposal.server_vote != vote_Status.Wait){
            vote_Wait_num--;
            if(_proposal.server_vote == vote_Status.OK){
                vote_OK_num++;
            }
        }
        if(vote_OK_num >= 2){
            emit voteComplete(_proposal);
            setVoteInit(_proposal);
        }
        else if(vote_Wait_num == 0){
            setVoteInit(_proposal);
        }
    }

    function setVoteInit(contractProposal memory _proposal) private {
        _proposal.vote = false;
        _proposal.server_vote = vote_Status.Wait;
        _proposal.landlord_vote = vote_Status.Wait;
        _proposal.lessee_vote = vote_Status.Wait;
    }

    function proposal(address landlord,
        address lessee,
        string memory landlord_special,
        string memory lessee_special,

        contract_type form,
        uint256 deposit,
        uint256 maintenance,
        string memory building_status,

        uint256 tokenId,
        address nft_address

        ) public onlyOwner {
        building_info memory building = building_info(form,deposit,maintenance,building_status,tokenId,nft_address); 
        contractProposal memory _proposal = contractProposal(landlord,lessee,msg.sender,
                                                            landlord_special,lessee_special,
                                                            vote_Status.Wait,vote_Status.Wait,vote_Status.Wait,true, building);
        
        setProposal(tokenId, _proposal);
    }
}