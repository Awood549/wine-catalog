import React from 'react';

function AddWine(){


  //https://www.youtube.com/watch?v=sfp5K_5GHNg

  function dayForm(){
    return <form>
      <input type = 'radio' id = 'monday' name = 'day' value = 'monday' ></input>
      <label for = 'monday'> Monday</label>
      <input type= 'radio' id= 'wednesday' name= ' day'  value = 'wednesday'></input>
      <label for= 'wednesday'> Wednesday</label>
    </form>
  }
  return(
    <>
    {dayForm()}
        <form>
      <button>
        Add A Tasting
      </button>
    </form>

    </>

  )
}

export default AddWine