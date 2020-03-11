import React from 'react';
import useForm from './formBlock.js'

 const AddWine = props => {

  const [handleChange, handleSubmit] = useForm(dateForm
    )


  //https://www.youtube.com/watch?v=sfp5K_5GHNg

  function dayForm(){
    return <>
      <input type = 'radio' id = 'monday' name = 'day' value = 'monday' ></input>
      <label htmlFor = 'monday'> Monday</label>
      <input type= 'radio' id= 'wednesday' name= ' day'  value = 'wednesday'></input>
      <label htmlFor= 'wednesday'> Wednesday</label>
      <br></br>
      </>
  }
  function dateForm(date){
    console.log(date)

    return <>
      <input type = 'date' id = 'date' name = 'date'></input>
      <button>
        Here
      </button>
      </>
  }
  return(
    <>
    <form onSubmit = {handleSubmit} onChange = {handleChange}>
    {dayForm()}
    {dateForm()}
    </form>

    </>

  )
}

export default AddWine