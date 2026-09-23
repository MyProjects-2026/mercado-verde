"use client";

export default function MercadoVerdeHome() {
  const categories = [
    ["🌽", "Cereais", "Milho, arroz, trigo e outros"],
    ["🥬", "Hortícolas", "Produtos frescos de produtores"],
    ["🍅", "Frutas", "Fruta fresca da época"],
    ["🐔", "Pecuária", "Animais e produtos pecuários"],
  ];

  const products = [
    ["🌽", "Milho", "Marracuene, Maputo", "65 MZN/kg"],
    ["🍅", "Tomate fresco", "Boane, Maputo", "85 MZN/kg"],
    ["🥔", "Batata", "Namaacha, Maputo", "70 MZN/kg"],
    ["🥬", "Couve fresca", "Matola, Maputo", "45 MZN/molho"],
  ];

  return (
    <>
      <header className="mv-header">
        <div className="mv-container mv-nav">
          <a href="/" className="mv-logo">
            <span className="mv-logo-mark">🌿</span>
            <span>Mercado Verde</span>
          </a>

          <nav className="mv-links">
            <a href="/">Início</a>
            <a href="/produtos">Produtos</a>
            <a href="/produtores">Produtores</a>
            <a href="/compradores">Compradores</a>
            <a href="/sobre">Sobre nós</a>
          </nav>

          <div className="mv-actions">
            <a href="/login" className="mv-btn mv-btn-outline">Entrar</a>
            <a href="/registar" className="mv-btn mv-btn-primary">Criar conta</a>
          </div>
        </div>
      </header>

      <main>
        <section className="mv-hero">
          <div className="mv-container mv-hero-grid">
            <div>
              <div className="mv-eyebrow">🌱 Agricultura moçambicana</div>
              <h1>
                Do produtor<br />
                <span>para o mercado.</span>
              </h1>
              <p>
                Encontre produtos agrícolas, ligue-se diretamente aos produtores
                e faça negócios no Mercado Verde.
              </p>

              <div className="mv-search">
                <input
                  type="search"
                  placeholder="O que procura? Ex.: milho, tomate, batata..."
                />
                <button className="mv-btn mv-btn-primary">
                  Procurar
                </button>
              </div>
            </div>

            <div className="mv-hero-card">
              <div className="mv-eyebrow" style={{color:"#f5cf76"}}>
                Mercado de Maputo
              </div>

              <h2>
                Produtos locais. Oportunidades reais.
              </h2>

              <p>
                Uma plataforma para aproximar produtores, compradores e
                negócios agrícolas em Moçambique.
              </p>

              <div className="mv-stat-row">
                <div className="mv-stat">
                  <strong>Maputo</strong>
                  <span>Mercado inicial</span>
                </div>
                <div className="mv-stat">
                  <strong>24/7</strong>
                  <span>Marketplace online</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mv-section">
          <div className="mv-container">
            <div className="mv-section-head">
              <div>
                <h2>Explore por categoria</h2>
                <p>Encontre rapidamente o que precisa.</p>
              </div>
              <a href="/produtos" className="mv-btn mv-btn-outline">
                Ver todos
              </a>
            </div>

            <div className="mv-grid">
              {categories.map(([icon, title, description]) => (
                <a href="/produtos" className="mv-category" key={title}>
                  <div className="mv-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mv-section">
          <div className="mv-container">
            <div className="mv-section-head">
              <div>
                <h2>Produtos em destaque</h2>
                <p>Veja alguns produtos disponíveis no mercado.</p>
              </div>
              <a href="/produtos" className="mv-btn mv-btn-outline">
                Explorar produtos
              </a>
            </div>

            <div className="mv-products">
              {products.map(([icon, name, location, price]) => (
                <article className="mv-product" key={name}>
                  <div className="mv-product-image">{icon}</div>
                  <div className="mv-product-body">
                    <h3>{name}</h3>
                    <div className="mv-location">📍 {location}</div>
                    <div className="mv-price">{price}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mv-section mv-market">
          <div className="mv-container">
            <div className="mv-market-card">
              <div>
                <div className="mv-eyebrow">Mercado local</div>
                <h2>Ligamos quem produz a quem compra.</h2>
                <p style={{color:"var(--mv-muted)", lineHeight:1.7}}>
                  O Mercado Verde facilita a descoberta de produtos agrícolas,
                  fornecedores e oportunidades comerciais.
                </p>

                <a href="/registar" className="mv-btn mv-btn-primary">
                  Começar agora
                </a>
              </div>

              <div>
                <h3>Preços e disponibilidade</h3>

                <div className="mv-list">
                  <div className="mv-list-item">
                    <span>Milho</span>
                    <strong>Disponível</strong>
                  </div>
                  <div className="mv-list-item">
                    <span>Tomate</span>
                    <strong>Disponível</strong>
                  </div>
                  <div className="mv-list-item">
                    <span>Batata</span>
                    <strong>Disponível</strong>
                  </div>
                  <div className="mv-list-item">
                    <span>Hortícolas</span>
                    <strong>Disponível</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mv-footer">
        <div className="mv-container">
          <div className="mv-footer-grid">
            <div>
              <div className="mv-logo" style={{color:"white"}}>
                <span className="mv-logo-mark">🌿</span>
                <span>Mercado Verde</span>
              </div>

              <p>
                Marketplace agrícola para aproximar produtores, compradores
                e oportunidades em Moçambique.
              </p>
            </div>

            <div>
              <h3>Mercado</h3>
              <a href="/produtos">Produtos</a>
              <a href="/produtores">Produtores</a>
              <a href="/compradores">Compradores</a>
            </div>

            <div>
              <h3>Empresa</h3>
              <a href="/sobre">Sobre nós</a>
              <a href="/contacto">Contactos</a>
            </div>

            <div>
              <h3>Conta</h3>
              <a href="/login">Entrar</a>
              <a href="/registar">Criar conta</a>
            </div>
          </div>

          <div className="mv-footer-bottom">
            © {new Date().getFullYear()} Mercado Verde. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
