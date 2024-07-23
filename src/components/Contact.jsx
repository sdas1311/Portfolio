import React from 'react'
import { CONTACT } from '../constants'
const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <h1 className='text-4xl text-center my-10'>Get in touch</h1>
            <div className='text-center tracking-tighter'>
                <a href='mailto:dasronisoumya13@gmail.com' className='border-b'>{CONTACT.email}</a>
                <p className='my-4'>{CONTACT.phoneNo}</p>
                <p className='my-4'>{CONTACT.address}</p>
            </div>
        </div>
    )
}

export default Contact