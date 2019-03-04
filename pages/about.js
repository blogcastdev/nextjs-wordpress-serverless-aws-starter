import React from 'react'
import Link from 'next/link'

export default () => (
   <div>Ahoy, World. about
         <Link href='/blog' as='/blog'>
      <a>Blog</a>
    </Link>
   </div>
)
