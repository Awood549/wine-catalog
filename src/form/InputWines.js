import React from 'react';
import useForm from './formBlock.js'
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

    <form onSubmit = {handleSubmit}>
      <label htmlFor = 'monday'> 
      <input onChange = {handleChange} type = 'radio' id='monday' name='day' value = 'monday' ></input>
      Monday</label>
      <label htmlFor= 'wednesday'>
      <input onChange = {handleChange} type= 'radio' id= 'wednesday' name='day'  value = 'wednesday'></input>
         Wednesday</label>
      <br></br>

      <input onChange = {handleChange} type = 'date' id = 'date' name = 'date'></input>
      <br></br>

      <input onChange = {handleChange} type= 'text' placeholder = 'Tasting Theme Here!' id = 'theme' name = 'theme' ></input>
      
      <input onChange = {handleChange}  type= 'radio' name= 'country' value= 'domestic'></input>
      <input onChange = {handleChange}  type= 'radio' name= 'country' value= 'france'></input>
      <input onChange = {handleChange}  type= 'radio' name= 'country' value= 'italy'></input>
      <input onChange = {handleChange}  type= 'radio' name= 'country' value= 'spain'></input>
      <input onChange = {handleChange}  type= 'radio' name= 'country' value= 'germany'></input>
      <input onChange = {handleChange}  type= 'radio' name= 'country' value= 'chile'></input>
      <input onChange = {handleChange}  type= 'radio' name= 'country' value= 'argentina'></input>
      <input onChange = {handleChange}  type= 'radio' name= 'country' value = 'newZealand'></input>
      <input onChange = {handleChange}  type= 'radio' name= 'country' value = 'australia'></input>
      <input onChange = {handleChange}  type= 'text' name= 'country' placeholder= 'Country Not Listed'></input>

      <button> Submit </button>
      </form>

  )
}

export default AddWine