# ETH Domain Platform

This project was done following the tutorial by "DApp University" which you can find here: [YouTube](https://www.youtube.com/watch?v=kUTdr1dStxA&list=PLk7ZYbFb3ivvE6VfcjVC3GLFKEc3dxF3u&index=80)
<br/>
Here is the code the tutorial started from: [GitHub Repo](https://github.com/dappuniversity/eth_daddy/tree/starter_code)

It is a decentralized domain platform, inspired by GoDaddy and Ethereum Name Service and shows different domains that can be purchased.
The project is now deployed on Goerli Testnet.

## Technology Stack & Tools

- Solidity (Writing Smart Contracts)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)

## How it works

If you want to try it out yourself follow this [Link](https://paulsimroth.github.io/eth_domains/)

If you want to clone the repo and use it in your local environment follow these steps.

1. clone this repository
2. make sure you installed all dependencies:
```$ npm install```
3. start your local hardhat node: 
```$ npx hardhat node```
4. deploy the contract: 
```$ npx hardhat run ./scripts/deploy.js --network localhost```
5. start frontend:
```npm run start```

## Disclaimer
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
