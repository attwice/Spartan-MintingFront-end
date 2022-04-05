import {
  Button,
  Nav,
  Navbar,
  Row,
  Col,
  Container
} from "react-bootstrap";

import React, { useState, useEffect } from 'react';

import { connectWallet, getCurrentWalletConnected } from "../utils/interact.js";

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../kangaroo.json");
const contractAddress = "0xC4dDc55DDA525Abb97B7A09667Ed11577A374824";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contract = new web3.eth.Contract(contractABI, contractAddress);

const mintNFT = async (amount, price, state) => {
  const { address } = await getCurrentWalletConnected();
  if (address === "") {
    return {
      success: false,
      status: "Please make sure wallet connected!",
    }
  }
  else {
    const _amountOfEther = web3.utils.toWei(web3.utils.toBN(price), 'ether') * web3.utils.toBN(amount) / web3.utils.toBN(100);
    if (state === true) {
      contract.methods.presaleKangaroo(amount).send({ from: address, gas: 150000 * amount, value: _amountOfEther })
        .on("confirmation", function () {
        })
        .on('error', async function (error, receipt) {
          console.log(error);
        });
    } else {
      contract.methods.publicsaleKangaroo(amount).send({ from: address, gas: 150000 * amount, value: _amountOfEther })
        .on("confirmation", function () {
        })
        .on('error', async function (error, receipt) {
          console.log(error);
        });
    }

    return {
      status: "",
    }
  }
}



