import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { advantages, categories, industries, products } from "@/data/catalog";

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function ProductVisual({ accent }: { accent: string }) {
  return (
    <div className={`product-visual product-${accent}`} aria-hidden="true">
      <div className="technical-grid" />
      <div className="pipe pipe-one"><span /></div>
      <div className="pipe pipe-two"><span /></div>
      <div className="spec-lines"><i /><i /><i /></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Nuevas tecnologías para Guatemala</p>
              <h1>Sistemas PEX para construir mejor desde la instalación.</h1>
              <p className="hero-lead">APS distribuye soluciones de polietileno reticulado de fabricantes con presencia mundial para elevar la calidad de los proyectos, reducir riesgos futuros y optimizar los costos de ejecución.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#productos">Conocer soluciones PEX <ArrowIcon /></a>
                <a className="button button-ghost" href="#cotizar">Hablar con un especialista</a>
              </div>
              <div className="hero-proof">
                <div><strong>PEX</strong><span>Polietileno<br />reticulado</span></div>
                <div><strong>GT</strong><span>Distribución<br />en Guatemala</span></div>
                <div><strong>Global</strong><span>Marcas de alcance<br />internacional</span></div>
              </div>
            </div>
            <div className="hero-machine hero-photo">
              <Image
                src="/images/pex-manifold.jpg"
                fill
                priority
                sizes="(max-width: 920px) 70vw, 48vw"
                alt="Sistema moderno de tubería PEX roja y azul conectado a un colector"
              />
            </div>
          </div>
          <div className="hero-index"><span>01</span><i /><span>05</span></div>
        </section>

        <section className="intro-section" id="empresa">
          <div className="shell intro-grid">
            <div>
              <p className="section-kicker">Quiénes somos</p>
              <h2>Tecnología internacional.<br />Respaldo local.</h2>
            </div>
            <div className="intro-copy">
              <p>Desde Guatemala, APS se especializa en acercar nuevas tecnologías para instalaciones hidráulicas. Distribuimos sistemas de marcas con presencia mundial y acompañamos a desarrolladores, diseñadores e instaladores para seleccionar soluciones que aporten valor durante la obra y a lo largo de la vida útil del proyecto.</p>
              <a className="text-link" href="#proyectos">Conocer la tecnología PEX <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="categories-section" id="productos">
          <div className="shell">
            <div className="section-heading-row">
              <div><p className="section-kicker light">Portafolio PEX</p><h2>Un sistema, no solo una tubería.</h2></div>
              <p>Tubería, conexiones, herramientas y distribución deben especificarse como un conjunto compatible para obtener un resultado confiable.</p>
            </div>
            <div className="category-grid">
              {categories.map((category, index) => (
                <article className="category-card" key={category.name}>
                  <div className="category-top"><span>0{index + 1}</span><b>{category.code}</b></div>
                  <div><h3>{category.name}</h3><p>{category.description}</p></div>
                  <div className="category-footer"><span>{category.count}</span><a href="#destacados" aria-label={`Ver ${category.name}`}><ArrowIcon /></a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="products-section" id="destacados">
          <div className="shell">
            <div className="section-heading-row dark-text">
              <div><p className="section-kicker">Selección inicial</p><h2>Componentes del sistema</h2></div>
              <a className="text-link" href="#productos">Ver todo el catálogo <ArrowIcon /></a>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.slug}>
                  <ProductVisual accent={product.accent} />
                  <div className="product-info">
                    <p>{product.category}</p>
                    <h3>{product.name}</h3>
                    <span className="product-spec">{product.spec}</span>
                    <div className="product-bottom"><span>{product.summary}</span><a href="#cotizar" aria-label={`Cotizar ${product.name}`}><ArrowIcon /></a></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="industries-section" id="industrias">
          <div className="shell industries-layout">
            <div className="industries-title">
              <p className="section-kicker light">Aplicaciones</p>
              <h2>Una tecnología adaptable a proyectos modernos.</h2>
              <p>PEX puede emplearse en redes de agua fría y caliente de proyectos residenciales, multifamiliares y comerciales, siempre de acuerdo con la aprobación y especificaciones del fabricante.</p>
            </div>
            <div className="industry-list">
              {industries.map((industry) => (
                <article key={industry.number}>
                  <span>{industry.number}</span><div><h3>{industry.name}</h3><p>{industry.text}</p></div><a href="#cotizar" aria-label={`Consultar soluciones para ${industry.name}`}>→</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="shell stats-grid">
            {advantages.map((item) => <div key={item.metric}><strong>{item.metric}</strong><span>{item.label}</span></div>)}
          </div>
        </section>

        <section className="project-section" id="proyectos">
          <div className="shell project-layout">
            <div className="project-visual pex-installation">
              <Image
                src="/images/pex-installation.jpg"
                fill
                sizes="(max-width: 920px) 100vw, 55vw"
                alt="Instalación profesional de tubería PEX roja y azul en un proyecto de construcción"
              />
            </div>
            <div className="project-copy">
              <p className="section-kicker">Tecnología PEX</p>
              <h2>¿Qué es el polietileno reticulado?</h2>
              <p>PEX es un polietileno cuya estructura molecular ha sido reticulada para mejorar propiedades como el desempeño a temperatura elevada, la flexibilidad, la resistencia química y la resistencia al crecimiento lento de grietas.</p>
              <dl>
                <div><dt>Instalación</dt><dd>Flexible, ligera y sin llama abierta</dd></div>
                <div><dt>Desempeño</dt><dd>Resistente a corrosión y depósitos</dd></div>
                <div><dt>Proyecto</dt><dd>Menos uniones y ejecución más eficiente</dd></div>
              </dl>
              <p className="technical-note">La aplicación, presión, temperatura, método de unión y compatibilidad de cada sistema deben verificarse con la documentación del fabricante y la normativa aplicable.</p>
              <a className="button button-dark" href="#cotizar">Evaluar mi proyecto <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="certifications-section">
          <div className="shell certifications-wrap">
            <p>Referencias técnicas frecuentes en sistemas PEX</p>
            <div className="certification-list"><span>ASTM F876</span><span>ASTM F877</span><span>NSF 61</span><span>AWWA C904</span></div>
            <small>La conformidad y certificación definitiva dependerán de cada producto, fabricante y aplicación.</small>
          </div>
        </section>

        <section className="quote-section" id="cotizar">
          <div className="shell quote-layout">
            <div className="quote-copy">
              <p className="section-kicker light">Construya con una mejor solución</p>
              <h2>Cuéntenos qué necesita su instalación hidráulica.</h2>
              <p>Comparta el tipo de proyecto, aplicación y etapa de obra. APS podrá orientarle sobre el sistema PEX adecuado cuando el portafolio definitivo esté confirmado.</p>
              <div className="direct-contact"><span>Contacto directo</span><a href="mailto:ventas@apspro.net">ventas@apspro.net</a><a href="tel:+50200000000">+502 0000 0000</a></div>
            </div>
            <form className="quote-form" action="#" aria-label="Formulario de cotización demostrativo">
              <div className="form-row"><label>Nombre completo<input type="text" placeholder="Ej. Ana López" /></label><label>Empresa<input type="text" placeholder="Nombre de empresa" /></label></div>
              <div className="form-row"><label>Correo corporativo<input type="email" placeholder="nombre@empresa.com" /></label><label>País<select defaultValue=""><option value="" disabled>Seleccione</option><option>Guatemala</option><option>El Salvador</option><option>Honduras</option><option>Otro</option></select></label></div>
              <label>Producto o necesidad<select defaultValue=""><option value="" disabled>Seleccione una opción</option>{products.map((product) => <option key={product.slug}>{product.name}</option>)}<option>Necesito asesoría</option></select></label>
              <label>Detalles del proyecto<textarea rows={4} placeholder="Aplicación, cantidad y especificaciones principales" /></label>
              <label className="privacy-check"><input type="checkbox" /> <span>Acepto el tratamiento de mis datos según la política de privacidad.</span></label>
              <button className="button button-primary form-button" type="button">Enviar solicitud de prueba <ArrowIcon /></button>
              <small>Mockup: este botón todavía no envía datos.</small>
            </form>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell footer-main">
          <div className="footer-brand">
            <Image
              className="footer-logo"
              src="/brand/aps-logo-horizontal.png"
              width={1600}
              height={305}
              alt="APS — Advanced Plumbing Systems"
            />
            <p>Distribución de tecnologías PEX para proyectos modernos en Guatemala.</p>
          </div>
          <div><h3>Soluciones</h3><a href="#productos">Productos</a><a href="#industrias">Industrias</a><a href="#proyectos">Proyectos</a></div>
          <div><h3>Empresa</h3><a href="#empresa">Nosotros</a><a href="#cotizar">Contacto</a><a href="#inicio">Certificaciones</a></div>
          <div><h3>Información</h3><a href="#inicio">Privacidad</a><a href="#inicio">Términos</a><a href="#inicio">Preguntas frecuentes</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 APS — Portafolio, marcas y datos de contacto pendientes de confirmación.</span><a href="#inicio">Volver arriba ↑</a></div>
      </footer>
    </>
  );
}
