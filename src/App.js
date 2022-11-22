import Button from './components/Button'
import Date from './components/Date'

function App() {
  
  // function getFetch(){
  //   const choice = document.querySelector('input').value


  //   fetch(`https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${choice}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //     })
  // }
  return (
    <div className='container mx-auto'>
      <div className='text-center mt-24 border'>
        <h1>Astronomy Picture of the Day</h1>
        <Date />
        {/* <input className='bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow h-8' type='date'></input> */}
        {/* <Button text={'Get Picture'}/> */}
        </div>
      <div>
        <img src='' alt=''></img>
        <iframe src='' frameBorder={'0'}></iframe>
      </div>
    </div>
    // <div className='container mx-auto'>
    //   <div className='flex justify-center mt-24 border h-40'>
    //     <h1>Astronomy Picture of the Day</h1>
    //     <div className='flex justify-center mt-24 border'>
    //       <input type='date'></input>
    //       <Button text={'Click for pic!'}/>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
