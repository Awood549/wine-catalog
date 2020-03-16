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
      <label>1
    <input type= "radio" name= 'rating' value='1'></input>
      </label>
      <label>2
    <input type= "radio" name= 'rating' value='2'></input>
      </label>
      <label>3
    <input type= "radio" name= 'rating' value='3'></input>
      </label>
      <label>4
    <input type= "radio" name= 'rating' value='4'></input>
      </label>
      <label>5
    <input type= "radio" name= 'rating' value='5'></input>
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

      {/* Varietals Input */}
      <h4>Wines Tasted</h4>
      <label> 1.
      <input type= 'text' name= 'sampledWines' placeholder= 'Wine'></input>
      <input type= 'text' name= 'notes' placeholder= 'Additional Notes'></input>
      {ratingsInput()}
      </label>
      <label> 2.
      <input type= 'text' name= 'sampledWines' placeholder= 'Wine'></input>
      <input type= 'text' name= 'notes' placeholder= 'Additional Notes'></input>
      {ratingsInput()}
      </label>
      <label> 3.
      <input type= 'text' name= 'sampledWines' placeholder= 'Wine'></input>
      <input type= 'text' name= 'notes' placeholder= 'Additional Notes'></input>
      {ratingsInput()}
      </label>
      <label> 4.
      <input type= 'text' name= 'sampledWines' placeholder= 'Wine'></input>
      <input type= 'text' name= 'notes' placeholder= 'Additional Notes'></input>
      {ratingsInput()}
      </label>

      {/* Country input */}
      <h4>Country of Origin</h4>
      <label> 
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'domestic'></input>Domestic
      </label>
      <label> 
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'france'></input>France
      </label>
      <label>
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'italy'></input>Italy
      </label>
      <label>
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'spain'></input>Spain
      </label>
      <label>
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'germany'></input>Germany
      </label>
      <label>
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'chile'></input>Chile
      </label>
      <label>
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'argentina'></input>Argentina
      </label>
      <label>
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'newZealand'></input>New Zealand
      </label>
      <label> 
      <input className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= 'australia'></input>Australia
      </label>
      <label> Country Not Listed: 
      <input onChange = {handleChange}  type= 'text' name= 'country' placeholder= 'Other...'></input>
      </label>

      <button> Submit </button>
      </form>
      </>
  )
}

export default AddWine