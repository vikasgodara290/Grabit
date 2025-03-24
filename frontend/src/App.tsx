import './App.css'
import Card1 from './components/Card1'

function App() {

  return (
    <>
      
      <div className='flex p-20'>
        <Card1 icon='fi fi-rr-user' topHeading='Account' bottomHeading='LOGIN'/>
        <Card1 icon='fi fi-rr-heart' topHeading='Wishlist' bottomHeading='3-ITEMS'/>
        <Card1 icon='fi fi-rr-shopping-bag' topHeading='Cart' bottomHeading='3-ITEMS'/>
      </div>
    </>
  )
}

export default App
