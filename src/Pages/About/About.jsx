import React from 'react';
import './About.css'; // Importar archivo CSS


export default function About(){
  return (
    <div className="nosotros-container">
    <div id="mer-container2">
    <div id="context-container2">
    <div id="contenedor-imagenes2">
        <img src="Natu_Logo_.png" id="img-centrada2" />
    </div>
    <h2 id='titulo2'>Visión</h2>
      <p className='vision'>Para 2028, Natu se posicionará como la principal plataforma de intercambio de productos alimenticios en Colombia, destacando por la colaboración activa entre productores y empresas dedicadas a alimentos orgánicos. Priorizando la calidad del servicio y adaptándonos a las cambiantes necesidades del mercado, buscamos ser una herramienta integral que involucre alrededor del 30% de los actores del sector orgánico, proporcionando a los usuarios una experiencia de alta calidad y satisfaciendo sus expectativas en constante evolución.</p>
    <h2 id='titulo2'>Misión</h2>
      <p className='mision'>Natu es una plataforma en línea que busca brindar un espacio centralizado de productos orgánicos adaptativa a las necesidades del usuario que facilite su compra directa entre productores y consumidores locales, permitiendo una actividad comercial rápida y eficiente entre ambos actores.</p> 
    </div>

    <div id="about-us-container2">
      <h2 id='titulo2'>Acerca de nosotros</h2>
      <p className='acerca'>Somos estudiantes de la Universidad Nacional formando un equipo de desarrolladores dedicados a crear soluciones innovadoras. Trabajamos juntos para enfrentar desafíos y generar impacto positivo.</p>

      <div id="team-container2">
        <div id="team-member2">
        <img src="https://media.licdn.com/dms/image/D4E03AQGWNZAEWFe67A/profile-displayphoto-shrink_400_400/0/1690652960251?e=1718841600&v=beta&t=bQZTsqiEyCEPuB5acAngChDqAPTLO2713XAqncR1x-U" alt="Integrante 1" />
          <h3 >David Rodriguez</h3>
          <p>Desarrollador Backend</p>
          <a href="https://github.com/Davidrg02" target="_blank" rel="noreferrer"style={{ fontSize: '1.8em' }} >
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/david-steven-rodr%C3%ADguez-guzm%C3%A1n-b7828a264/" target="_blank" rel="noreferrer"style={{ color: '#0077B5', fontSize: '1.8em' }}>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <div id="team-member2">
          <img src="https://media.licdn.com/dms/image/D4E03AQFGSt6YIQSBBw/profile-displayphoto-shrink_800_800/0/1711971949970?e=1718841600&v=beta&t=FA0CT5ArUs-EvpUT5amMXtcnAWMDIZSrZF0wAEmWAVQ" alt="Integrante 2" />
          <h3 >Nicolás Hernandez</h3>
          <p>Desarrollador Backend</p>
          <a href="https://github.com/nihernandezv" target="_blank" rel="noreferrer" className='git' style={{ fontSize: '1.8em' }}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/nihernandezv/" target="_blank" rel="noreferrer" style={{ color: '#0077B5',fontSize: '1.8em' }}>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <div id="team-member2">
          <img src="https://media.licdn.com/dms/image/D4E03AQECnGJoycT4sg/profile-displayphoto-shrink_200_200/0/1713405331489?e=1718841600&v=beta&t=PTpkR10llQIORuYZLPFnWqpjppj8S-pKrysh6drdjRE" alt="Integrante 4" />
          <h3 >Brayan Maldonado</h3>
          <p>Desarrollador Frontend</p>
          <a href="https://github.com/BryanSantiagoo" target="_blank" rel="noreferrer" className='git' style={{ fontSize: '1.8em' }}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/brayan-santiago-maldonado-aparicio-549336276/" target="_blank" rel="noreferrer" style={{ color: '#0077B5',fontSize: '1.8em' }}>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        
        <div id="team-member2">
          <img src="https://scontent.fbog19-1.fna.fbcdn.net/v/t39.30808-1/267097944_1100311427401557_6433006303972762575_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IYHLsN7SwcMAb5sdOzT&_nc_ht=scontent.fbog19-1.fna&oh=00_AfAlUd4tXnfiwdboNFS7U5fplY4Kzn1JAWSHD9iWDbT1IA&oe=66299CDE" alt="Integrante 3" />
          <h3 >Ivan Sepulveda</h3>
          <p>Desarrollador Frontend</p>
          <a href="https://github.com/ivanyspaez" target="_blank" rel="noreferrer" style={{ fontSize: '1.8em' }}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ivan-sepulveda-paez/" target="_blank" rel="noreferrer" style={{ color: '#0077B5',fontSize: '1.8em' }}>
            <i  className="fab fa-linkedin"></i>
          </a>
        </div>

        

        {/* Agregar más miembros del equipo aquí */}
      </div>
    </div>
  </div>
</div>
);
}
