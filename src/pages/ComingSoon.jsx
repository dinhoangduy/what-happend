import React, { useEffect } from 'react'

import Helmet from '../components/Helmet'

const ComingSoon = () => {
    
    return (
        <Helmet title="Coming soon">

        <div className="coming-soon" style={{
            backgroundImage: "url(./image/coming-soon.jpg)"
        }}>
            <div className='content'>
                <p>Be ready, we are launching soon.</p>
                <h1>Coming Soon</h1>
            </div>
        </div>
        </Helmet>
    )
}

export default ComingSoon