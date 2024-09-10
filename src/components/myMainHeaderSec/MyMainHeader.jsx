import React from 'react'
import './myMainHeader.css'
export default function MyMainHeader({ secHead, secText }) {
    return (
        <div className='header_ofSec py-4'>
            <p className='mb-4'>
                {secHead ? secHead : ''}
            </p>
            <h3>
                {secText ? secText : ''}
            </h3>
        </div>
    )
}
