import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../../assets/Images/P4_Back.jpg'
import './Blog.css'

function Post4() {
  const content = {
    title: "The Way in All Things",
    subtitle: "Understanding the universal pattern of mastery and growth",
    backToHome: "Back to Blog"
  };

  return (
    <div className="container">
      <div className="left-column">
        <img className="illustration-image" src={backgroundImage} alt="Blog Illustration" />
      </div>
      <div className="right-column">
        <Link to="/blog" className="styled-link" style={{ marginBottom: '1rem', display: 'inline-block' }}>
          {content.backToHome}
        </Link>
        <header className="header">
          <h1 className="title">{content.title}</h1>
          <p className="subtitle">{content.subtitle}</p>
        </header>
        <div className="content">
          <h2 className="section-title">Find The Pattern</h2>
          
          <p className="paragraph">Once you understand the way broadly, you can see it in all things. The solution you seek so much, the special answer, they all reside within every process. For every process there is a time and a purpose, but its storyline, its development, how it expands and grows, this, always obeys the same pattern.</p>
          
          <p className="paragraph">For all arts the artist must endure the same challenges, the same breakthroughs, the same insights, and in the end, the same achievement. Every process has its own name, time and place. Though for the artist to reach the light it must always flow through the same path.</p>
          
          <p className="paragraph">The path of the artist is always the path of adventure, of rebellion, of challenge. To reach mastery and reap the fruit of the intended seed, one must go though the way. The way is a narrow path, but clear for those who can calm themselves enough to see the right colors, and hear the right calls.</p>
          
          <p className="paragraph">Allow it to talk to you, allow it to show you the way, in all modalities, the way is surely there to be learned.</p>
          
          <h2 className="section-title">Sailing</h2>
          
          <p className="paragraph">I always analyzed how the process of learning and mastering a new interest was very similar, and how in that specific little universe, the fundamental questions to be answered were the same as to the great game of life.</p>
          
          <p className="paragraph">For a time I got really into sailing, and every weekend would go into this world of sailing, most of the time it would be me and the boat, and me trying to improve on this thing, to get stronger, to learn how to steer better, to tack faster, to optimize every little part of the sail. And though this you could ask yourself, why am I doing this? What's the purpose of the sail, what makes it fun? How do I master this thing?</p>
          
          <p className="paragraph">The way of iterating on the process, everytime getting stuck in your progress, searching for the limiting factor, to then breakthrough and see a period of expansion, followed by overexpansion into a new limiting factor, taking you again back to the drawing board, finding and refining the fundamental principles of this craft, going deeper and deeper into it.</p>
          
          <p className="paragraph">You see, the questions of this mini universe of the sail, are the same problems as our big universe, and our human condition. Questioning yourself on this, and being conscious about your interactions, intent, and desires will make you learn the way in even the smallest of things. Is it the destination or the journey that matters in the sail? Why do I need to get better and compete? How do I take the most out of this? Presence, purpose, meaning, victory, defeat, exploration, comfort, defiance and fear. What do these things make of me? And what do I make of them?</p>
          
          <p className="paragraph">It's not about the sail, or the violin, the piano, the dancing and the painting. It is about learning what this is all about, finding and understanding the process of processes, the life of lifes and the nature of nature.</p>
          
          <p className="paragraph">For those who listen, it will always talk back.</p>
        </div>
        <Link to="/blog" className="styled-link" style={{ marginTop: '1rem', display: 'inline-block' }}>
          {content.backToHome}
        </Link>
      </div>
    </div>
  )
}

export default Post4
