import React from 'react';
import text from '../data';

export default function App() {
  const [paragraphCount, setParagraphCount] = React.useState(1);
  const [displayedParagraphs, setDisplayedParagraphs] = React.useState<
    string[]
  >([]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDisplayedParagraphs(text.slice(0, paragraphCount));
  };

  return (
    <main>
      <section className='section-center'>
        <h4>tired of boring lorem ipsum?</h4>
        <form className='lorem-form'>
          <label htmlFor='amount'>paragraphs:</label>
          <input
            type='number'
            name='amount'
            id='amount'
            min='1'
            step='1'
            max={text.length}
            value={paragraphCount}
            onChange={(e) => setParagraphCount(parseInt(e.target.value))}
          />
          <button className='btn' onClick={handleClick}>
            generate
          </button>
        </form>
        <article className='lorem-text'>
          {displayedParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </section>
    </main>
  );
}
