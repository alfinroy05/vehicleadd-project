import React from 'react'

const PatientNavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">HOSPITAL</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ADD PATIENT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SEARCH EMPLOYEE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">VIEW ALL</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default PatientNavBar