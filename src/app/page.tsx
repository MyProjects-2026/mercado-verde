"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("mv_user_name");
    if (savedName) setName(savedName);
  }, []);

  const categories = [
    {
      icon: "🌽",
      title: "Cereais",
      text: "Milho, arroz, trigo e outros",
    },
    {
      icon: "🥬",
      title: "Hortícolas",
      text: "Produtos frescos de produtores",
    },
    {
      icon: "🍌",
      title: "Frutas",
      text: "Frutas frescas e da época",
    },
    {
      icon: "🥔",
      title: "Tubérculos",
      text: "Batata, mandioca e outros",
    },
  ];

  return (
    <main className={styles.page}>

      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerInner}>

          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>🌿</span>

            <span className={styles.logoWords}>
              <strong>Mercado Verde</strong>
              <small>Do produtor ao comprador.</small>
            </span>
          </Link>

          <Link
            href="/auth?mode=signup"
            className={styles.headerButton}
          >
            Criar conta
          </Link>

        </div>
      </header>


      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>

          <div className={styles.heroContent}>

            <div className={styles.eyebrow}>
              🌱 AGRICULTURA MOÇAMBICANA
            </div>

            {name && (
              <div className={styles.welcome}>
                Bem-vindo, {name.split(" ")[0]} 👋
              </div>
            )}

            <h1>
              Do produtor
              <br />
              <span>para o mercado.</span>
            </h1>

            <p className={styles.heroText}>
              Encontre produtos agrícolas, ligue-se diretamente
              aos produtores e faça negócios no Mercado Verde.
            </p>


            {/* SEARCH */}
            <div className={styles.searchBox}>

              <input
                type="text"
                placeholder="O que procura? Ex.: milho, tomate, batata..."
              />

              <Link
                href="/auth?role=buyer"
                className={styles.searchButton}
              >
                Procurar
              </Link>

            </div>


            {/* ACTION BUTTONS — NORMAL FLOW */}
            <div className={styles.heroActions}>

              <Link
                href="/auth?role=producer"
                className={`${styles.actionButton} ${styles.greenButton}`}
              >
                👩🏾‍🌾 Quero vender
              </Link>

              <Link
                href="/auth?role=buyer"
                className={`${styles.actionButton} ${styles.outlineButton}`}
              >
                🏪 Quero comprar
              </Link>

            </div>

          </div>


          {/* HERO CARD */}
          <div className={styles.heroCard}>

            <div className={styles.heroCardContent}>

              <div>
                <div className={styles.cardEyebrow}>
                  MERCADO DE MAPUTO
                </div>

                <h2>
                  Produtos locais.
                  <br />
                  Negócios reais.
                </h2>

                <p>
                  Uma plataforma para aproximar quem produz
                  de quem compra.
                </p>
              </div>

              <div className={styles.heroStats}>

                <div>
                  <strong>Maputo</strong>
                  <span>Mercado inicial</span>
                </div>

                <div>
                  <strong>24/7</strong>
                  <span>Marketplace online</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* CATEGORIES */}
      <section className={styles.categories}>

        <div className={styles.sectionHeader}>

          <div>
            <div className={styles.sectionEyebrow}>
              MARKETPLACE
            </div>

            <h2>Explore por categoria</h2>

            <p>
              Encontre rapidamente os produtos agrícolas
              de que precisa.
            </p>
          </div>

          {/* IMPORTANT:
              This is deliberately OUTSIDE the text container.
              It is a normal block, never absolute.
          */}
          <div className={styles.viewAllWrapper}>
            <Link
              href="/auth?role=buyer"
              className={styles.viewAllButton}
            >
              Ver todos
            </Link>
          </div>

        </div>


        <div className={styles.categoryGrid}>

          {categories.map((category) => (
            <div
              className={styles.categoryCard}
              key={category.title}
            >

              <div className={styles.categoryIcon}>
                {category.icon}
              </div>

              <h3>{category.title}</h3>

              <p>{category.text}</p>

            </div>
          ))}

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className={styles.howSection}>

        <div className={styles.sectionInner}>

          <div className={styles.sectionEyebrow}>
            SIMPLES E DIRECTO
          </div>

          <h2>Como funciona</h2>

          <div className={styles.steps}>

            <div className={styles.step}>
              <span>01</span>
              <h3>Publique</h3>
              <p>
                O produtor apresenta os seus produtos,
                quantidades e disponibilidade.
              </p>
            </div>

            <div className={styles.step}>
              <span>02</span>
              <h3>Encontre</h3>
              <p>
                O comprador pesquisa produtos e
                encontra produtores.
              </p>
            </div>

            <div className={styles.step}>
              <span>03</span>
              <h3>Negocie e venda</h3>
              <p>
                As duas partes entram em contacto
                e fazem o negócio.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* PRODUCER / BUYER */}
      <section className={styles.businessSection}>

        <div className={styles.businessGrid}>

          <div className={`${styles.businessCard} ${styles.producerCard}`}>

            <div className={styles.businessIcon}>👩🏾‍🌾</div>

            <h2>É produtor?</h2>

            <p>
              Apresente os seus produtos e encontre
              compradores para a sua produção.
            </p>

            <div className={styles.cardButtonArea}>
              <Link
                href="/auth?role=producer"
                className={styles.whiteButton}
              >
                Começar a vender
              </Link>
            </div>

          </div>


          <div className={`${styles.businessCard} ${styles.buyerCard}`}>

            <div className={styles.businessIcon}>🏪</div>

            <h2>É comprador?</h2>

            <p>
              Encontre produtos agrícolas e conecte-se
              diretamente aos produtores.
            </p>

            {/* IMPORTANT:
                Button is in its own block below the text.
            */}
            <div className={styles.cardButtonArea}>
              <Link
                href="/auth?role=buyer"
                className={styles.greenAction}
              >
                Explorar produtos
              </Link>
            </div>

          </div>

        </div>

      </section>


      {/* FOUNDER */}
      <section className={styles.founderSection}>

        <div className={styles.founderInner}>

          <div className={styles.founderBadge}>
            MERCADO VERDE
          </div>

          <div className={styles.founderGrid}>

            <div>
              <h2>
                Conheça o fundador.
              </h2>

              <p>
                O Mercado Verde nasceu com a visão de aproximar
                produtores agrícolas e compradores através
                de tecnologia e informação de mercado.
              </p>
            </div>

            <div className={styles.founderInfo}>

              <div className={styles.founderName}>
                Toni Magaie
              </div>

              <div className={styles.founderRole}>
                Fundador
              </div>

              <div className={styles.founderExperience}>
                <strong>Experiência</strong>
                <span>Information Analyst</span>
                <span>Market Research</span>
              </div>

              <a
                href="tel:+258879843287"
                className={styles.contactButton}
              >
                📞 +258 87 984 3287
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className={styles.finalSection}>

        <div className={styles.finalCard}>

          <div className={styles.sectionEyebrowLight}>
            MERCADO VERDE
          </div>

          <h2>Do produtor ao comprador.</h2>

          <p>
            Faça parte de uma nova forma de comercializar
            produtos agrícolas em Moçambique.
          </p>

          <div className={styles.finalButtonArea}>
            <Link
              href="/auth?mode=signup"
              className={styles.finalButton}
            >
              Criar a minha conta
            </Link>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className={styles.footer}>

        <div className={styles.footerInner}>

          <div>
            <strong>🌿 Mercado Verde</strong>
            <span>Do produtor ao comprador.</span>
          </div>

          <div>
            <strong>Fundador</strong>
            <span>Toni Magaie</span>
          </div>

          <div>
            <strong>Contacto</strong>
            <a href="tel:+258879843287">
              +258 87 984 3287
            </a>
          </div>

          <div>
            <span>Maputo, Moçambique 🇲🇿</span>
            <span>
              © {new Date().getFullYear()} Mercado Verde
            </span>
          </div>

        </div>

      </footer>

    </main>
  );
}
