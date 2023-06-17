import { Coins } from '@/components/Coins'
import Image from 'next/image'
import Link from 'next/link'

async function getCoins() {
  const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10', {
    headers: {
      'X-CMC_PRO_API_KEY': 'bb09252d-e74b-4fa2-880e-a71c46e8e317'
    }
  })
  const coins = res.json()
  return coins
}

export default async function Home() {
  const coins = await getCoins()
  console.log(coins, 'coins')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      coins
      <Coins coins={coins.data}/>
    </main>
  )
}

