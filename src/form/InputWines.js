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

  const [handleChange, handleSubmit] = useForm(objectBuilder
    )


  function objectBuilder(props){

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
    <input onChange = {handleChange} className='wineNotes' type= 'text' name= 'notes' placeholder= 'Additional Notes'></input>
    </>
    )
  }

  
  function countryOfOrigin(){
    let values = [
      {
        name:'Domestic',
        value:'domestic',
      },
      {
        name:'France',
        value:'france',
      },
      {
        name:'Italy',
        value:'italy',
      },
      {
        name:'Spain',
        value:'spain'
      },
      {
        name:'Germany',
        value:'germany'
      },
      {
        name:'Chile',
        value:'chile'
      },
      {
        name:'Argentina',
        value:'argentina'
      },
      {
        name:'New Zealand',
        value:'newZealand'
      },
      {
        name:'Australia',
        value:'australia'
      },
    ]

    let markup = values.map((item,idx) =>
      <label key = {idx}> 
      <input key = {idx} className='countryRadio' onChange = {handleChange}  type= 'radio' name= 'country' value= {item.value}></input><p className='countryRadio'>{item.name}</p><br></br>
      </label>
    )

    return <>
          <label className= 'countryOrigin'>
      <h4>Country of Origin</h4>
      {markup}
      </label>
    </>
  }

  function varietalsInput(){
    let values = [
      {
        name:'Syrah',
        value:'syrah',
      },
      {
        name:'Cabernet Sauvignon',
        value:'cabernetSauvignon',
      },
      {
        name:'Merlot',
        value:'merlot',
      },
      {
        name:'Red Blend',
        value:'redBlend',
      },
      {
        name:'Zinfandel',
        value:'zinfandel',
      },
    ]


    let markup = values.map((item,idx) => 
    <label key = {idx}>
      <input key = {idx} className='varietalChoices' onChange = {handleChange} type= 'checkbox' name= 'varietals' value={item.value}></input>
      <p className='varietalChoices'>{item.name}</p><br></br>
    </label>
    )

    return(
      <>
      <label className= 'varietal'>
      <h4>Varietal</h4>
        {markup}
      </label>
      </>
    )
  }

  function formBuilder(){
    let numberOfWines = ['1','2','3','4'];

    let markup = numberOfWines.map( number =>
      <>
      <label className= 'eachWine'>
      <h3>{number}</h3>
      {nameAndNotesInput()} 
      {countryOfOrigin()}
      {ratingsInput()}
      {varietalsInput()}
      </label>
      </>
    )
    return(
      <>
            <h4>Wines Tasted</h4>
            {markup}
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
      {formBuilder()}

      {/* Country input */}
      <button> Submit Tasting</button>
      </form>
      </>
  )
}

export default AddWine