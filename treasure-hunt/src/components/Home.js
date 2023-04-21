import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';

const Clue = (props) => {

  const [userInput,setUserInput]=useState("");
  const [isCorrect,setIsCorrect]=useState(false);
  const onClickHandler=()=>{
    if(props.Answer===userInput) setIsCorrect(true);
  }

  return (
    <div className='mx-auto w-5/6 bg-[#8D7B68] rounded-xl px-10 py-6 mb-20'>
        <div className='text-lg font-semibold'>
        Detective Chase was one of the most respected detectives in the city. He had a reputation for being tough, thorough, and always getting his man. He had solved some of the most complex cases in the city and was respected by his colleagues and feared by the criminals he pursued. One day, Detective Chase received a call from his chief. A wealthy businessman had been murdered in his mansion, and the police had no leads. The chief wanted Detective Chase to take charge of the investigation. Detective Chase arrived at the scene of the crime and immediately began his investigation. He studied the crime scene carefully and found several clues that others had overlooked. Help Detective Chase in solving the clues and get close to the mystery of the murder.
        </div>
        <div className='flex justify-center'>
            <input type="text" className='w-1/2 h-12 rounded-lg text-lg focus:outline-none px-10 my-16' />
        </div>
        <div className='flex justify-center'>
            {
              isCorrect?"":(<Popup  trigger={<button onChange={(e)=> setUserInput(e.target.value)} onClick={onClickHandler} className='bg-white text-lg px-4 py-2 rounded-lg'>Check Answer</button>} position="right center">
              <div>Popup content here !!</div>
            </Popup>)
            }
        </div>

    </div>
  )
}

export default Clue