import logo from './logo.svg';
// import './default.css';
import { Navigation } from './components/Navigation';
import { Contacto } from './components/Contacto';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

function PortfolioApp() {
  const año = new Date();
  return (
    <div className="App">

      {/* Componente para la navegacion */}
      <Navigation/>

      {/* <!--hero header--> */}
      <section className="py-7 py-md-0 bg-hero" id="home">
        <div className="container">
          <div className="row vh-100">
            <div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
              <h1 className="heading-black">¡Bienvenid@ a mi portfolio!</h1>
              <h2 className="py-3">Soy Iker, <span className='text-primary'>Desarrollador Full-Stack</span></h2>
              <p className="lead py-3">Explora mi portafolio para descubrir mi experiencia y aplicaciones desarrolladas con tecnologías como Java, React, Spring y Angular.
              Mi pasión es transformar ideas en código y convertir desafíos en proyectos exitosos. 
              </p>
              <form action="./templates/products.php">
                <a className="btn btn-primary d-inline-flex flex-row align-items-center" href="CV_IkerGuerraMielgo.pdf" download="CV_IkerGuerraMielgo.pdf">
                  Descargar CV
                  <em className="ml-2" data-feather="arrow-right"></em>
                  <i className="fa-solid fa-cloud-arrow-down fa-md ms-2"></i>
                </a>
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
        <ul className='list-unstyled d-flex justify-content-between row'>
          <li className='col-auto col-sm-auto mb-5'><i className="fa-brands fa-java fa-4x"></i></li>
          <li className='col-auto col-sm-auto mb-5'><i className="fa-brands fa-js fa-4x"></i></li>
          <li className='col-auto col-sm-auto mb-5'><i className="fa-brands fa-react fa-4x"></i></li>
          <li className='col-auto col-sm-auto mb-5'><i className="fa-brands fa-angular fa-4x"></i></li>
          <li className='col-auto col-sm-auto mb-5'><i className="fa-brands fa-git-alt fa-4x"></i></li>
          <li className='col-auto col-sm-auto mb-5'><i className="fa-brands fa-bootstrap fa-4x"></i></li>
        </ul>

        {/* Experiencia */}
        <h3 className='my-5 border-bottom border-primary'>Experiencia</h3>

        <ol className='border-start border-primary list-unstyled mx-sm-4 position-relative'>
          <li className='mb-5 ms-4'>
            <div className="rounded-circle bg-primary position-absolute circle-list"></div>
            <p>Marzo 2022 - Enero 2023</p>
            <h4 className="cargo heading-black">Desarrollador Full Stack</h4>
            <div className="descripcion">Desarrollo y mantenimiento de aplicaciones empresariales del sector sanitario</div>
            <p>Experiencia en entorno Back End con tecnologías como Java y Spring Boot</p>
            <p>Experiencia en entorno Front End con tecnologías como JavaScript y ExtJS</p>
            <p>Gestión de bases de datos relacionales con MySQL</p>
            <p>Gestión del ciclo de vida de los proyectos empleando metodologías ágiles como SCRUM y herramientas como JIRA</p>
          </li>
          <li className='mb-5 ms-4'>
            <div className="rounded-circle bg-primary position-absolute circle-list"></div>
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
            <div className="rounded-circle bg-primary position-absolute circle-list"></div>
            <p>Presente</p>
            <h4 className="cargo heading-black">CP en Desarrollo de Tecnologías Web</h4>
            <p>Dicampus</p>
          </li>
          <li className='mb-5 ms-4'>
            <div className="rounded-circle bg-primary position-absolute circle-list"></div>
            <p>Diciembre 2021</p>
            <h4 className="cargo heading-black">Grado Superior en Desarrollo de Aplicaciones Multiplataforma</h4>
            <p>IES Número 1</p>
          </li>
        </ol>


        <h3 className='my-5 border-bottom border-primary'>Mis proyectos</h3>
        <h4 className='text-center'>Toy en ello jajaja</h4>


        {/* Contacto */}

        <h3 className='my-5 border-bottom border-primary'>Contacto</h3>
        <Contacto />
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
              &copy; {año.getFullYear()} Iker Guerra - Web creada con React <i className="fa-brands fa-react fa-2xl"></i>
            </div>
          </div>
        </div>
      </footer>

      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default PortfolioApp;
