import { useRouter } from 'next/router'
import { useEffect, useState } from 'react/cjs/react.development';

export const Constraints = () => {
    const [refresh, setrefresh] = useState(false);
    
    useEffect(() => {
        refresh && window.location.reload();
    })

    return (
        <div className={'d-flex justify-content-center pt-5'}>
            <div className={'glass col-9'}> 
                <h2 className={'p-5 '}>
                    A farmer has to get a fox, a chicken, and a sack of corn across a river.<br></br>
                    He has a rowboat, and it can only carry him and one other thing.<br></br><br></br>
                    
                    If the fox and the chicken are left together, the fox will eat the chicken.<br></br>
                    If the chicken and the corn are left together, the chicken will eat the corn.<br></br><br></br>

                    How does the man do it?
                </h2>
                <button onClick={() => setrefresh(true)}>Try Again</button>
            </div>
        </div>
    )
}