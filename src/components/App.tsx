import React from 'react';
import text from '../data';

export default function App() {
  const [paragraphCount, setParagraphCount] = React.useState('1');
  const [displayedParagraphs, setDisplayedParagraphs] = React.useState<
    string[]
  >([]);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const count = Math.round(parseFloat(paragraphCount));
    if (isNaN(count)) {
      alert('Please enter a valid number.');
    }
    // if the user enters a floating point number, display the rounded number
    setParagraphCount(count.toString());
    setDisplayedParagraphs(text.slice(0, count));
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
            onChange={(e) => setParagraphCount(e.target.value)}
          />
          <button className='btn' onClick={handleSubmit}>
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
