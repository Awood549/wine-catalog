import React from 'react';
import useForm from './formBlock.js'
import './forms.css'
  //https://www.youtube.com/watch?v=sfp5K_5GHNg

 const AddWine = props => {

  let state = {
        day: '',
        date: '',
        theme: '',
        wines: [],
        varietals: {},
        region: {},
     }

  const [handleChange, handleSubmit] = useForm(formBuilder
    )


  function formBuilder(props){

    console.log(props)
    return true

  }
  function ratingsInput(){

    return(
      <>
      <label className= 'rating'>
      <h4>Crew Rating</h4>
    1<input onChange = {handleChange} type= "radio" name= 'rating' value='1'></input>
    2<input onChange = {handleChange} type= "radio" name= 'rating' value='2'></input>
    3<input onChange = {handleChange} type= "radio" name= 'rating' value='3'></input>
    4<input onChange = {handleChange} type= "radio" name= 'rating' value='4'></input>
    5<input onChange = {handleChange} type= "radio" name= 'rating' value='5'></input>
      </label>
    </>
    )
  }
  function nameAndNotesInput(){
    return(      
      <>
    <input onChange = {handleChange} className= 'wineName' type= 'text' name= 'sampledWines' placeholder= 'Wine'></input>
    <input onChange = {handleChange} className='wineName' type= 'text' name= 'notes' placeholder= 'Additional Notes'></input>
    </>
    )
  }

  
  function countryOfOrigin(){
    let values = []
    let markup;
    for(let i=0; i <  values.length; i++){
    }

    return(
      <>
    <label> 
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'domestic'></input><p className='countryRadio'>Domestic</p><br></br>
      </label>
      <label> 
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'france'></input><p className='countryRadio'>France</p>
      </label>
      <label>
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'italy'></input><p className='countryRadio'>Italy</p>
      </label>
      <label>
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'spain'></input><p className='countryRadio'>Spain</p>
      </label>
      <label>
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'germany'></input><p className='countryRadio'>Germany</p>
      </label>
      <label>
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'chile'></input><p className='countryRadio'>Chile</p>
      </label>
      <label>
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'argentina'></input><p className='countryRadio'>Argentina</p>
      </label>
      <label>
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'newZealand'></input><p className='countryRadio'>New Zealand</p>
      </label>
      <label> 
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'australia'></input><p className='countryRadio'>Australia</p>
      </label>
      <label> Country Not Listed: 
      <input onChange = {handleChange}  type= 'text' name= 'country' placeholder= 'Other...'></input>
      </label>
      </>
      )
  }
  function varietalsInput(){

    return(
      <>
      <label className= 'varietal'>
      <h4>Varietal</h4>
      <label className='varietalChoices'>
      <p>Syrah</p>
      <input onChange = {handleChange} type= 'checkbox' name= 'varietals' value='syrah'></input>
      <p>Cabernet Sauvignon</p>
      <input onChange = {handleChange} type= 'checkbox' name= 'varietals' value='cabernet'></input>
      <p>Merlot</p>
      <input onChange = {handleChange} type= 'checkbox' name= 'varietals' value='merlot'></input>
      <p>Red Blend</p>
      <input onChange = {handleChange} type= 'checkbox' name= 'varietals' value='redBlend'></input>
      <p>Zinfandel</p>
      <input onChange = {handleChange} type= 'checkbox' name= 'varietals' value='zinfandel'></input>
      </label>
      </label>
      </>
    )
  }

  return(
    <>
    {/* Day of the week input */}
    <h4>Day of Tasting</h4>
    <form onSubmit = {handleSubmit}>
      <label htmlFor = 'monday'> 
      <input onChange = {handleChange} type = 'radio' id='monday' name='day' value = 'monday' ></input>
      Monday</label>
      <label htmlFor= 'wednesday'>
      <input onChange = {handleChange} type= 'radio' id= 'wednesday' name='day'  value = 'wednesday'></input>
         Wednesday</label>

         {/* Date Input */}
      <h4>Date of Tasting</h4>
      <input onChange = {handleChange} type = 'date' id = 'date' name = 'date'></input>

      {/* Theme Input */}
      <h4>Tasting Theme</h4>
      <input onChange = {handleChange} type= 'text' placeholder = 'Tasting Theme Here!' id = 'theme' name = 'theme' ></input>

      {/* Wines Sampled Inputs */}
      <h4>Wines Tasted</h4>
      <label className= 'eachWine'>
      {nameAndNotesInput()}
      {ratingsInput()}
      {varietalsInput()}
      </label>
      <label className= 'eachWine'> 2.
      {nameAndNotesInput()}
      {ratingsInput()}
      {varietalsInput()}
      </label>
      <label className= 'eachWine'> 3.
      {nameAndNotesInput()}
      {ratingsInput()}
      {varietalsInput()}
      </label>
      <label className= 'eachWine'> 4.
      {nameAndNotesInput()}
      {ratingsInput()}
      {varietalsInput()}
      </label>

      {/* Country input */}
      <label className= 'countryOrigin'>
      <h4>Country of Origin</h4>
      {countryOfOrigin()}
      </label>
      <button> Submit Tasting</button>
      </form>
      </>
  )
}

export default AddWine