import Navbar from './Navbar'
import Welcome from './Welcome'
import MemberPages from './MemberPages'

export default function App() {
  return (
    <main>
      <Navbar />
      <div className='container mx-auto '>
        <Welcome />
        <MemberPages />
      </div>
    </main>
  );
}