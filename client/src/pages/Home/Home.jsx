import React, { useContext } from 'react'
import { Input, Transaction } from '../../components'
import { TransactionContext } from '../../context/TransactionContext'

const Home = () => {

  return (
    <div>
      <h2>Home</h2>
      <Transaction />
    </div>
  )
}

export default Home