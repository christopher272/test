import React from 'react'


function BloglistComponent (props){
  return (  <div padding={25}>
<h1 style={{fontSize:"36px"}}>{props.Blog.title}</h1>
<h2 style={{fontSize:"27.73px"}}>{props.Blog.subTitle}</h2>
<h3 style={{fontSize:"18px"}}>Posted by {props.Blog.author} on {props.Blog.date}</h3>


    </div>)
}


export default BloglistComponent;