import { useRouter } from 'next/router'
import { useEffect, useState } from 'react/cjs/react.development';

export const Constraints = () => {
    const [refresh, setrefresh] = useState(false);
    
    useEffect(() => {
        refresh && window.location.reload();
    })

    return (
        <div className={'py-3 d-flex justify-content-center'}>
            <div className={'glass col-7'}> 
                <h3 className={'p-3'}>
                    A farmer has to get a fox, a chicken, and a GMO corn across a river.<br></br>
                    He has a rowboat, and it can only carry him and one other thing.<br></br><br></br>
                    
                    If the fox and the chicken are left together, the fox will eat the chicken.<br></br>
                    If the chicken and the corn are left together, the chicken will eat the corn.<br></br><br></br>

                    How does the man do it?
                </h3>
                <button className={'bt-color m-3 mb-4 p-2'} 
                    onClick={() => setrefresh(true)}>Try Again</button>
            </div>
        </div>
    )
}