import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import {
  advantages,
  categories,
  hdpeSdr,
  hdpeVsGalvanized,
  industries,
  pexProperties,
  pexTypes,
  pexVsPvc,
  products,
  wallComparison,
} from "@/data/catalog";

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
              <h1>Sistemas PEX y HDPE para construir mejor.</h1>
              <p className="hero-lead">APS distribuye tecnologías de polietileno de fabricantes con presencia mundial para elevar la calidad de los proyectos, reducir riesgos futuros y optimizar los costos de ejecución.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#productos">Conocer nuestras soluciones <ArrowIcon /></a>
                <a className="button button-ghost" href="#cotizar">Hablar con un especialista</a>
              </div>
              <div className="hero-proof">
                <div><strong>PEX</strong><span>Instalaciones<br />en edificios</span></div>
                <div><strong>HDPE</strong><span>Redes municipales<br />e industriales</span></div>
                <div><strong>GT</strong><span>Distribución<br />en Guatemala</span></div>
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
              <p>Desde Guatemala, APS se especializa en acercar nuevas tecnologías para instalaciones hidráulicas e infraestructura. Distribuimos sistemas PEX y HDPE de marcas con presencia mundial y acompañamos a desarrolladores, diseñadores e instaladores para seleccionar soluciones que aporten valor durante la obra y a lo largo de la vida útil del proyecto.</p>
              <a className="text-link" href="#tecnologia-pex">Comparar tecnologías <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="categories-section" id="productos">
          <div className="shell">
            <div className="section-heading-row">
              <div><p className="section-kicker light">Portafolio PEX + HDPE</p><h2>Un sistema, no solo una tubería.</h2></div>
              <p>Tubería, conexiones, herramientas y métodos de unión deben especificarse como un conjunto compatible para obtener un resultado confiable.</p>
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
              <p className="section-kicker light">Aplicaciones HDPE</p>
              <h2>Infraestructura preparada para condiciones exigentes.</h2>
              <p>La resistencia a corrosión y abrasión, la flexibilidad y las uniones por fusión permiten considerar HDPE en redes municipales, minería, industria, agricultura y proyectos sin zanja.</p>
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

        <section className="project-section" id="tecnologia-pex">
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

        <section className="materials-detail-section" aria-labelledby="pex-detail-title">
          <div className="shell">
            <div className="technical-heading">
              <div>
                <p className="section-kicker">Guía general</p>
                <h2 id="pex-detail-title">Tipos y propiedades de la tubería PEX</h2>
              </div>
              <p>PEX-a, PEX-b y PEX-c identifican el proceso de reticulación; no representan una escala automática de calidad. Los productos aprobados deben cumplir la norma y clasificación aplicable.</p>
            </div>

            <div className="pex-type-grid">
              {pexTypes.map((type) => (
                <article key={type.name}>
                  <span>{type.process}</span>
                  <h3>{type.name}</h3>
                  <p>{type.text}</p>
                </article>
              ))}
            </div>

            <div className="property-panel">
              <div>
                <p className="section-kicker light">Propiedades frecuentes</p>
                <h3>Por qué se utiliza PEX</h3>
              </div>
              <ul>
                {pexProperties.map((property) => <li key={property}>{property}</li>)}
              </ul>
            </div>

            <div className="comparison-block">
              <div className="comparison-heading">
                <div><p className="section-kicker">Comparativa responsable</p><h3>PEX frente a PVC convencional</h3></div>
                <p>La opción correcta depende de temperatura, presión, diámetro, exposición, normativa, mano de obra y costo total instalado.</p>
              </div>
              <div className="table-scroll" role="region" aria-label="Comparación entre PEX y PVC convencional" tabIndex={0}>
                <table>
                  <thead><tr><th>Aspecto</th><th>PEX</th><th>PVC convencional</th></tr></thead>
                  <tbody>
                    {pexVsPvc.map((row) => <tr key={row.property}><th scope="row">{row.property}</th><td>{row.pex}</td><td>{row.pvc}</td></tr>)}
                  </tbody>
                </table>
              </div>
              <small>Importante: PVC y CPVC no son equivalentes. Para agua caliente debe verificarse un material y sistema expresamente clasificado para esa temperatura.</small>
            </div>
          </div>
        </section>

        <section className="hdpe-section" id="hdpe" aria-labelledby="hdpe-title">
          <div className="shell">
            <div className="hdpe-intro">
              <div>
                <p className="section-kicker light">Polietileno de alta densidad</p>
                <h2 id="hdpe-title">HDPE para redes continuas, flexibles y resistentes.</h2>
              </div>
              <p>La tubería HDPE se utiliza en conducción de agua, aguas residuales, minería, industria y otras aplicaciones de presión. Sus uniones por termofusión o electrofusión pueden formar una línea monolítica y autorrestringida, mientras su superficie interna lisa conserva buenas condiciones hidráulicas.</p>
            </div>

            <div className="sdr-explainer">
              <div className="sdr-formula">
                <span>Cómo leer el SDR/DR</span>
                <code>DR = diámetro exterior ÷ espesor mínimo</code>
                <p>Un número DR menor significa una pared proporcionalmente más gruesa. La presión admisible también depende de la resina, temperatura, norma y factor de diseño.</p>
              </div>
              <div className="sdr-grid">
                {hdpeSdr.map((item) => (
                  <article key={item.dr}><strong>{item.dr}</strong><span>{item.wall}</span><p>{item.reference}</p></article>
                ))}
              </div>
            </div>

            <div className="comparison-block comparison-dark">
              <div className="comparison-heading">
                <div><p className="section-kicker light">Ejemplo geométrico</p><h3>PVC 250 psi frente a HDPE DR 11 y DR 9</h3></div>
                <p>Mismo diámetro exterior IPS de 4.500″. El ejemplo permite comparar pared, no sustituye la selección hidráulica o estructural.</p>
              </div>
              <div className="table-scroll" role="region" aria-label="Comparación ilustrativa de espesor de pared" tabIndex={0}>
                <table>
                  <thead><tr><th>Material</th><th>Clasificación</th><th>Espesor</th><th>Respecto al PVC</th></tr></thead>
                  <tbody>
                    {wallComparison.map((row) => <tr key={row.material + row.standard}><th scope="row">{row.material}</th><td>{row.standard}</td><td>{row.thickness}</td><td>{row.relative}</td></tr>)}
                  </tbody>
                </table>
              </div>
              <small>El PVC mostrado corresponde a una tabla ASTM D2241 SDR 17 de 250 psi. Los valores HDPE son el cálculo OD/DR para el mismo OD; confirme siempre dimensiones mínimas, presión y tolerancias con el submittal del fabricante.</small>
            </div>

            <div className="comparison-block comparison-dark galvanized-comparison">
              <div className="comparison-heading">
                <div><p className="section-kicker light">Selección de material</p><h3>HDPE frente a tubería de hierro galvanizado</h3></div>
                <p>Ningún material es universalmente superior. La decisión debe considerar ambiente, temperatura, presión, exposición, soportes, protección contra incendio y capacidad de instalación.</p>
              </div>
              <div className="table-scroll" role="region" aria-label="Comparación entre HDPE y hierro galvanizado" tabIndex={0}>
                <table>
                  <thead><tr><th>Aspecto</th><th>HDPE</th><th>Hierro galvanizado</th></tr></thead>
                  <tbody>
                    {hdpeVsGalvanized.map((row) => <tr key={row.property}><th scope="row">{row.property}</th><td>{row.hdpe}</td><td>{row.galvanized}</td></tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="certifications-section">
          <div className="shell certifications-wrap">
            <p>Referencias técnicas frecuentes en sistemas PEX y HDPE</p>
            <div className="certification-list"><span>ASTM F876</span><span>ASTM F877</span><span>ASTM D3035</span><span>ASTM F2620</span><span>AWWA C906</span><span>NSF 61</span></div>
            <small>La conformidad y certificación definitiva dependerán de cada producto, fabricante y aplicación.</small>
          </div>
        </section>

        <section className="quote-section" id="cotizar">
          <div className="shell quote-layout">
            <div className="quote-copy">
              <p className="section-kicker light">Construya con una mejor solución</p>
              <h2>Cuéntenos qué necesita su instalación o red.</h2>
              <p>Comparta el tipo de proyecto, fluido, presión, temperatura, diámetro y etapa de obra. APS podrá orientarle sobre alternativas PEX o HDPE cuando el portafolio definitivo esté confirmado.</p>
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
            <p>Distribución de tecnologías PEX y HDPE para proyectos modernos en Guatemala.</p>
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
