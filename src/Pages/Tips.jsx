import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Axios } from 'axios'

const Tips = () => {
  const tips = [
    {
      topic: "Eat a brain-healthy diet to support strong mental health",
      detail: "Foods that may support your mood include beans, legumes (e.g., lentils), fatty fish rich in omega-3s, nuts (e.g., walnuts, almonds, cashews and peanuts), avocados, dark leafy greens (e.g., spinach, kale and Brussels sprouts), and fruit (e.g., blueberries). Dark chocolate has also been found to be potentially beneficial for mental health. For the best dietary and nutritional advice, talk to a registered dietician."
    },
    {
      topic: "Make leisure and contemplation a priority",
      detail: "We can all be guilty of being 'too busy' to take some downtime, but leisure time is a necessity for emotional and mental health. Take some time to relax, contemplate, and pay attention to the positive things as you go about your day — even the small things. Write them down if you can, because they can be easy to forget. Then reflect on them later if your mood is in need of a boost. "
    },
    {
      topic: "Do something you enjoy",
      detail: "Try to make time to do an activity you like on a regular basis. This could be something small, like cooking a meal, ringing a friend or listening to music."
    },
    {
      topic: "Try to manage stress",
      detail: "If you're under a lot of pressure, you may start to feel overwhelmed or out of control. Stress can also cause physical side effects.      "
    },
    {
      topic: "Try mindfulness",
      detail: "Mindfulness is a way of paying attention to the present moment, using techniques like meditation, breathing exercises and yoga. It's been shown to help people become more aware of their thoughts and feelings. This means that instead of being overwhelmed by your feelings, it becomes easier to manage them."
    },
    {
      topic: "Make social connection — especially face-to-face — a priority",
      detail: "Phone calls and social networks have their place, but few things can beat the stress-busting, mood-boosting power of quality face-to-face time with other people, especially those you love and people who energize you. For several years, COVID-19 significantly limited this opportunity, however as restrictions continue to lift, this may be a good time to rebuild safe in-person interactions."
    },
    {
      topic: "Talk to someone you trust",
      detail: "Talk to a friendly face. If you have concerns, stresses or worries, sharing these with someone who cares is one of the most effective ways to calm your nervous system and relieve stress. And vice versa: Sometimes listening to others in a safe and supported way can help you develop wider perspectives. It is important that both parties feel comfortable to share and hear each other's thoughts, and if the worries are beyond this, consider speaking to a professional"
    },
    {
      topic: "Be Nice to Yourself",
      detail: "When you are feeling down, it is easy to be hard on yourself. While you might not be of the mind to congratulate or compliment yourself, try being compassionate. And here is a little bonus hint: If you really are struggling to be nice to yourself, do something nice for someone else. Then, compliment yourself on doing it! "
    },
    {
      topic: "Try to keep active",
      detail: "Try to build physical activity into your daily routine, if possible. It doesn't have to be anything big, like running a marathon. If you aren't used to being active, start off small and try to find something you enjoy."
    },
    {
      topic: "Steer away from harmful substances",
      detail: "Don’t use harmful substances such as drugs, kava, alcohol or tobacco to cope with what you’re feeling. Though these may seem to help you feel better in the short term, they can make you feel worse in the long run. These substances are also dangerous and can put you and those around you at risk of diseases or injuries."
    },
  ]


  return (
    <div className='tips'>
      {tips.map((tip, index) => {
        return (
          <div className='tip'>
          <h5>{tip.topic}</h5>
          <p>{tip.detail} </p>
          </div>
        )
      })}
    
     
    </div>
  )
}

export default Tips