export default function Mint() {
  const [walletAddress, setWallet] = useState("");
  // const [status, setStatus] = useState(""); 
  const [tokenNumber, setTokenNumber] = useState(1);
  const [supply, setSupply] = useState(0);
  const [mintStatus, setMintStatus] = useState(false);
  // const [presaleState, setPresaleState] = useState(false);
  const presaleState = false;
  const tokenPrice1 = 3;
  const tokenPrice2 = 4;
  const tokenPrice3 = 5;

  const decreaseTokenNumber = () => {
    if (tokenNumber === 1) {
      return;
    }
    setTokenNumber(tokenNumber - 1);
  }

  const setMaxTokenNumber = () => {
    setTokenNumber(3);
  }

  const handleConnect = async () => {
    const walletResponse = await connectWallet();
    setWallet(walletResponse.address);
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet("");
        }
      });
    } else {

    }
  }

  /////timer

  useEffect(() => {
    async function fetchData() {
      const { address } = await getCurrentWalletConnected();
      setWallet(address);
      contract.methods.totalSupply().call().then((_supply) => {
        setSupply(_supply);
      }).catch((err) => console.log(err))
      addWalletListener();
    }
    fetchData();
  }, []);

  return (
    <div className="mint-container purple-text">
      <Navbar variant="dark" expand="md" className="container bg-black">
        <Navbar.Brand href="/">
          <Nav.Link href="#home"><img src="../images/logo.png" className="logo-img" alt="" /></Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-4" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-md-flex justify-content-between">
          <Nav className="flex-grow-1">
            <div className="d-flex mx-1 social-link">
              <div className="text-center text-white mr-3">
                <Button className="connect-btn mx-4 d-flex" onClick={handleConnect}>
                  <img className="mx-2 my-auto" src="../images/walleticon.png" alt="walleticon" />
                  {walletAddress.length > 0 ? (
                    "" +
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)
                  ) : (
                    <span>
                      Connect
                    </span>
                  )
                  }

                </Button>
              </div>
              <a href="https://discord.gg/" target="_blank" className="d-flex align-items-center" rel="noreferrer">
                <img className="icon-link" src="../images/discord.png" loading="lazy" width="32" alt="" />
              </a>
              <a href="https://twitter.com/" target="_blank" className="d-flex align-items-center px-4" rel="noreferrer">
                <img className="icon-link" src="../images/ship.png" loading="lazy" width="32" alt="" />
              </a>
              <a href="https://twitter.com/" target="_blank" className="d-flex align-items-center" rel="noreferrer">
                <img className="icon-link" src="../images/twitter.png" loading="lazy" width="32" alt="" />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row className="mt-160">
          <Col lg={5} md={6} className="p-3">
            <div className="mint-box p-5 mx-auto">
              <h3 className="text-center mint-title">Mint NFT</h3>
              {mintStatus ? (
                <div>
                  <p className="text-center mint-txt">Transaction in progress</p>
                  <p className="text-center mint-sm-txt text-white mb-4 trans-txt-mt">Your transaction is in progress</p>
                  <p className="text-center mint-sm-txt text-white trans-txt-mb">
                    Once your transaction is completed, head to<br></br>
                    <a className="casino-link" href="http://spartan.casino/nfts" rel="noopener noreferrer" target="_blank">spartan.casino/nfts </a>
                    to view your NFTs.
                  </p>
                  <a href="http://spartan.casino/nfts" rel="noopener noreferrer" target="_blank">
                    <button className="mint-btn my-1 w-100 mb-5">
                      View Transactions
                    </button>
                  </a>
                </div>
              ) : (
                <>
                  <p className="text-center mint-txt">10000 NFTs</p>
                  <div className="mint-div py-3  d-flex justify-content-between">
                    <h4 className="mb-0 p-2">Balance</h4>
                    <h4 className="mb-0 p-2">{supply} / 380 Sold Out</h4>
                  </div>
                  <div className="mint-div py-3 d-flex justify-content-between">
                    <h4 className="mb-0 p-2">Amount </h4>
                    <div className="mint-number">
                      <button className="min-add" type="button" onClick={decreaseTokenNumber}><span aria-hidden="true">-</span></button>
                      <h4 className="mb-0 mx-3">{tokenNumber}</h4>
                      {
                        presaleState ? [tokenNumber < 3 ? <button className="min-add" type="button">
                          <span aria-hidden="true">+</span></button> :
                          <button className="min-add" type="button" onClick={() => setTokenNumber(tokenNumber + 1)}>
                            <span aria-hidden="true">+</span></button>] :
                          [tokenNumber < 3 ? <button className="min-add" type="button" onClick={() => setTokenNumber(tokenNumber + 1)}>
                            <span aria-hidden="true">+</span></button> :
                            <button className="min-add" type="button" onClick={() => setTokenNumber(tokenNumber)}>
                              <span aria-hidden="true">+</span></button>
                          ]}
                    </div>
                    <button className="max-btn" onClick={() => setMaxTokenNumber()}>Max</button>
                  </div>
                  <div className="mint-div py-3 d-flex justify-content-between">
                    <h4 className="mb-0 p-2">Total</h4>
                    {presaleState ? <h4 className="mb-0 p-2">{tokenPrice1 * tokenNumber / 100} ETH</h4> : [tokenNumber <= 3 ?
                      <h4 className="mb-0 p-2">{tokenPrice3 * tokenNumber / 100} ETH</h4> : [tokenNumber <= 3 ?
                        <h4 className="mb-0 p-2">{tokenPrice2 * tokenNumber / 100} ETH</h4> : <h4 className="mb-0 p-2">{tokenPrice1 * tokenNumber / 100} ETH</h4>]]
                    }
                  </div>
                  <div className="mt-5 pt-4">
                    {walletAddress ? (
                      <button className="mint-btn my-1 w-100" onClick={() => setMintStatus(true)}>
                        mint
                      </button>
                    ) : (
                      <button className="unav-btn my-1 w-100" disabled>
                        unavailable
                      </button>
                    )}
                    <p className="text-center text-white mb-0">Make sure your metamask wallet is connected</p>
                  </div>
                </>
              )}
            </div>
          </Col>
          <Col lg={7} md={6} sm={12} className="text-center">
            <img className="gif-ani" src="../images/mint.gif" alt="" />
          </Col>
        </Row>
        <Row className="footer-top">
          <Col className="mt-5" md={4} sm={12}>
            <div className="footer-box p-3 text-center mx-auto">
              <img className="footer-icon" src="../images/eth.png" alt="" />
              <h2>10,000</h2>
              <h5 className="mb-5">NFT Membership Cards</h5>
            </div>
          </Col>
          <Col className="mt-5" md={4} sm={12}>
            <div className="footer-box p-3 text-center mx-auto">
              <img className="footer-icon" src="../images/wallet.png" alt="" />
              <h2>0.05ETH</h2>
              <h5 className="mb-5">Price per NFT</h5>
            </div>
          </Col>
          <Col className="mt-5" md={4} sm={12}>
            <div className="footer-box p-3 text-center mx-auto">
              <img className="footer-icon" src="../images/opt.png" alt="" />
              <h2>500K+</h2>
              <h5 className="mb-5">Potential Options</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}