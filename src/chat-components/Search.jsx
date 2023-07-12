import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a therapist'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/17491276/pexels-photo-17491276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="userChatInfo">
            <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
