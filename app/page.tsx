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
              <p className="eyebrow"><span /> Ingeniería que mantiene su operación en movimiento</p>
              <h1>Soluciones industriales para proyectos que no pueden detenerse.</h1>
              <p className="hero-lead">Integramos productos confiables, soporte técnico y respuesta ágil para convertir una especificación compleja en una solución lista para operar.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#productos">Explorar soluciones <ArrowIcon /></a>
                <a className="button button-ghost" href="#cotizar">Hablar con un especialista</a>
              </div>
              <div className="hero-proof">
                <div><strong>ISO</strong><span>Sistema de calidad<br />de referencia</span></div>
                <div><strong>24h</strong><span>Respuesta comercial<br />inicial</span></div>
                <div><strong>LATAM</strong><span>Cobertura regional<br />simulada</span></div>
              </div>
            </div>
            <div className="hero-machine" aria-label="Ilustración abstracta de un sistema industrial">
              <div className="machine-label"><span>NTX</span> SYSTEM / 01</div>
              <div className="machine-ring ring-back" />
              <div className="machine-ring ring-main"><i /></div>
              <div className="machine-bar bar-one" />
              <div className="machine-bar bar-two" />
              <div className="machine-dot dot-one" />
              <div className="machine-dot dot-two" />
              <div className="machine-note">ENGINEERED FLOW<br /><strong>DN 25—630</strong></div>
            </div>
          </div>
          <div className="hero-index"><span>01</span><i /><span>05</span></div>
        </section>

        <section className="intro-section" id="empresa">
          <div className="shell intro-grid">
            <div>
              <p className="section-kicker">Qué resolvemos</p>
              <h2>Menos incertidumbre.<br />Más continuidad operativa.</h2>
            </div>
            <div className="intro-copy">
              <p>Este contenido es demostrativo. La propuesta final combinará selección técnica, documentación clara y acompañamiento comercial para que cada cliente encuentre la solución correcta con menos fricción.</p>
              <a className="text-link" href="#cotizar">Conocer nuestro enfoque <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="categories-section" id="productos">
          <div className="shell">
            <div className="section-heading-row">
              <div><p className="section-kicker light">Portafolio</p><h2>Categorías principales</h2></div>
              <p>Una estructura preparada para crecer desde un catálogo compacto hasta un portafolio técnico completo.</p>
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
              <div><p className="section-kicker">Selección inicial</p><h2>Productos destacados</h2></div>
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
              <h2>Experiencia donde la exigencia es parte del trabajo.</h2>
              <p>Organizamos las soluciones según el contexto real de cada industria, no solamente por nombre de producto.</p>
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
            <div className="project-visual" aria-hidden="true">
              <div className="project-grid-lines" />
              <div className="project-tank tank-one" /><div className="project-tank tank-two" />
              <div className="project-pipe" /><span>CASE / 001</span>
            </div>
            <div className="project-copy">
              <p className="section-kicker">Proyecto destacado · Demo</p>
              <h2>Modernización de una red de proceso en Centroamérica.</h2>
              <p>Ejemplo de cómo presentaríamos el reto, la solución suministrada, las normas aplicadas y los resultados verificables de un caso real.</p>
              <dl><div><dt>Sector</dt><dd>Manufactura</dd></div><div><dt>Alcance</dt><dd>Diseño + suministro</dd></div><div><dt>Resultado</dt><dd>Dato por validar</dd></div></dl>
              <a className="button button-dark" href="#cotizar">Ver caso de éxito <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="certifications-section">
          <div className="shell certifications-wrap">
            <p>Referencias normativas demostrativas</p>
            <div className="certification-list"><span>ISO 9001</span><span>ASTM</span><span>ASME</span><span>NSF</span><span>CE</span></div>
            <small>Las certificaciones definitivas solo se publicarán después de verificar su documentación.</small>
          </div>
        </section>

        <section className="quote-section" id="cotizar">
          <div className="shell quote-layout">
            <div className="quote-copy">
              <p className="section-kicker light">Inicie su proyecto</p>
              <h2>Cuéntenos qué necesita mover, controlar o transformar.</h2>
              <p>Formulario de demostración. En la versión funcional añadiremos validación segura, antispam y notificaciones sin exponer credenciales.</p>
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
            <p>Ingeniería, suministro y soporte para sistemas industriales.</p>
          </div>
          <div><h3>Soluciones</h3><a href="#productos">Productos</a><a href="#industrias">Industrias</a><a href="#proyectos">Proyectos</a></div>
          <div><h3>Empresa</h3><a href="#empresa">Nosotros</a><a href="#cotizar">Contacto</a><a href="#inicio">Certificaciones</a></div>
          <div><h3>Información</h3><a href="#inicio">Privacidad</a><a href="#inicio">Términos</a><a href="#inicio">Preguntas frecuentes</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 APS — Contenido de productos y contacto parcialmente ficticio para demostración.</span><a href="#inicio">Volver arriba ↑</a></div>
      </footer>
    </>
  );
}
