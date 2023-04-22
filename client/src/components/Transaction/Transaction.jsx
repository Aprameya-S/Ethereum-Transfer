import React, { useContext } from 'react'
import { Input } from '../../components'
import { TransactionContext } from '../../context/TransactionContext'

const Transaction = () => {
  const { connectWallet, currentAccount, formData, handleChange, sendTransaction } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, message, keyword } = formData;
    e.preventDefault()

    if(!addressTo || !amount || !message || !keyword) return;

    sendTransaction();
  }

  return (
    <div className='flex flex-col gap-5  mt-[50px] bg-slate-300 p-[40px] m-[5vw] rounded-[10px] max-w-[600px]'>
      <h1 className='text-[25px] underline'>Transaction</h1>
      <button
        type='button'
        onClick={connectWallet}
        className="text-white bg-blue-700 rounded-[100px] px-6 py-1 text-[20px]"
      >
        {(currentAccount)?<p>Connected to {currentAccount}</p>:<p>Connect wallet</p>}
      </button>
      <Input placeholder="Address to" name="addressTo" type="text" handleChange={handleChange} />
      <Input placeholder="Amount in ETH" name="amount" type="number" handleChange={handleChange} />
      <Input placeholder="Message" name="message" type="text" handleChange={handleChange} />
      <Input placeholder="Keyword" name="keyword" type="text" handleChange={handleChange} />
      <button
        type='button'
        onClick={handleSubmit}
        className="text-white bg-blue-700 rounded-[100px] px-6 py-1 text-[20px]"
      >
        Send
      </button>

    </div>
  )
}

export default Transaction