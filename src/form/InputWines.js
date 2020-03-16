import React from 'react';
import useForm from './formBlock.js'
  //https://www.youtube.com/watch?v=sfp5K_5GHNg

 const AddWine = props => {

  let state = {
        day: '',
        date: '',
        theme: '',
        wines: [],
        varietals: '',
        region: '',
     }

  const [handleChange, handleSubmit] = useForm(formBuilder
    )


  function formBuilder(props){
    
    return (
    <form>
      <input onChange = {handleChange} type = 'radio' id = 'monday' name = 'day' value = 'monday' ></input>
      <label htmlFor = 'monday'> Monday</label>
      <input onChange = {handleChange} type= 'radio' id= 'wednesday' name= ' day'  value = 'wednesday'></input>
      <label htmlFor= 'wednesday'> Wednesday</label>
      <br></br>

      <input onChange = {handleChange} type = 'date' id = 'date' name = 'date'></input>
      <br></br>
      <button> Submit </button>


      </form>
)
  }

  return(

    <>
    {formBuilder()}
    </>

  )
}

export default AddWine