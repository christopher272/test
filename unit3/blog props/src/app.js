import React from 'react'
import Data from './data'
import BlogListComponent from './bloglist'

function Blog(){
    const Blogs = Data.map(card => <BlogListComponent key={card.id} Blog={card} />)
    return (
        <div>
            {Blogs}
        </div>
    )
}

export default Blog