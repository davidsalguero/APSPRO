import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteIcon } from "@/components/site-icon";
import {
  benefits,
  downloads,
  hdpeApplications,
  pexAdvantages,
  pexTypes,
  productCategories,
  projects,
  services,
} from "@/data/catalog";

const whatsappUrl = "https://wa.me/50243877424?text=Hola%20APS%2C%20deseo%20informaci%C3%B3n%20sobre%20sus%20soluciones.";

function SectionHeading({ eyebrow, title, intro, light = false }: { eyebrow: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
      <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "APS — Advanced Plumbing Systems",
    url: "https://apspro.net",
    telephone: "+50266766835",
    areaServed: "Guatemala",
    description: "Distribuidor de sistemas PEX, HDPE y tecnologías para instalaciones hidráulicas en Guatemala.",
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="inicio">
          <Image className="hero-image" src="/images/tiffany-doce.jpg" fill priority sizes="100vw" alt="Instalación moderna de tuberías PEX y HDPE en un edificio en construcción" />
          <div className="hero-overlay" />
          <div className="shell hero-content">
            <p className="hero-kicker">Advanced Plumbing Systems · Guatemala</p>
            <h1>La nueva generación de instalaciones empieza aquí.</h1>
            <p>Distribuimos tecnologías PEX y HDPE de marcas con presencia mundial para construir con mayor calidad, reducir problemas futuros y optimizar los costos de ejecución.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#productos">Ver productos <SiteIcon name="arrow" /></a>
              <a className="button button-outline" href="#contacto">Contáctanos</a>
            </div>
          </div>
          <div className="hero-statbar">
            <div><strong>PEX</strong><span>Plomería flexible</span></div>
            <div><strong>HDPE</strong><span>Infraestructura durable</span></div>
            <div><strong>APS</strong><span>Respaldo en Guatemala</span></div>
          </div>
        </section>

        <section className="company-summary section-pad reveal">
          <div className="shell summary-grid">
            <p className="eyebrow">Quiénes somos</p>
            <h2>Soluciones que mejoran la obra de hoy y protegen la inversión de mañana.</h2>
            <div>
              <p>APS conecta al mercado guatemalteco con nuevas tecnologías para instalaciones hidráulicas, gas, climatización y protección contra incendios. Seleccionamos sistemas que aportan eficiencia, confiabilidad y valor durante todo el ciclo del proyecto.</p>
              <a className="text-link" href="#acerca-de">Conocer APS <SiteIcon name="arrow" /></a>
            </div>
          </div>
        </section>

        <section className="benefits section-pad reveal" aria-labelledby="beneficios-title">
          <div className="shell">
            <SectionHeading eyebrow="Por qué APS" title="Más que materiales: una mejor forma de ejecutar." intro="Combinamos productos internacionales con acompañamiento local para tomar decisiones informadas." />
            <div className="benefit-grid">
              {benefits.map((benefit, index) => (
                <article key={benefit.title}>
                  <span>0{index + 1}</span><SiteIcon name="check" /><h3>{benefit.title}</h3><p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="acerca-de">
          <div className="shell">
            <SectionHeading light eyebrow="Acerca de APS" title="Experiencia técnica con una visión de futuro." intro="Una empresa guatemalteca enfocada en distribuir tecnologías que elevan el estándar de cada instalación." />
            <div className="about-pillars reveal">
              <article><span>Empresa</span><h3>Construimos relaciones de largo plazo.</h3><p>Nuestra historia comienza con la convicción de que mejores sistemas producen mejores proyectos. Acompañamos a diseñadores, constructores e instaladores con soluciones modernas.</p></article>
              <article><span>Misión</span><h3>Acercar tecnología confiable.</h3><p>Distribuir sistemas de clase mundial y facilitar su correcta selección e instalación en Guatemala.</p></article>
              <article><span>Visión</span><h3>Elevar el estándar del mercado.</h3><p>Ser un referente regional en sistemas innovadores, eficientes y durables para la construcción.</p></article>
              <article><span>Compromiso</span><h3>Calidad verificable.</h3><p>Priorizar compatibilidad, documentación técnica, buenas prácticas y soporte para cada aplicación.</p></article>
            </div>

            <div className="technology-block reveal" id="tecnologia-pex">
              <div className="technology-photo">
                <Image src="/images/pex-installation.jpg" fill sizes="(max-width: 900px) 100vw, 48vw" alt="Instalación profesional con tuberías PEX rojas y azules" />
              </div>
              <div className="technology-copy">
                <p className="eyebrow">Tecnología PEX</p>
                <h2>¿Qué es PEX y por qué utilizarlo?</h2>
                <p>PEX es polietileno reticulado: una estructura molecular modificada para mejorar su comportamiento térmico, flexibilidad y resistencia. Se emplea en redes de agua fría y caliente, distribución por colectores y otras aplicaciones aprobadas por el fabricante.</p>
                <ul>{pexAdvantages.map((item) => <li key={item}><SiteIcon name="check" size={18} />{item}</li>)}</ul>
                <div className="type-row">
                  {pexTypes.map((type) => <div key={type.name}><strong>{type.name}</strong><span>{type.method}</span><small>{type.text}</small></div>)}
                </div>
                <p className="technical-note">Frente al PVC rígido, PEX puede reducir accesorios y tiempos de montaje, admite aplicaciones de agua caliente según su clasificación y no utiliza cemento solvente. La selección final depende de presión, temperatura, norma y sistema de unión.</p>
              </div>
            </div>

            <div className="technology-block technology-reverse reveal" id="tecnologia-hdpe">
              <div className="technology-photo">
                <Image src="/images/hdpe-fire-protection.jpg" fill sizes="(max-width: 900px) 100vw, 48vw" alt="Red HDPE instalada con válvulas para protección contra incendios" />
              </div>
              <div className="technology-copy">
                <p className="eyebrow">Tecnología HDPE</p>
                <h2>¿Qué es HDPE y por qué utilizarlo?</h2>
                <p>HDPE es polietileno de alta densidad. Su flexibilidad, bajo peso, resistencia a la corrosión y uniones por termofusión o electrofusión permiten crear redes continuas para aplicaciones hidráulicas exigentes.</p>
                <ul>{hdpeApplications.map((item) => <li key={item}><SiteIcon name="check" size={18} />{item}</li>)}</ul>
                <div className="sdr-note"><strong>SDR / DR</strong><p>Relaciona el diámetro exterior con el espesor de pared. Un DR menor implica una pared proporcionalmente más gruesa; la presión admisible también depende de la resina, temperatura y norma.</p></div>
                <p className="technical-note">En sistemas hidráulicos y contra incendios deben comprobarse aprobaciones, certificaciones, diseño hidráulico y requisitos de la autoridad competente para cada producto.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="products-section section-pad" id="productos">
          <div className="shell">
            <SectionHeading eyebrow="Catálogo" title="Productos organizados por aplicación." intro="Cada familia integra tubería, accesorios y métodos de instalación compatibles." />
            <div className="category-grid">
              {productCategories.map((category, index) => (
                <article className="category-card reveal" key={category.slug}>
                  <div className="category-image"><Image src={category.image} fill sizes="(max-width: 760px) 100vw, 42vw" alt={category.alt} /></div>
                  <div className="category-content">
                    <span className="category-number">0{index + 1} · {category.eyebrow}</span>
                    <h3>{category.name}</h3><p>{category.description}</p>
                    <ul>{category.products.map((product) => <li key={product}>{product}</li>)}</ul>
                    <a className="text-link" href="#contacto">Solicitar información <SiteIcon name="arrow" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section section-pad" id="servicios">
          <div className="shell services-layout">
            <div className="services-intro">
              <p className="eyebrow">Servicios</p><h2>Equipo y verificación para ejecutar con confianza.</h2>
              <p>Complementamos el suministro con recursos especializados para instalar y comprobar los sistemas correctamente.</p>
              <a className="button button-primary" href="#contacto">Solicitar cotización <SiteIcon name="arrow" /></a>
            </div>
            <div className="service-cards">
              {services.map((service, index) => (
                <article className="reveal" key={service.name}>
                  <div><span>{service.number}</span><SiteIcon name={index === 0 ? "tool" : "gauge"} size={34} /></div>
                  <h3>{service.name}</h3><p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="downloads-section section-pad" id="descargas">
          <div className="shell">
            <SectionHeading eyebrow="Centro técnico" title="Descargas y recursos." intro="Esta biblioteca está preparada para publicar documentos y videos sin cambiar su estructura." />
            <div className="download-list">
              {downloads.map((item, index) => (
                <article className="reveal" key={item.name}>
                  <span>0{index + 1}</span><SiteIcon name={item.type === "PDF" ? "document" : "download"} size={30} />
                  <div><h3>{item.name}</h3><p>{item.note}</p></div>
                  <strong>Próximamente disponible</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section-pad" id="proyectos">
          <div className="shell">
            <SectionHeading light eyebrow="Proyectos de referencia" title="Sistemas aplicados en obra." intro="Una galería preparada para crecer con fotografías, productos, ubicación y año de cada proyecto." />
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card reveal" key={project.slug}>
                  <div className="project-image"><Image src={project.image} fill sizes="(max-width: 800px) 100vw, 60vw" alt={project.alt} /></div>
                  <div className="project-info">
                    <p className="eyebrow">Proyecto 01</p><h3>{project.name}</h3><p>{project.description}</p>
                    <dl><div><dt>Ubicación</dt><dd>{project.location}</dd></div><div><dt>Año</dt><dd>{project.year}</dd></div><div><dt>Productos</dt><dd>{project.products.join(" · ")}</dd></div></dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="whatsapp-banner">
          <div className="shell"><div><p className="eyebrow">Respuesta directa</p><h2>¿Tiene un proyecto en evaluación?</h2></div><a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><SiteIcon name="whatsapp" />Escribir por WhatsApp</a></div>
        </section>

        <section className="contact-section section-pad" id="contacto">
          <div className="shell">
            <SectionHeading eyebrow="Contacto" title="Conversemos sobre su proyecto." intro="Comparta sus datos y la necesidad principal. En esta versión inicial, el formulario está preparado visualmente y el envío se habilitará al conectar un servicio seguro." />
            <div className="contact-grid">
              <form className="contact-form" action="#" aria-label="Formulario de contacto">
                <div className="form-row"><label>Nombre<input name="name" type="text" autoComplete="name" required /></label><label>Empresa<input name="company" type="text" autoComplete="organization" /></label></div>
                <div className="form-row"><label>Correo<input name="email" type="email" autoComplete="email" required /></label><label>Teléfono<input name="phone" type="tel" autoComplete="tel" required /></label></div>
                <label>Mensaje<textarea name="message" rows={6} required placeholder="Cuéntenos sobre la aplicación, cantidades o etapa del proyecto." /></label>
                <button className="button button-dark" type="button">Enviar consulta <SiteIcon name="arrow" /></button>
                <small>Mockup inicial: el formulario todavía no transmite información.</small>
              </form>
              <aside className="contact-aside">
                <div className="contact-actions">
                  <a href="tel:+50266766835"><SiteIcon name="phone" /><span><small>Llamar</small>6676-6835</span></a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer"><SiteIcon name="whatsapp" /><span><small>WhatsApp</small>4387-7424</span></a>
                </div>
                <div className="map-placeholder"><SiteIcon name="location" size={42} /><h3>Ubicación en Guatemala</h3><p>Espacio preparado para agregar la dirección y el mapa cuando los datos estén confirmados.</p></div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand"><Image src="/brand/aps-logo-horizontal.png" width={1600} height={305} alt="APS — Advanced Plumbing Systems" /><p>Tecnologías PEX y HDPE para proyectos modernos en Guatemala.</p></div>
          <div><h3>Explorar</h3><a href="#acerca-de">Acerca de</a><a href="#productos">Productos</a><a href="#servicios">Servicios</a><a href="#proyectos">Proyectos</a></div>
          <div><h3>Contacto</h3><a href="tel:+50266766835">6676-6835</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp 4387-7424</a><a href="mailto:ventas@apspro.net">ventas@apspro.net</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 APS. Todos los derechos reservados.</span><a href="#inicio">Volver arriba ↑</a></div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}
