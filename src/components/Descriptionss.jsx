

const Descriptionss = (item) => {
  return (
    <>
      <div className="outerbox">
        <div className="top">
            <div className="circle">
                <img src={item.img} alt="" />
            </div>
            <div className="headingText">
               {item.text}
            </div>
        </div>
        <div className="down">
           {item.context}
        </div>
    </div>
      
      
    </>
  )
}

export default Descriptionss
