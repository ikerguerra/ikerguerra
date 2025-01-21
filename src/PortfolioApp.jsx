import logo from './logo.svg';
// import './default.css';

function PortfolioApp() {
  const año = new Date();
  return (
    <div className="App">
      {/* <!--navigation--> */}
      <section className="smart-scroll">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-dark">
            <a className="navbar-brand heading-black" href="index.php">
              IKER GUERRA
            </a>
            <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
              data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
              aria-label="Toggle navigation">
              <span data-feather="grid"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#inicio">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#sobremi">Sobre mí</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#proyectos">Proyectos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#contacto">Contacto</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll d-flex flex-row align-items-center text-primary" href="https://www.linkedin.com/in/iker-guerra-mielgo">
                    <em data-feather="layout" width="18" height="18" className="mr-2"></em>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      {/* <!--hero header--> */}
      <section className="py-7 py-md-0 bg-hero" id="home">
        <div className="container">
          <div className="row vh-100">
            <div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
              <h1 className="heading-black">¡Bienvenid@ a mi portfolio!</h1>
              <h2 className="py-3">Soy Iker, <span className='text-primary'>Desarrollador Full-Stack</span></h2>
              <p className="lead py-3">Me gusta el código limpio y crear diseños simples e intuitivos, pero que a su vez no pasen desapercibidos.</p>
              <form action="./templates/products.php">
                <a className="btn btn-primary d-inline-flex flex-row align-items-center" href="CV_IkerGuerraMielgo.pdf" download="CV_IkerGuerraMielgo.pdf">
                  Descargar CV
                  <em className="ml-2" data-feather="arrow-right"></em>
                  <i class="fa-solid fa-cloud-arrow-down fa-md ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className='container mt-8 p-5'>
        {/* Sobre mí */}
        <h3 className='my-5 border-bottom border-primary'>Sobre mí</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis accusantium explicabo, dignissimos neque cupiditate, molestias rem reprehenderit laudantium
          dolorum aut ullam nostrum repellendus iste ex maxime tenetur atque laboriosam accusamus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam suscipit est? Quos sit voluptatum dolor alias distinctio fugit ad totam repellat accusamus.
          Obcaecati, autem aliquam similique deserunt quibusdam ducimus?</p>

        {/* Stack */}
        <h3 className='my-5 border-bottom border-primary'>Stack</h3>
        <ul className='list-unstyled'>
          <li><i className="fa-brands fa-js fa-4x"></i></li>
        </ul>

        {/* Experiencia */}
        <h3 className='my-5 border-bottom border-primary'>Experiencia</h3>

        <ol className='border-start border-primary list-unstyled mx-sm-4 position-relative'>
          <li className='mb-5 ms-4'>
            <div className="rounded-circle bg-primary position-absolute" style={{ width: '1rem', height: '1rem', 'inset-inline-start': '-0.5rem', 'margin-top': '0.25rem' }}></div>
            <p>Marzo 2022 - Enero 2023</p>
            <h4 className="cargo heading-black">Desarrollador Full Stack</h4>
            <div className="descripcion">Desarrollo y mantenimiento de aplicaciones empresariales del sector sanitario</div>
            <p>Experiencia en entorno Back End con tecnologías como Java y Spring Boot</p>
            <p>Experiencia en entorno Front End con tecnologías como JavaScript y ExtJS</p>
            <p>Gestión de bases de datos relacionales con MySQL</p>
            <p>Gestión del ciclo de vida de los proyectos empleando metodologías ágiles como SCRUM y herramientas como JIRA</p>
          </li>
          <li className='mb-5 ms-4'>
            <div className="rounded-circle bg-primary position-absolute" style={{ width: '1rem', height: '1rem', 'inset-inline-start': '-0.5rem', 'margin-top': '0.25rem' }}></div>
            <p>Marzo 2022 - Enero 2023</p>
            <h4 className="cargo heading-black">Desarrollador Full Stack</h4>
            <div className="descripcion">Desarrollo y mantenimiento del portal de empleados del cliente</div>
            <p>Experiencia en entorno Back End con tecnologías como Java y Spring Boot</p>
            <p>Experiencia en entorno Front End con tecnologías como TypeScript y Angular</p>
            <p>Gestión de bases de datos relacionales con SQL Server</p>
            <p>Implementé servicios RESTful y APIs escalables para comunicación entre cliente y servidor.</p>
            <p>Gestión del ciclo de vida de los proyectos empleando herramientas como JIRA</p>
          </li>
        </ol>

        {/* Formación */}
        <h3 className='my-5 border-bottom border-primary'>Formación</h3>

        <ol className='border-start border-primary list-unstyled mx-sm-4 position-relative'>
          <li className='mb-5 ms-4'>
            <div className="rounded-circle bg-primary position-absolute" style={{ width: '1rem', height: '1rem', 'inset-inline-start': '-0.5rem', 'margin-top': '0.25rem' }}></div>
            <p>Presente</p>
            <h4 className="cargo heading-black">CP en Desarrollo de Tecnologías Web</h4>
            <p>Dicampus</p>
          </li>
          <li className='mb-5 ms-4'>
            <div className="rounded-circle bg-primary position-absolute" style={{ width: '1rem', height: '1rem', 'inset-inline-start': '-0.5rem', 'margin-top': '0.25rem' }}></div>
            <p>Diciembre 2021</p>
            <h4 className="cargo heading-black">Grado Superior en Desarrollo de Aplicaciones Multiplataforma</h4>
            <p>IES Número 1</p>
          </li>
        </ol>


        <h3 className='my-5 border-bottom border-primary'>Mis proyectos</h3>
        <h4 className='text-center'>Toy en ello jajaja</h4>


        {/* Contacto */}

        <h3 className='my-5 border-bottom border-primary'>Contacto</h3>

        <form>
          <div className='d-flex row'>
            <div class="mb-3 col-6">
              <label for="exampleInputEmail1" class="form-label">Nombre</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Nombre' />
            </div>
            <div class="mb-3 col-6">
              <label for="exampleInputPassword1" class="form-label">Apellido</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Apellido' />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email@email.com' />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <textarea className='form-control' name="mensaje" id="mensaje" placeholder='Escribe tu mensaje'></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      </div>

      {/* footer */}
      <footer className="py-5">
        <div className="container mt-8 p-5">
          <ul className="list-inline social social-sm">
            <li className="list-inline-item">
              <a href=""><i className="fa-brands fa-facebook"></i></a>
            </li>
            <li className="list-inline-item">
              <a href=""><i className="fa-brands fa-twitter"></i></a>
            </li>
            <li className="list-inline-item">
              <a href=""><i className="fa-brands fa-google-plus"></i></a>
            </li>
            <li className="list-inline-item">
              <a href=""><i className="fa-brands fa-dribbble"></i></a>
            </li>
          </ul>
          <div className="row mt-5">
            <div className="col-12 text-muted text-center small-xl">
              &copy; {año.getFullYear()} Iker Guerra - Web creada con React <i class="fa-brands fa-react fa-2xl"></i>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- jQuery first, then Popper.js, then Bootstrap JS --> */}
      <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.7.3/feather.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
      <script src="../assets/js/scripts.js"></script>
    </div>
  );
}

export default PortfolioApp;
