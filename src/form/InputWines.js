import React from 'react';
import useForm from './formBlock.js'
  //https://www.youtube.com/watch?v=sfp5K_5GHNg

 class AddWine extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      day: this.day,
      date: this.date,
      theme: this.theme,
      wines: [],
      varietals: this.varietals,
      region: this.region,
   }

    
  }

  const [handleChange, handleSubmit] = useForm(dateForm
    )


  formBuilder(props){



    return <>
      <input type = 'radio' id = 'monday' name = 'day' value = 'monday' ></input>
      <label htmlFor = 'monday'> Monday</label>
      <input type= 'radio' id= 'wednesday' name= ' day'  value = 'wednesday'></input>
      <label htmlFor= 'wednesday'> Wednesday</label>
      <br></br>
      </>
  }
  dateForm(date){
    console.log(date)

    return <>
      <input type = 'date' id = 'date' name = 'date'></input>
      <button>
        Here
      </button>
      </>
  }
  render() {
  return(
    <>
    <form>
    {formBuilder()}
    {dateForm()}
    </form>

    </>

  );
  }
}

export default AddWine