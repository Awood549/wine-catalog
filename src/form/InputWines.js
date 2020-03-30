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
    let values = ['1','2','3','4','5']

    let markup = values.map(value =>
      <> 
      <p>{value}</p><input key = {value} onChange = {handleChange} type= "radio" name= 'rating' value={value}></input>
      </>
      )
    return(
      <>
      <label className= 'rating'>
      <h4>Crew Rating</h4>
      {markup}
      </label>
    </>
    )
  }
  function nameAndNotesInput(){
    return(      
      <>
    <input onChange = {handleChange} contentEditable='true' className= 'wineName' type= 'text' name= 'sampledWines' placeholder= 'Wine'></input>
    <input onChange = {handleChange} contentEditable='true' className='wineNotes' type= 'text' name= 'notes' placeholder= 'Additional Notes'></input>
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
      {varietalsInput()}
      {ratingsInput()}
      </label>
      </>
    )
    return(
      <>
            <h2 className = 'winesHeader'>Wines Tasted</h2>
            {markup}
            </>
    )
  }


  return(
    <>
    <form onSubmit = {handleSubmit}>

    {/* Day of the week input */}
      <label className = 'dayOf'> 
      <h4>Day of Tasting</h4>
      <input onChange = {handleChange} type = 'radio' id='monday' name='day' value = 'monday' ></input>
      <p>Monday</p>
      <input onChange = {handleChange} type= 'radio' id= 'wednesday' name='day'  value = 'wednesday'></input>
         <p>Wednesday</p>
         </label>

         {/* Date Input */}
      <label className = 'dateOf'>
      <h4>Date of Tasting</h4>
      <input onChange = {handleChange} type = 'date' id = 'date' name = 'date'></input>
      </label>

      {/* Theme Input */}
      <label className = 'theme'>
      <h4>Tasting Theme</h4>
      <input onChange = {handleChange} type= 'text' placeholder = 'Tasting Theme Here!' id = 'theme' name = 'theme' ></input>
      </label>

      {/* Wines Sampled Inputs */}
      {formBuilder()}

      {/* Country input */}
      <button> Submit Tasting</button>
      </form>
      </>
  )
}

export default AddWine