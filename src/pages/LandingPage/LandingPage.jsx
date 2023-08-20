import React from 'react'
import Footer from '../../components/Footer';

const LandingPage = () => {
  return (
    <section>
      <div>LandingPage</div>
      <a href="/sign-in">Go to LogIn page</a> <br />
      <a href="/sign-up">Go to Register page</a>
      <Footer/>
    </section>
  )
}

export default LandingPage;