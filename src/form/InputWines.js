import React from 'react';
import useForm from './formBlock.js'

function AddWine(){


  //https://www.youtube.com/watch?v=sfp5K_5GHNg

  function dayForm(){
    return <form>
      <input type = 'radio' id = 'monday' name = 'day' value = 'monday' ></input>
      <label htmlFor = 'monday'> Monday</label>
      <input type= 'radio' id= 'wednesday' name= ' day'  value = 'wednesday'></input>
      <label htmlFor= 'wednesday'> Wednesday</label>
    </form>
  }
  function dateForm(){

    return <form>
      <input type = 'date' id = 'date' name = 'date'></input>
      <button onSubmit = {useForm.handleSubmit}>
        Here
      </button>
    </form>
  }
  return(
    <>
    {dayForm()}
    {dateForm()}
        <form>
      <button>
        Add A Tasting
      </button>
    </form>

    </>

  )
}

export default AddWine