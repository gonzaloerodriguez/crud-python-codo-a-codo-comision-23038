document.getElementById(
  "header"
).innerHTML = ` <nav class="navbar navbar-expand-sm navbar-light bg-light" style=" display: flex; justify-content: space-around;" >
<div class="container" style= "display: flex; justify-content: space-between; width: 100%; margin: 0 ">
  <a class="navbar-brand" href="index.html">Navbar</a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId" >
      <ul class="navbar-nav me-auto mt-2 mt-lg-0" style= "margin-right: 0px !important; width: 100%; display: flex; justify-content: flex-end" >
          <li class="nav-item">
              <a class="nav-link active" href="index.html" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
          </li>
          
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CRUD</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="productos.html">Productos</a>
                  <a class="dropdown-item" href="#">Action 2</a>
              </div>
          </li>
      </ul>
          </div>
        </div>
        </nav>
        `;
