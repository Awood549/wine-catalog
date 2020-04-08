import React, {useState} from 'react';
import useForm from './formBlock.js'
import './forms.css'
  //https://www.youtube.com/watch?v=sfp5K_5GHNg

 const AddWine = props => {

  let state = {
        day: '',
        date: '',
        theme: '',
        wines: []
      }
      
  const [handleChange, handleSubmit] = useForm(objectBuilder);
  const [newState, setState] = useState(state);

  function objectBuilder(formInfo){

    let tasting = {
    day: formInfo.day,
    date: formInfo.date,
    theme: formInfo.theme,
    wines:[
      {
        wine: formInfo.wine1,
        notes: formInfo.notes1,
        crewRating: formInfo.rating1,
        country: formInfo.country1,
        varietal: formInfo.varietal1
      },
      {
        wine: formInfo.wine2,
        notes: formInfo.notes2,
        crewRating: formInfo.rating2,
        country: formInfo.country2,
        varietal: formInfo.varietal2
      },
      {
        wine: formInfo.wine3,
        notes: formInfo.notes3,
        crewRating: formInfo.rating3,
        country: formInfo.country3,
        varietal: formInfo.varietal3
      },
      {
        wine: formInfo.wine4,
        notes: formInfo.notes4,
        crewRating: formInfo.rating4,
        country: formInfo.country4,
        varietal: formInfo.varietal4
      },
    ]
  }
  console.log('tasting',tasting)
  
    return true
  }

  function testerFunc(){
    console.log(state)
    return true
  }

  
  function ratingsInput(iterator){
    let values = ['1','2','3','4','5']

    let markup = values.map(value =>
      <> 
      <p>{value}</p><input key = {value} onChange = {handleChange} type= "radio" name= {`rating${iterator}`} value={value}></input>
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
  function nameAndNotesInput(iterator){
    return(      
      <>
    <input onChange = {handleChange} className= 'wineName' type= 'text' name= {`wine${iterator}`} placeholder= 'Wine'></input>
    <input onChange = {handleChange} className='wineNotes' type= 'text' name= {`notes${iterator}`} placeholder= 'Additional Notes'></input>
    </>
    )
  }
  function countryOfOrigin(iterator){
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
      <input key = {idx} className='countryRadio' onChange = {handleChange}  type= 'radio' name= {`country${iterator}`} value= {item.value}></input><p className='countryRadio'>{item.name}</p><br></br>
      </label>
    )

    return <>
          <label className= 'countryOrigin'>
      <h4>Country of Origin</h4>
      {markup}
      </label>
    </>
  }
  function varietalsInput(iterator){
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
      <input key = {idx} className='varietalChoices' onChange = {handleChange} type= 'radio' name= {`varietal${iterator}`} value={item.value}></input>
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

    let markup = numberOfWines.map( iterator =>
      <>
      <label className= 'eachWine'>
      <h3>{iterator}</h3>
      {nameAndNotesInput(iterator)} 
      {countryOfOrigin(iterator)}
      {varietalsInput(iterator)}
      {ratingsInput(iterator)}
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
    <legend className= 'baseInfo'>
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

      </legend>


      {/* Wines Sampled Inputs */}
      {formBuilder()}

      {/* Country input */}
      <button> Submit Tasting</button>
      </form>
      </>
  )
}

export default AddWine