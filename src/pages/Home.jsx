import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import BlogList from '../components/BlogList';
import { useState } from "react"
function Home() {
   const [selectedTag, setSelectedTag] = useState("All");
  return (
    <div>
      {/* Header */}
      <Header/>
      {/* Search */}
       <Search onTagChange={(tag) => setSelectedTag(tag)} />
      {/* BlogList */}
      <BlogList selectedTag={selectedTag} />
    </div>
  )
}

export default Home