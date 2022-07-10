import{ useState} from 'react'
import Head from 'next/head'
import Web3 from 'web3'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'
export default function Home() {
const [web3, setWeb3] = useState()
const[address , setAddress] = useState() 
const connectWalletHandler = async() =>{
  if(typeof window !== "undefined" && typeof window.ethereum !== "undefined")
  {
    try{
        await window.ethereum.request({method: "ethh_requestAccounts"})
        const web3 = new Web3(window.ethereum)
        setWeb3(web3)

        const accounts = await web3.eth.getAccounts()
        setAddress(accounts[0])

    }
    catch(err)
    {
      console.log(err.message)
    }
  }
  else
  {
    console.log("Please install MetaMask");
  }

}


  return (
    <div>
      <Head>
        
        <title>GenZ Lottery</title>
        <meta name="description" content="Lottery game deployed on the ethereum blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <nav className="navbar is-light has-shadow mt-0 mb-4">
         <div className="container">
           <div className="navbar-brand has-shadow is-dark">
             <h1>
             GenZ Lottery
             </h1>
           </div>
           <div className="navbar-end">
             <button onClick={connectWalletHandler} className="button is-link">
               Connect Wallet
             </button>
           </div>
         </div>
       </nav>
       <div className="container">
         <section className="mt-5">
           <div className="columns">
              <div className="column is-two-thirds">
                <section className='mt-5'>
                  <p className="has-text-white">Enter the lottery by sending 0.01 Ether </p>
                  <button className='button is-link is-large is-light mt-3'>Buy ticket</button>
                </section>
                <section className='mt-6'>
                  <p className="has-text-white"><b>Admin only:</b> Check Winner </p>
                  <button className='button is-primary is-large is-light mt-3'>Check Winner</button>
                </section>
              </div>
            <div className='column is-one-third'>
             <section className='mt-5'>
               <div class='card'>
               <div className='card-content'>
                <div className='content'>
                  <h2>Lottery History</h2>
                  <div className='history-entry'>
                    <div>Recent winner:</div>
                    <div>
                      <a href='https://etherscan.io/address/0x570Ff09ee33E54B729CED455E7EFF6bE6aEA206d' target="_blank" >0x570Ff09ee33E54B729CED455E7EFF6bE6aEA206d</a></div>
                  </div>
                </div>
               </div>
            </div>
             </section>
             <section className='mt-5'>
             <div class='card'>
               <div className='card-content'>
                <div className='content'>
                  <h2>Pot</h2>
                  <p>10 Ether</p>
               </div>
               </div>
               </div>
             </section>
             <section className='mt-5'>
             <div class='card'>
               <div className='card-content'>
                <div className='content'>
                  <h2>Players (1)</h2>
                  <div>
                      <a href='https://etherscan.io/address/0x570Ff09ee33E54B729CED455E7EFF6bE6aEA206d' target="_blank" >0x570Ff09ee33E54B729CED455E7EFF6bE6aEA206d
                      </a>
                  </div>
                </div>
              </div>
              </div>
             </section>
            </div>
           </div>
           
         </section>
       </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2022, Developed By: Semafour </p>
      </footer>
    </div>
  )
}
