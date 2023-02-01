import { TextField, Button } from '@mui/material'
import { ChangeEvent, FormEvent, useState } from 'react'

import { Form, SubmitSuccess } from './styles'

export function Inputs(){
    const [FirstName, setFirstName] = useState<string>('')
    const [LastName, setLastName] = useState<string>('')
    const [Email, setEmail] = useState<string>('')
    const [Password, setPassword] = useState<string>('')

    function changeFirstName(e: ChangeEvent<HTMLInputElement>){
        setFirstName(e.target.value)
    }

    function changeLastName(e: ChangeEvent<HTMLInputElement>){
        setLastName(e.target.value)
    }

    function changeEmail(e: ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value)
    }

    function changePassword(e: ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value)
    }

    // Verify inputs:

    let verifyForSubmit: number = 0

    function verifyName(Name: string){
        if(Name.length < 2 || !Name.match(/^([^0-9]*)$/g)){
            return 'error'
        }
        else{
            verifyForSubmit++
            return 'success'
        }
    }
    
    function verifyEmail(Email: string){
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        if(Email.match(regexEmail) === null){
            return 'error'
        } else{
            verifyForSubmit++
            return 'success'
        }
    
    }
    
    function verifyPassword(Password: string){
        if(Password.length < 3){
            return 'error'
        } else{
            verifyForSubmit++
            return 'success'
        }
    }

    function submitForm(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        
        if( verifyForSubmit == 4 ){
            let submitSuccess = document.querySelector('#submitSuccess') as HTMLDivElement;
            let inputs = document.querySelector('#inputs') as HTMLDivElement;

            let termsAndServices = document.querySelector('#termsAndServices') as HTMLParagraphElement;
            let contentForm = document.querySelector('#contentForm') as HTMLDivElement;

            submitSuccess.style.display = 'flex'
            inputs.style.display = 'none'
            termsAndServices.style.display= 'none'
            contentForm.style.marginBottom = '0px'
        }
}

    
    return(
        <> 
            <Form id='inputs' onSubmit={submitForm}>
                <TextField id="outlined-basic" label="First Name" variant="outlined" 
                type='text' 
                color={verifyName(FirstName)}
                focused={FirstName !== ''}
                required 
                fullWidth 
                autoComplete='disabled'
                value={FirstName} 
                onChange={changeFirstName} 
                aria-description="Input to first name" />

                <TextField id="outlined-basic" label="Last Name" variant="outlined"
                type='text' 
                color={verifyName(LastName)}
                focused={LastName !== ''}
                autoComplete='disabled'
                required 
                fullWidth 
                value={LastName} 
                onChange={changeLastName} 
                aria-description="Input to last name" />

                <TextField id="outlined-basic" label="Email Address" variant="outlined" 
                type='email'
                color={verifyEmail(Email)}
                focused={Email !== ''}
                autoComplete='disabled'
                required 
                fullWidth 
                value={Email} 
                onChange={changeEmail} 
                aria-description="Input to email" />

                <TextField id="outlined-basic" label="Password" variant="outlined" 
                color={verifyPassword(Password)}
                focused={Password !== ''}
                type='password' 
                required 
                fullWidth 
                value={Password} 
                onChange={changePassword} 
                aria-description="Input to password" />
            
                <Button variant="contained" fullWidth size='large' type='submit'> Claim your free trial </Button>
            </Form>

            <SubmitSuccess id='submitSuccess'>
                <h2> Thank you! <strong>{FirstName}</strong></h2>
                <p>Verify your email: <strong>{Email}</strong></p>
            </SubmitSuccess>
        </>
    )
}