import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Eduardo Carvalho</span>
              <span className="place">Londrina</span>
            </div>

            <img src={more} alt="More"/>
          </header>

          <img src="http://localhost:3333/files/home.jpg" alt=""/>

          <footer>
            <div className="actions">
              <img src={like} alt=""/>
              <img src={comment} alt=""/>
              <img src={send} alt=""/>
            </div>

            <strong>10 curtidas</strong>

            <p>
              Um post muito top da OmniStack!
              <span>#react #omnistack #top</span>
            </p>
          </footer>
        </article>
        
        <article>
          <header>
            <div className="user-info">
              <span>Eduardo Carvalho</span>
              <span className="place">Londrina</span>
            </div>

            <img src={more} alt="More"/>
          </header>

          <img src="http://localhost:3333/files/home.jpg" alt=""/>

          <footer>
            <div className="actions">
              <img src={like} alt=""/>
              <img src={comment} alt=""/>
              <img src={send} alt=""/>
            </div>

            <strong>10 curtidas</strong>

            <p>
              Um post muito top da OmniStack!
              <span>#react #omnistack #top</span>
            </p>
          </footer>
        </article>
      </section>
    )
  }
}

export default Feed;
