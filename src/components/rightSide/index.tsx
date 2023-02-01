import * as C from './styles'

import { Inputs } from '../Inputs'

export function Form(){
    return(
        <C.RightSide>
            <C.LinkTrial> 
                <p> <strong> Try it free 7 days </strong> then $20/mo. thereafter</p>
            </C.LinkTrial>

            <C.ContentForm id="contentForm"> 

                <Inputs />
                <C.Terms id='termsAndServices'> By clicking the button, you are agreeing to our
                    <a> Terms and Services </a>
                </C.Terms>

            </C.ContentForm>
        </C.RightSide>
    )
}

