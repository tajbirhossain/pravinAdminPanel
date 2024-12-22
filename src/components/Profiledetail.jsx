import React from 'react'
import '../components/styles/profile.css'

const Profiledetail = () => {
  return (
    <div className="profile-container">
      <div className="profile-wrap">
        <span>Profile</span>
        <div className="profile-tops">
          <div className="single-name">
            <h4>Full Name</h4>
            <p>Johnathan Deo</p>
          </div>
          <div className="single-name">
            <h4>Mobile</h4>
            <p>(123) 456 7890</p>
          </div>
          <div className="single-name">
            <h4>Email</h4>
            <p>johnathan@admin.com</p>
          </div>
          <div className="single-name">
            <h4>Location</h4>
            <p>London</p>
          </div>
        </div>
        <div className="profile-center">
          <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  )
}

export default Profiledetail