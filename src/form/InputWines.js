import React from 'react';
import useForm from './formBlock.js'
  //https://www.youtube.com/watch?v=sfp5K_5GHNg

 const AddWine = props => {

  
  const state = {

  }

  const [handleChange, handleSubmit] = useForm(dateForm
    )


  function formBuilder(props){



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
    <form>
    {formBuilder()}
    {dateForm()}
    </form>

    </>

  )
}

export default AddWine