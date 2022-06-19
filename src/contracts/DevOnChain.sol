//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract DevOnChain{

    uint hackid;

    struct Hackathon{
        uint256 hackid;
        address org;
        string name;
        string date;
        string mode;
        address prize;
        string desc;
    }

    struct Participant{
        address hacker;
        string name;
        string status;
    }

    struct Sponsor{
        string name;
        string amount;
        string hash;
        string status;
    }

    mapping(uint256=>Hackathon)public hacklist;
    mapping(address => mapping(uint256 => Hackathon)) public hackathons;
    mapping(address => mapping(uint256 => Participant)) public participants;
    mapping(address => mapping(uint256 => Participant)) public myapplications;
    mapping(uint256 => Sponsor)public sponsors;
    mapping(address => mapping(uint256 => Sponsor)) public mysponsors;

    function addHackathon(string memory _name, string memory _date, string memory _mode, address prize, string memory _desc) public {
        ++hackid;
        hackathons[msg.sender][hackid]=Hackathon(hackid,msg.sender,_name,_date,_mode,prize,_desc);
        hacklist[hackid]=Hackathon(hackid,msg.sender,_name,_date,_mode,prize,_desc);
    }

    function applyHackathon(address org,uint _key)public{
        myapplications[msg.sender][_key]=Participant(msg.sender,hackathons[org][_key].name,'Accepted');
        participants[hackathons[org][_key].org][_key]=Participant(msg.sender,hackathons[org][_key].name,'Accepted');
    }

    function applySponsor(uint256 _key,string memory _amount, string memory _hash)public{
        sponsors[_key]=Sponsor(hackathons[msg.sender][_key].name, _amount, _hash, 'Waiting');
        mysponsors[msg.sender][_key]=Sponsor(hackathons[msg.sender][_key].name, _amount, _hash, 'Waiting');
    }

    function approveSponsorship(address org, uint256 _key)public{
        sponsors[_key].status='Approved';
        mysponsors[org][_key].status='Approved';
    }

    function setWinner(address hacker, uint256 _key)public{
        participants[msg.sender][_key].status='Winner';
        myapplications[hacker][_key].status='Winner';
    }

    function getHackList(uint256 _key) public view returns(Hackathon memory){
        return hacklist[_key];
    }

    function getHackathon(uint _key)public view returns(Hackathon memory){
        return hackathons[msg.sender][_key];
    }

    function getApplications(uint256 _key)public view returns(Participant memory){
        return myapplications[msg.sender][_key];
    }

    function getParticipants(uint256 _key)public view returns(Participant memory){
        return participants[msg.sender][_key];
    }
}