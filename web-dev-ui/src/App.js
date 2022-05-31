import Navbar from './Navbar'
import Welcome from './Welcome'
import MemberPages from './MemberPages'
import About from './About'
import FAQ from './FAQ'

export default function App() {
  return (
    <main>
      <Navbar />
      <div className='container mx-auto'>
        <Welcome />
        <MemberPages />
        <div className='flex mt-24'>
          <About />
          <FAQ />
        </div>
        <div className='flex mt-24 justify-center text-center'>
          <p>interested?<br/>join here.</p>

        </div>
      </div>
    </main>
  );
}