import Counter from './components/Counter'
import './globals.css'

export default function Home() {
  return (
    <>
      <div className='container mx-auto py-4 px-4'>
        <h1 className='text-2xl font-bold'>HTML, Tailwind, Javascript, Next.js</h1>
        <Counter />
      </div>
    </>
  )
}
