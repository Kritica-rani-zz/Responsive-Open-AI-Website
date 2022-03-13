import React from 'react'
import Features from '../features/Features'
import './gpt3.css'
export default function Gpt3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Features/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
        The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
<div className='gpt3__whatgpt3-container'>
  <Features/>
  <Features/>
  <Features/>
</div>
    </div>
  )
}
