import Alert from 'react-bootstrap/Alert';


function Welcomecomponent (){
    return (
        <>
        {[
            'primary',
            ].map((variant) => (
                <Alert key={variant} variant={variant} className='text-center'>
                    Il miglior E-shop di tutto internet
                </Alert>
            ))}
        </>
    )
}

export default Welcomecomponent