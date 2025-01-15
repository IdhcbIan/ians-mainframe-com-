import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../../assets/Images/P3_Back.jpg'
import './Blog.css'

function Post3() {
  const content = {
    title: "Can you still see the human?",
    subtitle: "Exploring the human flame and the magic of existence",
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
          <h2 className="section-title">Flames</h2>
          
          <p className="paragraph">Clouded and obfuscated by concepts and ideas, lies a human flame. Under the ocean of nationalities, beliefs, classifications, systems of symbols and ideologies, lies a human flame. The flame of experience, the flame of life, the flame that warms ideas, ideas which if too far from the flame die in the cold, when you look into the eyes of another human, can you still see the flames?</p>
          
          <p className="paragraph">Like a bonfire, that gives life to the platonic world of the shadows, and meaning to the cold world of stone and atoms, will this light shine through? Can you still see the human? Can you still see the flames?</p>
          
          <p className="paragraph">Ideas are parasitic things, they live off of the warmth of human experience, the human flame, an idea left alone is in the dark, forgotten or undiscovered, ideas populate the human experience, they connect the human flame with the outside world. Ideas, like a prism, turn the raw light of truth into specific colors and shapes, reflecting the object of truth in its best attempt. The truth and the correct connections and shapes have always existed but the ideas, the interpretation can only shine when fed light.</p>
          
          <p className="paragraph">And there lies a human soul, most of our lives we look at the reflections of one's prisms and shadows of one's boxes and classifications for concepts, but rarely do we see the flame. Rarely do we get to watch the burning fire of experience.</p>
          
          <p className="paragraph">All absolute ideas, all transcendental ideologies, all commandments, laws and ways of life, are merely stealing heat from the flame, they are nothing alone, for there is no light for them to be seen. Every system of symbols disappears without any resistance if it is simply left alone, for there are no flames who warm it or remember it.</p>
          
          <p className="paragraph">Seeing ideas in this way is a very interesting thing, for now you see the human, the flame as more valuable than any idea or any belief. This does not make it so the object of truth dies as its left alone, for the laws of the universe and how it propagates will remain constant weather there is someone to see it or not, but, the symbols, the interpretations we make out of it, out of the object of truth, the reflections we draw, those require the light and the heat of a human flame.</p>
          
          <h2 className="section-title">You don't need to formalize magic</h2>
          
          <p className="paragraph">In this book, we try to formalize truth, good and evil, thoughts and beliefs, experiences and dreams, consciousness and soul, but though all this neurotic search for meaning, we forget to watch the magic unfold, we try to explain it and make a system out of everything, leaving no holes in our understanding. But here I tell you, leave some space for the mystic and the unexplainable, the magic and the beautiful, the true and the lovely, just for a moment, look around, and see how the world almost seems to suspend itself, when you allow it to just exist there.</p>
          
          <p className="paragraph">Suspend yourself, only for a moment from the search for truth, for meaning, and allow it to talk to you, experience, reality, heat, flames. For a second, stretch out the tips of your blazing experience, your inner flame, and watch it burn as the firewood runs out, as the colors of the light shine with the splendor of the human aesthetic.</p>
        </div>
        <Link to="/blog" className="styled-link" style={{ marginTop: '1rem', display: 'inline-block' }}>
          {content.backToHome}
        </Link>
      </div>
    </div>
  )
}

export default Post3
