'use client';

import React from 'react'

type Coin = {
  id: number,
  name: string,
}

export function Coins({ coins }: { coins: Coin[] }) {
  return (
    <div>
      {coins.map((coin: Coin) => (
        <div key={coin.id}>
          {coin.name}
        </div>
      ))}
    </div>
  )
}