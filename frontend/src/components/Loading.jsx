import React from 'react'
export default function Loading() {
    return (
        <div>
            <div className="spinner-border" role="status" style={{height:'110px', width:'110px', marginTop:'100px'}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}