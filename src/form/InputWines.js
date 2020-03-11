import React from 'react';
import useForm from './formBlock.js'

function AddWine(){


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
  function dateForm(){

    return <>
      <input type = 'date' id = 'date' name = 'date'></input>
      <button onSubmit = {useForm.handleSubmit}>
        Here
      </button>
      </>
  }
  return(
    <>
    <form onSubmit = {useForm.handleSubmit}>
    {dayForm()}
    {dateForm()}
    </form>

    </>

  )
}

export default AddWine