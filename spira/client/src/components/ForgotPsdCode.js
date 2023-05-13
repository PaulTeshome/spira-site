import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import InputComponent from './InputComponent'
import { code_validation} from './utils/inputValidations'
import { motion } from 'framer-motion'
import { HashLink as Link} from 'react-router-hash-link'
import './ForgotPsdCode.css'
import { BsFillCheckSquareFill } from 'react-icons/bs'

function ForgotPsdCode() {
    const[newCode,setNewCode]= useState(false)

    const [ minutes, setMinutes ] = useState(1);
    const [seconds, setSeconds ] =  useState(0);

    const [submitSuccess,setSubmitSuccess]= useState(false)
    const [failure,setFailure]= useState(false)

    const methods= useForm()

    useEffect(()=>{
    document.title='Code reset'
    },[])

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    setNewCode(true)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)

        return ()=> {
            clearInterval(myInterval);
        };
    });
    
    const {handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
      console.log('inputs',data)
      ?console.log("success"):console.log("not success")
      setSubmitSuccess(true)
      setFailure(false)
    }) 
    

    const getNewCode=()=>{
        setNewCode(false)
        setMinutes(1)
        setSeconds(0)
    }

    const success_msg_class= failure?"login-error-msg":"success-msg"
    const success_msg= failure?"Incorrect Code!":"Successful redirecting..."
    const checkLogo=failure?"":<BsFillCheckSquareFill/> 

  return (
    <div className='login-form-container'>
        <span className='login-form-title'>Code Reset</span>
        <FormProvider {...methods}>
          <form className='login-form' onSubmit={e => e.preventDefault()} noValidate>
          {submitSuccess && (
                <motion.p className={success_msg_class}
                  initial= {{ opacity: 0, y: 10 }}
                  animate= {{ opacity: 1, y: 0 }}
                  exit= {{ opacity: 0, y: 10 }}
                  transition= {{ duration: 0.5 }}
                >
                  
                  {checkLogo}&nbsp;{success_msg}
                </motion.p>
              )}
              <InputComponent label="Insert Code" type="number" id="code" name="code" placeholder='Enter code' classNm='form-inputs' {...code_validation}/>

              <div className='get-code-holder'>
                { minutes === 0 && seconds === 0
                ? <span className='get-code-disabled'> </span>
                : <span className='get-code-disabled'>{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</span>
                }

                {newCode?
                <a className='get-code' href='#add' onClick={getNewCode}>get new code</a>:
                <span className='get-code-disabled'>get new code</span>
                }
              </div>
              
              <button  className='login-btn' onClick={submitInputs}>Submit Code</button>
             
          </form>
        </FormProvider>
        <Link to='/login'>Return to Login</Link>

    </div>
  )
}

export default ForgotPsdCode