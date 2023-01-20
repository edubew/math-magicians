import React from 'react';

const Home = () => (
  <div className="home__container">
    <h1>Welcome to our page!</h1>

    <div className="content">
      <p>
        Mathematics is the abstract science of number, quantity, and space,
        either as abstract concepts (pure mathematics), or as applied to other
        disciplines such as physics and engineering (applied mathematics):
      </p>
      <p>
        <b>Fun Fact:</b>
        {' '}
        There are only two prime numbers in the whole of
        mathematics which end in a 2 or a 5. Those numbers? 2 and 5, funnily
        enough.
      </p>
    </div>
  </div>
);

export default Home;
