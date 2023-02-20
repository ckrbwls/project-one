import './App.css';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Youtube  from './channel/Youtube';
import Login from './channel/Login';
import Web3 from 'web3';
import React, { useEffect, useState } from 'react';
import Logo from "../src/assets/assets_header/Logo.png";
import Abi from './Abi';
import Chating from './channel/Chating';

function App () {
  const [web3, setWeb3] = useState('');
  const [account, setAccount] = useState('');
  const [user, setUser] = useState('');
  const [posts, setPosts] = useState([]);
  const [loginStart, setLoginStart] = useState(false);


  useEffect(()=>{
    if(typeof window.ethereum != "undefined"){
      try{
          const web = new Web3(window.ethereum);
          setWeb3(web);
      }catch(err){
        console.log(err);
      }
    }
  },[]);

  const connectWallet = async()=>{
    const accounts = await window.ethereum.request({
      method : "eth_requestAccounts",
    })
    setAccount(accounts[0]);
    setUser(accounts[0]);
    GetPost();
  }

  const GetPost = async()=>{
    const ContractAddress = '0xbE39d631B6888177e87440Bd607821E751942A5b';
    const PostContract = await new web3.eth.Contract(Abi,ContractAddress);
    let Post = await PostContract.method.getMyPosts().call();

    setPosts(Post);
    console.log(Post);
  } 

  return (
 <>
 <div className='app'>
 <BrowserRouter>
  <div className='app__header'>
          <div className='app__headerWrapper'>
              <img
                src={Logo}
                alt="유튜브"
              />
              <div >{loginStart ? "접속주소 : " : ""}{account} </div>
              <div className='app__headerButtons'>
                  <button  onClick={()=>{
                    connectWallet(); 
                    setLoginStart(true);
                  }} className='primary__button'>login</button>
                 
              </div>
          </div>
       </div>
    
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Youtube' element={<Youtube />} />
          <Route path='/Chating' element={<Chating />} />
      </Routes>
    </BrowserRouter>
    </div>
 </>
  )
}

export default App;