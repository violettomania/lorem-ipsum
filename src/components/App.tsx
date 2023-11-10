export default function App() {
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
            max='8'
            value='2'
            onChange={() => {}}
          />
          <button className='btn'>generate</button>
        </form>
        <article className='lorem-text'>
          <p>
            Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
            Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
            Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
            drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
            candy gummi bears chocolate bar cake cookie. Cupcake muffin danish
            muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé
            chocolate cake pastry brownie. Oat cake halvah sweet roll cotton
            candy croissant lollipop. Macaroon tiramisu chocolate bar candy
            candy carrot cake jelly sweet. Gummies croissant macaroon dessert.
            Chocolate cake dragée pie.
          </p>
          <p>
            Next level tbh everyday carry, blog copper mug forage kitsch roof
            party pickled hammock kale chips tofu. Etsy shoreditch 8-bit
            microdosing, XOXO viral butcher banh mi humblebrag listicle woke
            bicycle rights brunch before they sold out ramps. Twee shabby chic
            taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips
            typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical
            banh mi narwhal echo park cronut.
          </p>
        </article>
      </section>
    </main>
  );
}
