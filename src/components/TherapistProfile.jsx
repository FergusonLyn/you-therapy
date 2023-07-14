import React from "react";

const TherapistProfile = () => {
  return (
    <>
    
      <div className="profile">
        <div className="circle">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
        </div>
        <div className="info">
          <h4>Peter Notepad</h4>
          <span>
            Dr. of Psychology <br />
           <h6> University of Michagan <br />
            Specialize in relationship counseling and <br /> child therapy  </h6>
          </span>

          <ul>
            <li>
              <a href="https://wa.me/+233554767705?text=Hello%20there!">
                <img src="https://www.citypng.com/public/uploads/preview/whatsapp-black-logo-icon-transparent-png-116395913941kxw8tlxvc.png" alt="" />
              </a>
            </li>
            <li>
      
              <a href="tel:+233554767705"> 
                <img src="https://w7.pngwing.com/pngs/344/761/png-transparent-computer-icons-call-icon-cdr-text-copyright.png" alt="" />
              </a>
            </li>
            <li>
        
              <a href="mailto:psky730@gmail.com">
                <img
                  src="https://e7.pngegg.com/pngimages/522/873/png-clipart-black-envelope-icon-advanced-case-management-envelope-computer-icons-icon-design-envelope-mail-miscellaneous-angle.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TherapistProfile;
