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
      
      {/* Theme input */}
      <h4>Tasting Theme</h4>
      <input onChange = {handleChange} type= 'text' placeholder = 'Tasting Theme Here!' id = 'theme' name = 'theme' ></input>

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