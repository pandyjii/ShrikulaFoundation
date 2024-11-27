import React from 'react'
import { KlfCalender } from './KlfCalender'
import { Program8thDec } from './Program8thDec'
import { KashmirLitFest } from './KashmirLitFest'
import { QRCodeContribution } from './QRCodeContribution'

export const KLF2024 = () => {
  return (
    <div className=''>
      <KlfCalender/>
      <Program8thDec/>
      <div className='mt-10'><KashmirLitFest/></div>
      <div className='mt-10'><QRCodeContribution/></div>
    </div>
  )
}
