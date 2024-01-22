//pages/index.js
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import App from '../components/App';


function Home() {
  return (
    <>
      <Head>
        <title>Shotless Game</title>
        <meta name="shotless" content="shotless" />
        <meta name="pick a random person" content="pick a random person" />
        <meta name="who will pay the bill?" content="who will pay the bill?"/>
        <meta name="Choose a random person to pay the bill" content="Choose a random person to pay the bill"/>

        <meta name="keywords" content="Shotless app, random bill payer, pick random person, random name generator, bill splitting game, random selection game, choose a person randomly"/>
        <meta name="description" content="Shotless Game - Randomly Choose a Person to the bill or assigns random tasks"/>

        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"/>

        <noscript>Make decisions fun with Shotless Game! Let our Shotless app choose who pays the bill or assigns random tasks..</noscript>
        <noscript>Choose a random person to pay the bill, with Shotless game</noscript>
        <noscript>Who will pay the bill</noscript>

        {/* <link rel="icon" href="/shotlessIcon.ico" /> */}
        <link rel="icon" href="/go.ico" />

        <link rel="canonical" href="https://shotlessapp.com" />


        {/* GOOGLE ADSENSE CODE */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4294726482603280" crossorigin="anonymous"></script>

        {/* SEO PERFORM */}
        <div className='hidden' style={{display: 'none'}}>
          <h2 >Who will pay the bill</h2>
          <h3 >Pick a random person to pay the bill</h3>
          <h4 >Choose a random person to pay the bill, with Shotless game</h4>
          <h5 >Draw names to pay the bill</h5>
          <h6 >This game will generate a random player from a list of player that will be responsible to pay the restaurant or coffee bill</h6>
        </div>
        <h2 className='hidden'>Generate a random person to pay the bill</h2>
      </Head>
      <main>
        <App />
      </main>
      
    </>
  );
}


// function Home({ serverRenderedContent }) {
//   const [clientRenderedContent, setClientRenderedContent] = useState('');

//   useEffect(() => {
//     // Fetch additional content on the client side
//     fetch('/api/app')
//       .then((res) => res.text())
//       .then((data) => setClientRenderedContent(data));
//   }, []);

//   return (
//     <>
//     <Head>
//       <title>Shotless Game</title>
//     </Head>
//     <main>
//       <div>
//         <div>
//           <button onClick={() => {alert("deu")}}>Ola</button>
//           <h2>Server-Side Rendered Content (Next.js)</h2>
//           <div dangerouslySetInnerHTML={{ __html: serverRenderedContent }} />
//         </div>
//         <div>
//           <h2>Client-Side Rendered Content (Next.js)</h2>
//           <div dangerouslySetInnerHTML={{ __html: clientRenderedContent }} />
//         </div>
//       </div>
//     </main>
//     </>
//   );
// }

// export async function getServerSideProps() {
//   // Fetch server-side rendered content during SSR
//   const res = await fetch('http://localhost:3000/api/app');
//   const serverRenderedContent = await res.text();

//   // Pass data to the page component
//   return {
//     props: { serverRenderedContent },
//   };
// }

export default Home;
