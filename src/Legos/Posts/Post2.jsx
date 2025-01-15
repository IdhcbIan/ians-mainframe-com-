import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../../assets/Images/P2_Back.jpg'
import './Blog.css'

function Post2() {
  const content = {
    title: "Purpose and Presence",
    subtitle: "Exploring the balance between human pursuit and experience",
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
          <blockquote className="quote">"Once you understand the way broadly, you can see it in all things"<br />- Myamoto Musashi</blockquote>
          
          <p className="paragraph">What is it that we are searching for? What is it that we value? Our world is divided in a great paradigm, on one side we have those who value the felt presence of human experience, and on the other side the age long search for the human pursuit, the expansion of the human consciousness and grasp upon the universe and the truth.</p>
          
          <p className="paragraph">Those who believe that presence should be the ultimate goal see little interest in expanding the sciences, growing the economy, conquering other worlds, and other pursuits of the kind, for they see that we already have the answers, we have the scientific knowhow, the food, the music and the resources to make this world a paradise, where we are all free to be present and enjoy the heat of the human experience.</p>
          
          <p className="paragraph">On the other side we have the long olympic march of the human grasp on nature, the expansionist view of the human condition, of the human consciousness, for generations we pass the torch, we feed it the flames of out experience, and slowly we increase our hold upon the world around us, but, not knowing what should be the destination, or even, when and where to stop.</p>
          
          <p className="paragraph">Many who believe in one of these pursuits or even in some combination or derivation of the same, believe that this is their calling, their purpose and how they will find happiness.</p>
          
          <p className="paragraph">But notice that none of the extremes are completely correct, and again the solution is found on a complex connection of the principles of both sides, both solutions, which requires us to go "one level" up in our abstraction, understanding and consciousness. In the expansionist view we walk a path without a destination, many times driven by the wrong reasons. In my belief, if this path does not put the human presence, the human flame as its goal then it's mostly a frivolous endeavor. And now if you chase purely experience you will drop the torch, you will lack the expansion of consciousness and the good of the understanding that comes with it, you will have mastered nothing, for the mastering requires the momentary sacrifice of this felt presence of immediate experience.</p>
          
          <p className="paragraph">You see we fall back and find the solution to one extreme as the cornerstone of the other side's ideas. How then, can we integrate both sides? how can we create a way of merging the human pursuit of the ages, the expansion of the human consciousness with the value of the human flame, how can we make purpose and presence dance together?</p>
          
          <h2 className="section-title">Beauty and Strength</h2>
          
          <blockquote className="quote">"So many people try to invent life without realizing that it was already invented"</blockquote>
          
          <p className="paragraph">This is one of my favorite quotes from the genius and complex book Dune. The world is caught up, searching and creating definitions for life, without realizing that however they decide to slice it, and define it, it can only be a subset of life, not the whole thing. In this we create cults, religions, countries, flags, only to try and make a life in and out of.</p>
          
          <p className="paragraph">Acting is already a decadence on the human soul, any philosophy of life who tries to push you into acting, will remove you from the focus of being. You must only be, for being is the ultimate act, being is expression, being is presence.</p>
          
          <p className="paragraph">What then shall we do? What is it that we must strive and search for?</p>
          
          <p className="paragraph">Here I shall propose a new way of thinking, a new way, don't search for happiness, search for beauty, and expression.</p>
          
          <p className="paragraph">Think of a musician, mastering a song in the violin, in the beginning he is slow, and is focused on the notes and the tempo, but as he masters the physical part of the music, he allows himself to enter a state where his brain and body move effortlessly into the notes, while he focuses only on the emotion, and in this expresses himself through the music, the same can be said for sports, a ballerina must first master the steps, memorize the steps, and get her body used to the movements, to then when mastery of the physical part of the dance is complete, express herself through the dance. The same with the painter and the sculptor, mastery must be reached for the capacity to honestly express themselves to be attained in fully.</p>
          
          <p className="paragraph">Humans are incapable of expressing themselves in the pure form, they must do it though something, whatever it may be, but in this moment, in this expression is when they reach the state of greatest presence, and really take the marrow out of life, to express yourself through your craft is to be fully alive, as Charles Bukowski said, "You will be alone with the gods".</p>
          
          <p className="paragraph">Viewing beauty as the expression of a strength, and strength being mastery in a certain modality, is in my opinion a much better goal than either solely purpose or presence, both with all their promised forms of unattainable completeness. Seaking this beauty, in the form of honest expression of the human soul, is a much more clear form of freeing the human soul and unbottling its flame when transcending the physical through a mastered craft.</p>
          
          <p className="paragraph">This is something you can strive towards, to find your craft expressing yourself honestly though something, not how people might want you to express yourself, but expressing yourself honestly. This can be reached in all the modalities of life, and in my opinion presence and experience itself is something to be mastered.</p>
          
          <p className="paragraph">How your interpretation of reality is organized is something you can shape and work on, through the mastery of presence, you can express yourself not only in the modalities but in a more broader and powerful sense, through being. Mastering presence is in my opinion the way to mastering the soul. He who has mastered presence itself can express himself through simply being.</p>
          
          <p className="paragraph">This is very hard to understand, but, think of the net of the object of truth in your mind, the way you connect the two sides of philosophy, it may not be the complete truth, but this interpretation of the totality is in itself a craft, the manipulations of the generators of ideas, and the sculpting of the interpretation of reality you create, is in itself a way to express yourself though the mastery of a craft.</p>
          
          <p className="paragraph">By manipulating the colors of his experience one can make reality the canvas in which he paints his soul, not only expressing it through the post mastery transcendence of the physical modalities, but also on the totality of his way of being.</p>
        </div>
        <Link to="/blog" className="styled-link" style={{ marginTop: '1rem', display: 'inline-block' }}>
          {content.backToHome}
        </Link>
      </div>
    </div>
  )
}

export default Post2
