import React from 'react'
import Features from '../features/Features'
import './gpt3.css'
export default function Gpt3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Features title="What is GPT3" text ="Generative Pre-trained Transformer 3 (GPT-3) is an auto-regressive language model that uses deep learning to produce human-like text. GPT 3 can write poetry, translate text, chat convincingly,
         and answer abstract questions. It’s being used to code, design, and much more."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
        The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
<div className='gpt3__whatgpt3-container'>
  <Features title="Chatbots" text="The GPT-3 model can generate texts of up to 50,000 characters, with no supervision. It can even generate creative Shakespearean-style fiction stories in addition to fact-based writing."/>
  <Features title="Knowledgebase" text="It’s over an exaflop day of computer power. One second of exaflop computer power would allow you to run a calculation per second for over 37 Trillion years."/>
  <Features title ="Education" text="It can even generate creative Shakespearean-style fiction stories in addition to fact-based writing. This is the first time that a neural network model has been able to generate texts at an acceptable quality"/>
</div>
    </div>
  )
}
