(function(){
  const pages = [
    { key:'home', label:'Home', href:'HOME.html' },
    { key:'previdencia', label:'Previdencia', href:'previdencia.html' },
    { key:'cartoes', label:'Cartoes', href:'cartoes.html' },
    { key:'seguros', label:'Seguros', href:'seguros.html' },
    { key:'saude', label:'Saude', href:'saude.html' },
    { key:'educacao', label:'Educacao Financeira', href:'HOME.html#educacao' }
  ];

  const aliases = {
    'finmatch-home-v4.html':'home',
    'home.html':'home',
    'finmatch-previdencia-v3 (1).html':'previdencia',
    'previdencia.html':'previdencia',
    'finmatch-cartoes-v2 (1).html':'cartoes',
    'cartoes.html':'cartoes',
    'finmatch-seguros-v1 (1).html':'seguros',
    'seguros.html':'seguros',
    'finmatch-saude-v1 (1).html':'saude',
    'saude.html':'saude',
    'metodologia.html':'metodologia',
    'estrategia.html':'estrategia'
  };

  const catalog = [
    { id:'prev-icatu', cat:'previdencia', title:'Icatu Prev Renda Fixa', metric:'0,50% taxa min.', score:94, href:'previdencia.html', text:'Previdencia privada com boa eficiencia tributaria e custo competitivo.' },
    { id:'prev-xp', cat:'previdencia', title:'XP Prev Longo Prazo', metric:'+15,2% top 12m', score:91, href:'previdencia.html', text:'Alternativa para objetivos de aposentadoria e planejamento familiar.' },
    { id:'card-btg', cat:'cartoes', title:'BTG Black Cashback', metric:'3% cashback top', score:92, href:'cartoes.html', text:'Cartao premium para concentrar gastos e maximizar retorno.' },
    { id:'card-inter', cat:'cartoes', title:'Inter Black Beneficios', metric:'Anuidade otimizada', score:88, href:'cartoes.html', text:'Boa opcao para custo-beneficio e rotina digital.' },
    { id:'seg-auto', cat:'seguros', title:'Seguro Auto Inteligente', metric:'Score 90/100', score:90, href:'seguros.html', text:'Protecao com assistencias essenciais e cobertura ajustada ao perfil.' },
    { id:'seg-vida', cat:'seguros', title:'Vida Familiar Premium', metric:'15+ seguradoras', score:87, href:'seguros.html', text:'Protecao para renda, dependentes e sucessao financeira.' },
    { id:'saude-amil', cat:'saude', title:'Amil Saude Nacional', metric:'Rede ampla', score:93, href:'saude.html', text:'Plano de saude com boa rede credenciada e previsibilidade de uso.' },
    { id:'saude-unimed', cat:'saude', title:'Unimed Custo-Beneficio', metric:'6,87% reaj. medio', score:89, href:'saude.html', text:'Opcao equilibrada para familia e acompanhamento continuo.' }
  ];

  const education = [
    { title:'Como escolher previdencia', href:'HOME.html#educacao', text:'Entenda PGBL, VGBL, taxas e regime tributario.' },
    { title:'Cashback ou milhas', href:'HOME.html#educacao', text:'Compare beneficios pelo seu padrao real de consumo.' },
    { title:'Seguro sem excesso', href:'HOME.html#educacao', text:'Aprenda a escolher cobertura sem pagar por itens irrelevantes.' },
    { title:'Reajuste de planos de saude', href:'HOME.html#educacao', text:'Veja como avaliar custo anual e rede credenciada.' },
    { title:'Metodologia FinMatch', href:'metodologia.html', text:'Conheca pesos, criterios, limites e transparencia do score.' },
    { title:'Minha estrategia', href:'estrategia.html', text:'Monte um plano financeiro por jornada, categoria e prioridade.' }
  ];

  const storage = {
    get(key, fallback){
      try{return JSON.parse(localStorage.getItem(key)) || fallback}catch(_){return fallback}
    },
    set(key, value){localStorage.setItem(key, JSON.stringify(value))}
  };

  function currentKey(){
    const file = decodeURIComponent(location.pathname.split('/').pop() || 'HOME.html').toLowerCase();
    if(location.hash === '#educacao') return 'educacao';
    return aliases[file] || 'home';
  }

  function shellNav(){
    const active = currentKey();
    const links = pages.map(page => {
      const activeClass = page.key === active ? ' is-active' : '';
      return `<li><a class="${activeClass}" href="${page.href}">${page.label}</a></li>`;
    }).join('');

    const mega = catalog.slice(0,4).map(item => `
      <a class="fm-mega-card" href="${item.href}">
        <strong>${item.title}</strong>
        <span>${item.text}</span>
      </a>
    `).join('');

    return `
      <nav id="nav" class="fm-global-nav" aria-label="Navegacao principal">
        <a class="fm-brand" href="HOME.html">Fin<span>Match</span></a>
        <button class="fm-menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">Menu</button>
        <ul class="fm-nav-links">${links}</ul>
        <div class="fm-nav-actions">
          <div class="fm-mega-wrap">
            <button class="fm-pill-btn" type="button">Produtos</button>
            <div class="fm-mega">
              <div class="fm-mega-list">${mega}</div>
              <div class="fm-mega-panel">
                <h3>Comparador unificado</h3>
                <p>Analise score, custo anual, beneficios e aderencia ao perfil antes de decidir.</p>
                <a class="fm-secondary-btn" href="HOME.html#fm-lab">Abrir plataforma</a>
              </div>
            </div>
          </div>
          <button class="fm-icon-btn" data-open-search type="button">Buscar</button>
          <button class="fm-icon-btn" data-theme-toggle type="button">Tema</button>
          <button class="fm-icon-btn" data-open-account type="button">Minha conta</button>
        </div>
      </nav>
    `;
  }

  function shellFooter(){
    return `
      <footer class="fm-global-footer">
        <div class="fm-footer-grid">
          <div class="fm-footer-brand">
            <a class="fm-brand" href="HOME.html">Fin<span>Match</span></a>
            <p>Uma plataforma financeira inteligente para comparar produtos, acompanhar rankings, salvar favoritos e tomar melhores decisoes.</p>
          </div>
          <div class="fm-footer-col">
            <h4>Produtos</h4>
            <a href="previdencia.html">Previdencia</a>
            <a href="cartoes.html">Cartoes</a>
            <a href="seguros.html">Seguros</a>
            <a href="saude.html">Planos de Saude</a>
          </div>
          <div class="fm-footer-col">
            <h4>Plataforma</h4>
            <a href="HOME.html#fm-lab">Comparador unificado</a>
            <a href="HOME.html#rankings">Rankings</a>
            <a href="HOME.html#painel">Painel</a>
            <a href="HOME.html#simulador">Simuladores</a>
          </div>
          <div class="fm-footer-col">
            <h4>Conteudo</h4>
            <a href="HOME.html#educacao">Educacao Financeira</a>
            <a href="HOME.html#fm-glossario">Glossario financeiro</a>
            <a href="HOME.html#fm-metodologia">Metodologia do score</a>
            <a href="metodologia.html">Transparencia</a>
            <a href="estrategia.html">Minha estrategia</a>
          </div>
        </div>
        <div class="fm-footer-bottom">
          <span>(c) 2026 FinMatch. Experiencia demonstrativa.</span>
          <span>Score - Comparacao - Educacao - Jornada financeira</span>
        </div>
      </footer>
    `;
  }

  function replaceShell(){
    const nav = document.querySelector('nav');
    if(nav) nav.outerHTML = shellNav();
    else document.body.insertAdjacentHTML('afterbegin', shellNav());

    const footer = document.querySelector('footer');
    if(footer) footer.outerHTML = shellFooter();
    else document.body.insertAdjacentHTML('beforeend', shellFooter());

    const globalNav = document.querySelector('.fm-global-nav');
    const toggle = document.querySelector('.fm-menu-toggle');
    if(toggle && globalNav){
      toggle.addEventListener('click', () => {
        const open = globalNav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
      });
    }
  }

  function platformHome(){
    const cats = document.getElementById('categorias');
    if(!cats || document.getElementById('fm-lab')) return;
    cats.insertAdjacentHTML('afterend', `
      <section class="fm-platform-section" id="fm-lab">
        <div class="fm-platform-inner">
          <div class="fm-kicker">FinMatch OS</div>
          <h2 class="fm-platform-title">Uma central inteligente para <span>comparar, aprender e decidir</span></h2>
          <p class="fm-platform-lead">A Home agora funciona como hub SaaS: onboarding por perfil, recomendacoes, comparador lado a lado, favoritos, alertas, simuladores, score proprietario e jornada financeira.</p>

          <div class="fm-product-lab">
            <div class="fm-module" id="fm-onboarding">
              <h3>Onboarding por perfil</h3>
              <p>Selecione seu momento financeiro e veja a recomendacao mudar em tempo real.</p>
              <div class="fm-profile-grid">
                <div class="fm-profile-row">
                  <label>Objetivo</label>
                  <div class="fm-chip-group" data-profile-group="goal">
                    <button class="fm-chip is-selected" data-value="proteger">Proteger familia</button>
                    <button class="fm-chip" data-value="aposentar">Aposentar melhor</button>
                    <button class="fm-chip" data-value="otimizar">Otimizar gastos</button>
                  </div>
                </div>
                <div class="fm-profile-row">
                  <label>Perfil</label>
                  <div class="fm-chip-group" data-profile-group="risk">
                    <button class="fm-chip is-selected" data-value="conservador">Conservador</button>
                    <button class="fm-chip" data-value="equilibrado">Equilibrado</button>
                    <button class="fm-chip" data-value="premium">Premium</button>
                  </div>
                </div>
              </div>
              <div class="fm-recommendation">
                <div class="fm-rec-title" id="fm-rec-title">Plano recomendado: protecao essencial</div>
                <div class="fm-rec-text" id="fm-rec-text">Comece por seguros e saude, depois compare previdencia para estruturar reserva de longo prazo.</div>
              </div>
              <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap">
                <button class="fm-primary-btn" data-open-onboard>Refinar perfil</button>
                <a class="fm-secondary-btn" href="#fm-comparador">Comparar agora</a>
              </div>
            </div>

            <div class="fm-module" id="fm-dashboard">
              <h3>Meu painel demonstrativo</h3>
              <p>Uma area logada fake para mostrar favoritos, alertas, oportunidades e historico de comparacao.</p>
              <div class="fm-dashboard-grid">
                <div class="fm-dash-card"><div class="fm-dash-label">Favoritos</div><div class="fm-dash-value" data-fav-count>0</div><div class="fm-dash-note">salvos para comparar</div></div>
                <div class="fm-dash-card"><div class="fm-dash-label">Economia potencial</div><div class="fm-dash-value">R$ 2,4k</div><div class="fm-dash-note">estimativa anual</div></div>
                <div class="fm-dash-card"><div class="fm-dash-label">Alertas ativos</div><div class="fm-dash-value">6</div><div class="fm-dash-note">oportunidades monitoradas</div></div>
              </div>
              <div class="fm-alert-list">
                <div class="fm-alert"><strong>Taxa menor encontrada</strong><span>Previdencia com taxa administrativa abaixo de 0,60% ao ano.</span></div>
                <div class="fm-alert"><strong>Cashback acima da media</strong><span>Cartoes premium com retorno estimado ate 3% para alto gasto mensal.</span></div>
                <div class="fm-alert"><strong>Reajuste controlado</strong><span>Planos de saude com historico abaixo da media do mercado.</span></div>
              </div>
            </div>
          </div>

          <div class="fm-module" id="fm-comparador" style="margin-top:22px">
            <h3>Comparador unificado lado a lado</h3>
            <p>Escolha uma categoria e veja produtos, score FinMatch, diferencial, custo real e favoritos.</p>
            <div class="fm-tabs">
              <button class="fm-tab is-active" data-cat-filter="todos">Todos</button>
              <button class="fm-tab" data-cat-filter="previdencia">Previdencia</button>
              <button class="fm-tab" data-cat-filter="cartoes">Cartoes</button>
              <button class="fm-tab" data-cat-filter="seguros">Seguros</button>
              <button class="fm-tab" data-cat-filter="saude">Saude</button>
            </div>
            <table class="fm-compare-table">
              <thead><tr><th>Produto</th><th>Categoria</th><th>Destaque</th><th>Score</th><th>Acao</th></tr></thead>
              <tbody data-compare-body></tbody>
            </table>
          </div>

          <div class="fm-platform-grid">
            <div class="fm-module">
              <h3>Simuladores por categoria</h3>
              <p>Ferramentas rapidas para estimar custo real, beneficio e economia.</p>
              <div class="fm-sim-list">
                <div class="fm-sim-item"><strong>Previdencia</strong><span>Regime tributario, taxa e renda futura.</span></div>
                <div class="fm-sim-item"><strong>Cartoes</strong><span>Cashback, milhas, anuidade e gasto mensal.</span></div>
                <div class="fm-sim-item"><strong>Seguros</strong><span>Cobertura ideal e premio anual estimado.</span></div>
                <div class="fm-sim-item"><strong>Saude</strong><span>Custo anual, coparticipacao e reajuste esperado.</span></div>
              </div>
            </div>
            <div class="fm-module" id="fm-glossario">
              <h3>Glossario financeiro premium</h3>
              <p>Conceitos objetivos, com impacto pratico na decisao.</p>
              <div class="fm-glossary-list">
                <div class="fm-glossary"><strong>Custo efetivo anual</strong><span>Quanto o produto realmente custa somando taxas, anuidade e reajustes.</span></div>
                <div class="fm-glossary"><strong>Aderencia ao perfil</strong><span>Medida que cruza objetivo, risco, renda e prioridade familiar.</span></div>
                <div class="fm-glossary"><strong>Score FinMatch</strong><span>Nota propria baseada em custo, beneficio, reputacao e transparencia.</span></div>
              </div>
            </div>
            <div class="fm-module" id="fm-metodologia">
              <h3>Metodologia e confianca</h3>
              <p>O score mostra porque uma opcao aparece melhor que outra.</p>
              <div class="fm-alert-list">
                <div class="fm-alert"><strong>35% custo real</strong><span>Taxas, anuidade, mensalidade e reajustes.</span></div>
                <div class="fm-alert"><strong>30% beneficio</strong><span>Rentabilidade, cobertura, cashback, rede e assistencias.</span></div>
                <div class="fm-alert"><strong>20% reputacao</strong><span>Confianca, consistencia e qualidade operacional.</span></div>
                <div class="fm-alert"><strong>15% aderencia</strong><span>Compatibilidade com perfil e objetivo.</span></div>
              </div>
            </div>
          </div>

          <div class="fm-module" style="margin-top:22px">
            <h3>Modo consultor</h3>
            <p>Um guia para transformar intencao em acao: escolha uma jornada e a plataforma sugere a proxima comparacao.</p>
            <div class="fm-journey">
              <div class="fm-step"><div class="fm-step-num">01</div><strong>Organizar</strong><span>Entender custos, prioridades e riscos atuais.</span></div>
              <div class="fm-step"><div class="fm-step-num">02</div><strong>Proteger</strong><span>Saude, vida, residencial e auto sem excesso.</span></div>
              <div class="fm-step"><div class="fm-step-num">03</div><strong>Investir</strong><span>Previdencia e longo prazo com eficiencia fiscal.</span></div>
              <div class="fm-step"><div class="fm-step-num">04</div><strong>Otimizar</strong><span>Cartoes, beneficios, cashback e custo anual.</span></div>
              <div class="fm-step"><div class="fm-step-num">05</div><strong>Acompanhar</strong><span>Alertas, favoritos, rankings e relatorios.</span></div>
            </div>
          </div>

          <div class="fm-module" style="margin-top:22px">
            <h3>Radar FinMatch semanal</h3>
            <p>Newsletter demonstrativa para oportunidades, rankings, alertas de taxa e guias de decisao.</p>
            <div class="fm-newsletter">
              <input class="fm-input" id="fm-news-email" type="email" placeholder="seu@email.com">
              <button class="fm-primary-btn" data-newsletter>Receber radar</button>
            </div>
            <p id="fm-news-feedback" style="margin-top:10px"></p>
          </div>
        </div>
      </section>
    `);
  }

  function modals(){
    if(document.getElementById('fm-search-modal')) return;
    const results = catalog.concat(education).map(item => `
      <a class="fm-search-result" href="${item.href}" data-search-item data-search-text="${(item.title + ' ' + item.text).toLowerCase()}">
        <strong>${item.title}</strong>
        <span>${item.text}</span>
      </a>
    `).join('');
    document.body.insertAdjacentHTML('beforeend', `
      <div class="fm-search-modal" id="fm-search-modal" aria-hidden="true">
        <div class="fm-modal-card">
          <div class="fm-modal-head"><h3>Busca global FinMatch</h3><button class="fm-close" data-close-modal>Fechar</button></div>
          <input class="fm-input" id="fm-search-input" type="search" placeholder="Busque produtos, conteudos, rankings e simuladores">
          <div class="fm-search-results">${results}</div>
        </div>
      </div>
      <div class="fm-account-panel" id="fm-account-panel" aria-hidden="true">
        <div class="fm-modal-card">
          <div class="fm-modal-head"><h3>Minha conta demonstrativa</h3><button class="fm-close" data-close-modal>Fechar</button></div>
          <div class="fm-dashboard-grid">
            <div class="fm-dash-card"><div class="fm-dash-label">Favoritos</div><div class="fm-dash-value" data-fav-count>0</div><div class="fm-dash-note">itens salvos</div></div>
            <div class="fm-dash-card"><div class="fm-dash-label">Comparacoes</div><div class="fm-dash-value">12</div><div class="fm-dash-note">historico demo</div></div>
            <div class="fm-dash-card"><div class="fm-dash-label">Perfil</div><div class="fm-dash-value">82%</div><div class="fm-dash-note">completo</div></div>
          </div>
          <div class="fm-alert-list" id="fm-account-favs"></div>
        </div>
      </div>
      <div class="fm-onboard-modal" id="fm-onboard-modal" aria-hidden="true">
        <div class="fm-modal-card">
          <div class="fm-modal-head"><h3>Refinar perfil financeiro</h3><button class="fm-close" data-close-modal>Fechar</button></div>
          <p style="color:var(--fm-muted);line-height:1.7">Fluxo demonstrativo: em uma versao com backend, essas respostas alimentariam recomendacoes, alertas e o score de aderencia.</p>
          <div class="fm-platform-grid" style="grid-template-columns:1fr 1fr;margin-top:16px">
            <div class="fm-alert"><strong>Perfil atual</strong><span id="fm-onboard-summary">Protecao familiar, conservador, prioridade em custo real.</span></div>
            <div class="fm-alert"><strong>Proxima acao</strong><span>Comparar saude + seguro vida antes de otimizar cartoes.</span></div>
          </div>
        </div>
      </div>
    `);
  }

  function advancedHome(){
    const lab = document.getElementById('fm-lab');
    if(!lab || document.getElementById('fm-advanced')) return;
    lab.insertAdjacentHTML('afterend', `
      <section class="fm-advanced-section" id="fm-advanced">
        <div class="fm-advanced-inner">
          <div class="fm-mode-bar">
            <div>
              <div class="fm-kicker">Camada premium</div>
              <h2 class="fm-platform-title">Transparencia, estrategia e decisao guiada</h2>
              <p class="fm-mode-copy">Esses blocos deixam a plataforma mais confiavel: metodologia clara, historico de evolucao, mapa de oportunidades, modo iniciante/especialista, relatorio final e biblioteca de cenarios.</p>
            </div>
            <div class="fm-switcher" aria-label="Modo de leitura">
              <button class="is-active" data-copy-mode="beginner">Iniciante</button>
              <button data-copy-mode="expert">Especialista</button>
            </div>
          </div>

          <div class="fm-advanced-grid">
            <div class="fm-module">
              <h3>Modo comparacao guiada</h3>
              <p data-mode-copy>Responda uma intencao simples e veja qual categoria tende a gerar maior impacto primeiro.</p>
              <div class="fm-scenario-grid">
                <div class="fm-scenario is-active" data-scenario="familia"><strong>Casal com filhos</strong><span>Protecao, saude e previdencia sucessoria.</span></div>
                <div class="fm-scenario" data-scenario="jovem"><strong>Jovem profissional</strong><span>Cartoes, cashback e inicio da reserva.</span></div>
                <div class="fm-scenario" data-scenario="autonomo"><strong>Autonomo</strong><span>Protecao de renda e previsibilidade.</span></div>
                <div class="fm-scenario" data-scenario="empresario"><strong>Empresario</strong><span>Beneficios, seguros e estrategia fiscal.</span></div>
              </div>
              <div class="fm-report-box">
                <div><strong id="fm-scenario-title">Prioridade sugerida: Saude + Seguro Vida</strong><span id="fm-scenario-text">Para familia, o maior risco costuma ser desproteção de renda e custo medico inesperado.</span></div>
                <button class="fm-primary-btn" data-print-report>Gerar relatorio</button>
              </div>
            </div>

            <div class="fm-module">
              <h3>Historico de evolucao</h3>
              <p>Evolucao demonstrativa de oportunidade financeira por trimestre.</p>
              <div class="fm-history-chart">
                <div class="fm-history-bar" style="height:38%" data-label="T1"></div>
                <div class="fm-history-bar" style="height:56%" data-label="T2"></div>
                <div class="fm-history-bar" style="height:48%" data-label="T3"></div>
                <div class="fm-history-bar" style="height:72%" data-label="T4"></div>
                <div class="fm-history-bar" style="height:86%" data-label="Atual"></div>
              </div>
            </div>
          </div>

          <div class="fm-platform-grid" style="margin-top:22px">
            <div class="fm-module">
              <h3>Mapa de oportunidades</h3>
              <p>Onde o usuario pode economizar ou melhorar primeiro.</p>
              <div class="fm-opportunity-map">
                <div class="fm-opportunity"><div class="fm-opportunity-label">Anuidade</div><div class="fm-opportunity-track"><div class="fm-opportunity-fill" style="width:74%"></div></div><div class="fm-opportunity-value">R$ 680</div></div>
                <div class="fm-opportunity"><div class="fm-opportunity-label">Reajuste saude</div><div class="fm-opportunity-track"><div class="fm-opportunity-fill" style="width:62%"></div></div><div class="fm-opportunity-value">6,87%</div></div>
                <div class="fm-opportunity"><div class="fm-opportunity-label">Taxa previdencia</div><div class="fm-opportunity-track"><div class="fm-opportunity-fill" style="width:81%"></div></div><div class="fm-opportunity-value">0,50%</div></div>
                <div class="fm-opportunity"><div class="fm-opportunity-label">Cobertura</div><div class="fm-opportunity-track"><div class="fm-opportunity-fill" style="width:55%"></div></div><div class="fm-opportunity-value">Media</div></div>
              </div>
            </div>

            <div class="fm-module">
              <h3>Custo invisivel</h3>
              <p>Custos que geralmente passam despercebidos na decisao.</p>
              <div class="fm-check-list">
                <div class="fm-check">Spread internacional e IOF em cartoes.</div>
                <div class="fm-check">Coparticipacao e reajuste acumulado em saude.</div>
                <div class="fm-check">Franquia, exclusoes e assistencias em seguros.</div>
                <div class="fm-check">Taxa de administracao e carregamento em previdencia.</div>
              </div>
            </div>

            <div class="fm-module">
              <h3>Notas pessoais nos favoritos</h3>
              <p>Salve uma observacao rapida para lembrar por que um produto entrou na sua lista.</p>
              <div class="fm-note-area">
                <input class="fm-input" id="fm-note-input" placeholder="Ex: bom cashback, mas anuidade alta">
                <button class="fm-secondary-btn" data-add-note>Adicionar nota</button>
                <div class="fm-note-list" id="fm-note-list"></div>
              </div>
            </div>
          </div>

          <div class="fm-advanced-grid">
            <div class="fm-module">
              <h3>Timeline de decisao</h3>
              <p>Um funil claro para o usuario saber o que falta antes de decidir.</p>
              <div class="fm-timeline">
                <div class="fm-timeline-row"><div class="fm-timeline-dot"></div><div><strong>Descobriu</strong><span>Visitou as categorias e entendeu alternativas.</span></div></div>
                <div class="fm-timeline-row"><div class="fm-timeline-dot"></div><div><strong>Comparou</strong><span>Usou score, custo real e tabela lado a lado.</span></div></div>
                <div class="fm-timeline-row"><div class="fm-timeline-dot"></div><div><strong>Favoritou</strong><span>Montou lista curta com notas pessoais.</span></div></div>
                <div class="fm-timeline-row"><div class="fm-timeline-dot"></div><div><strong>Simulou</strong><span>Estimou economia, renda futura ou custo anual.</span></div></div>
                <div class="fm-timeline-row"><div class="fm-timeline-dot"></div><div><strong>Decidiu</strong><span>Gerou relatorio e proximos passos.</span></div></div>
              </div>
            </div>
            <div class="fm-module">
              <h3>Comparacao entre categorias</h3>
              <p>Ajuda a responder: qual mudanca gera impacto primeiro?</p>
              <div class="fm-mini-grid">
                <div class="fm-insight-card"><strong>Cartao</strong><span>Economia rapida se anuidade e spread estiverem altos.</span></div>
                <div class="fm-insight-card"><strong>Saude</strong><span>Impacto alto em familias por reajuste e rede.</span></div>
                <div class="fm-insight-card"><strong>Previdencia</strong><span>Impacto composto em horizontes longos.</span></div>
              </div>
              <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
                <a class="fm-secondary-btn" href="metodologia.html">Ver metodologia</a>
                <a class="fm-secondary-btn" href="estrategia.html">Minha estrategia</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `);
    renderNotes();
  }

  function categorySpecialist(){
    const key = currentKey();
    if(!['previdencia','cartoes','seguros','saude'].includes(key) || document.querySelector('.fm-detail-shell')) return;
    const cfg = {
      previdencia:{
        title:'Centro especialista de Previdencia',
        lead:'Simule PGBL vs VGBL, regime tributario, portabilidade, taxa e renda futura.',
        ranges:['Aporte mensal','Tempo ate resgate','Taxa atual'],
        output:'Plano sugerido: baixa taxa, horizonte longo e revisao tributaria anual.',
        checks:['Compare taxa administrativa antes de rentabilidade isolada.','Avalie regime progressivo vs regressivo pelo prazo.','Considere portabilidade se a taxa estiver acima do mercado.','Cheque seguradora, liquidez e estrategia do fundo.']
      },
      cartoes:{
        title:'Centro especialista de Cartoes',
        lead:'Compare cashback, milhas, anuidade, salas VIP, spread internacional e retorno mensal.',
        ranges:['Gasto mensal','Anuidade','Viagens por ano'],
        output:'Plano sugerido: cartao com retorno real maior que anuidade e baixo spread.',
        checks:['Calcule retorno liquido depois da anuidade.','Compare cashback com milhas pelo seu uso real.','Verifique renda minima e regra de isencao.','Inclua spread internacional no custo total.']
      },
      seguros:{
        title:'Centro especialista de Seguros',
        lead:'Calcule cobertura ideal, premio anual, franquia, assistencias e exclusoes relevantes.',
        ranges:['Renda protegida','Cobertura desejada','Franquia aceitavel'],
        output:'Plano sugerido: cobertura essencial sem duplicidade e com franquia coerente.',
        checks:['Evite coberturas duplicadas entre apolices.','Leia exclusoes antes do preco final.','Compare assistencias usadas de verdade.','Ajuste cobertura a dependentes e patrimonio.']
      },
      saude:{
        title:'Centro especialista de Saude',
        lead:'Compare rede, coparticipacao, carencia, acomodacao, reajuste e custo anual.',
        ranges:['Mensalidade','Uso mensal','Reajuste esperado'],
        output:'Plano sugerido: rede adequada, reajuste historico menor e custo anual previsivel.',
        checks:['Confirme hospitais e laboratorios importantes.','Compare coparticipacao pelo uso real.','Analise carencias e abrangencia geografica.','Projete reajuste acumulado, nao apenas mensalidade.']
      }
    }[key];
    const html = `
      <section class="fm-detail-shell">
        <div class="fm-detail-inner">
          <div class="fm-kicker">Especialista FinMatch</div>
          <h2 class="fm-platform-title">${cfg.title}</h2>
          <p class="fm-platform-lead">${cfg.lead}</p>
          <div class="fm-detail-grid">
            <div class="fm-module">
              <h3>Simulador especifico</h3>
              <p>Ajuste os controles para ver uma recomendacao demonstrativa da categoria.</p>
              ${cfg.ranges.map((label,i)=>`<div class="fm-range-row"><label>${label}</label><input type="range" min="1" max="100" value="${45 + i*15}" data-detail-range></div>`).join('')}
              <div class="fm-output" id="fm-detail-output">${cfg.output}</div>
            </div>
            <div class="fm-module">
              <h3>Checklist de decisao</h3>
              <p>Antes de contratar, valide estes pontos.</p>
              <div class="fm-check-list">${cfg.checks.map(item=>`<div class="fm-check">${item}</div>`).join('')}</div>
            </div>
          </div>
          <div class="fm-platform-grid" style="margin-top:18px">
            <div class="fm-module"><h3>Selo melhor para</h3><p>Classifique produtos por objetivo: custo-beneficio, familia, alta renda, iniciantes ou especialista.</p></div>
            <div class="fm-module"><h3>Historico da categoria</h3><p>Acompanhe evolucao de taxas, reajustes, beneficios ou rentabilidade ao longo do tempo.</p></div>
            <div class="fm-module"><h3>Relatorio da decisao</h3><p>Gere um resumo com prós, contras, custos invisiveis e proximos passos.</p><button class="fm-secondary-btn" data-print-report>Gerar relatorio</button></div>
          </div>
        </div>
      </section>
    `;
    const footer = document.querySelector('footer');
    if(footer) footer.insertAdjacentHTML('beforebegin', html);
  }

  function bottomNav(){
    if(document.querySelector('.fm-mobile-bottom')) return;
    const active = currentKey();
    document.body.insertAdjacentHTML('beforeend', `
      <div class="fm-mobile-bottom">
        <a class="${active === 'home' ? 'is-active' : ''}" href="HOME.html">Home</a>
        <a href="HOME.html#fm-lab">Comparar</a>
        <a href="HOME.html#rankings">Ranking</a>
        <a href="HOME.html#educacao">Educacao</a>
        <a href="HOME.html#fm-dashboard">Perfil</a>
      </div>
    `);
  }

  function wireHomeCards(){
    const routes = [
      ['.cat-card.green','previdencia.html'],
      ['.cat-card.blue','cartoes.html'],
      ['.cat-card.violet','seguros.html'],
      ['.cat-card.amber','saude.html']
    ];
    routes.forEach(([selector,href]) => {
      document.querySelectorAll(selector).forEach(card => {
        if(card.tagName.toLowerCase() === 'a') return;
        card.setAttribute('role','link');
        card.setAttribute('tabindex','0');
        card.addEventListener('click', event => {
          if(event.target.closest('a')) return;
          location.href = href;
        });
        card.addEventListener('keydown', event => {
          if(event.key === 'Enter' || event.key === ' '){
            event.preventDefault();
            location.href = href;
          }
        });
      });
    });
  }

  function renderCompare(filter){
    const body = document.querySelector('[data-compare-body]');
    if(!body) return;
    const favs = storage.get('fm:favs', []);
    const rows = catalog
      .filter(item => filter === 'todos' || item.cat === filter)
      .map(item => `
        <tr>
          <td>${item.title}</td>
          <td>${labelCat(item.cat)}</td>
          <td>${item.metric}</td>
          <td><span class="fm-score">${item.score}/100</span></td>
          <td><button class="fm-fav-btn ${favs.includes(item.id) ? 'is-saved' : ''}" data-fav="${item.id}" type="button">${favs.includes(item.id) ? 'Salvo' : 'Favoritar'}</button></td>
        </tr>
      `).join('');
    body.innerHTML = rows;
  }

  function labelCat(cat){
    return {previdencia:'Previdencia',cartoes:'Cartoes',seguros:'Seguros',saude:'Saude'}[cat] || cat;
  }

  function updateFavCounters(){
    const favs = storage.get('fm:favs', []);
    document.querySelectorAll('[data-fav-count]').forEach(el => el.textContent = favs.length);
    const list = document.getElementById('fm-account-favs');
    if(list){
      list.innerHTML = favs.length
        ? favs.map(id => catalog.find(item => item.id === id)).filter(Boolean).map(item => `<div class="fm-alert"><strong>${item.title}</strong><span>${item.text}</span></div>`).join('')
        : '<div class="fm-alert"><strong>Nenhum favorito ainda</strong><span>Use o comparador para salvar produtos e montar sua lista curta.</span></div>';
    }
  }

  function profileRecommendation(){
    const selectedGoal = document.querySelector('[data-profile-group="goal"] .is-selected')?.dataset.value || 'proteger';
    const selectedRisk = document.querySelector('[data-profile-group="risk"] .is-selected')?.dataset.value || 'conservador';
    const data = {
      proteger:{
        title:'Plano recomendado: protecao essencial',
        text:'Priorize saude e seguros, depois use previdencia para sucessao e reserva de longo prazo.'
      },
      aposentar:{
        title:'Plano recomendado: futuro eficiente',
        text:'Compare previdencia com baixa taxa, regime tributario adequado e historico consistente.'
      },
      otimizar:{
        title:'Plano recomendado: economia e beneficios',
        text:'Comece por cartoes, custo anual e cashback, depois monitore reajustes de saude e seguros.'
      }
    };
    const rec = data[selectedGoal] || data.proteger;
    const suffix = selectedRisk === 'premium' ? ' Perfil premium: considere beneficios, rede e atendimento alem de preco.' : selectedRisk === 'equilibrado' ? ' Perfil equilibrado: compare custo, reputacao e flexibilidade.' : ' Perfil conservador: preserve previsibilidade e baixo custo.';
    const title = document.getElementById('fm-rec-title');
    const text = document.getElementById('fm-rec-text');
    if(title) title.textContent = rec.title;
    if(text) text.textContent = rec.text + suffix;
    const summary = document.getElementById('fm-onboard-summary');
    if(summary) summary.textContent = `${rec.title}. ${suffix}`;
  }

  function crossSell(){
    if(currentKey() === 'home' || document.querySelector('.fm-cross-sell')) return;
    const current = currentKey();
    const cards = pages
      .filter(p => ['previdencia','cartoes','seguros','saude'].includes(p.key) && p.key !== current)
      .map(p => `<a class="fm-cross-card" href="${p.href}"><strong>${p.label}</strong><span>Compare esta categoria junto com ${labelCat(current)} para montar uma decisao mais completa.</span></a>`)
      .join('');
    const footer = document.querySelector('footer');
    const html = `
      <section class="fm-cross-sell">
        <div class="fm-cross-inner">
          <div class="fm-kicker">Ecossistema conectado</div>
          <h2 class="fm-platform-title" style="font-size:clamp(1.6rem,2.4vw,2.4rem)">Continue comparando em outras categorias</h2>
          <p class="fm-platform-lead">As melhores decisoes financeiras normalmente cruzam protecao, credito, saude e longo prazo.</p>
          <div class="fm-cross-grid">${cards}<a class="fm-cross-card" href="HOME.html#fm-lab"><strong>Comparador unificado</strong><span>Voltar ao hub e comparar lado a lado.</span></a></div>
        </div>
      </section>
    `;
    if(footer) footer.insertAdjacentHTML('beforebegin', html);
  }

  function wireInteractions(){
    document.addEventListener('click', event => {
      const searchBtn = event.target.closest('[data-open-search]');
      const accountBtn = event.target.closest('[data-open-account]');
      const onboardBtn = event.target.closest('[data-open-onboard]');
      const closeBtn = event.target.closest('[data-close-modal]');
      const favBtn = event.target.closest('[data-fav]');
      const catBtn = event.target.closest('[data-cat-filter]');
      const chip = event.target.closest('.fm-chip');
      const newsletter = event.target.closest('[data-newsletter]');
      const themeToggle = event.target.closest('[data-theme-toggle]');
      const copyMode = event.target.closest('[data-copy-mode]');
      const scenario = event.target.closest('[data-scenario]');
      const printReport = event.target.closest('[data-print-report]');
      const addNote = event.target.closest('[data-add-note]');

      if(searchBtn) openModal('fm-search-modal');
      if(accountBtn){updateFavCounters();openModal('fm-account-panel')}
      if(onboardBtn) openModal('fm-onboard-modal');
      if(closeBtn) closeModals();
      if(themeToggle) toggleTheme();
      if(printReport) window.print();

      if(favBtn){
        const id = favBtn.dataset.fav;
        const favs = storage.get('fm:favs', []);
        const next = favs.includes(id) ? favs.filter(x => x !== id) : favs.concat(id);
        storage.set('fm:favs', next);
        renderCompare(document.querySelector('.fm-tab.is-active')?.dataset.catFilter || 'todos');
        updateFavCounters();
      }

      if(catBtn){
        document.querySelectorAll('.fm-tab').forEach(btn => btn.classList.remove('is-active'));
        catBtn.classList.add('is-active');
        renderCompare(catBtn.dataset.catFilter);
      }

      if(chip){
        const group = chip.closest('.fm-chip-group');
        if(group){
          group.querySelectorAll('.fm-chip').forEach(btn => btn.classList.remove('is-selected'));
          chip.classList.add('is-selected');
          profileRecommendation();
        }
      }

      if(newsletter){
        const input = document.getElementById('fm-news-email');
        const feedback = document.getElementById('fm-news-feedback');
        if(feedback) feedback.textContent = input && input.value ? 'Radar ativado nesta demo. Em producao, este email receberia alertas semanais.' : 'Digite um email para ativar o radar demonstrativo.';
      }

      if(copyMode){
        document.querySelectorAll('[data-copy-mode]').forEach(btn => btn.classList.remove('is-active'));
        copyMode.classList.add('is-active');
        const copy = document.querySelector('[data-mode-copy]');
        if(copy) copy.textContent = copyMode.dataset.copyMode === 'expert'
          ? 'Modo especialista: analise custo efetivo, aderencia, volatilidade, reajuste acumulado, franquia, spread e confiabilidade operacional.'
          : 'Modo iniciante: escolha seu objetivo, veja a prioridade sugerida e siga os proximos passos sem jargao.';
      }

      if(scenario){
        document.querySelectorAll('.fm-scenario').forEach(item => item.classList.remove('is-active'));
        scenario.classList.add('is-active');
        updateScenario(scenario.dataset.scenario);
      }

      if(addNote){
        const input = document.getElementById('fm-note-input');
        const value = input ? input.value.trim() : '';
        if(value){
          const notes = storage.get('fm:notes', []);
          notes.unshift(value);
          storage.set('fm:notes', notes.slice(0,6));
          input.value = '';
          renderNotes();
        }
      }

      if(event.target.classList.contains('fm-search-modal') || event.target.classList.contains('fm-account-panel') || event.target.classList.contains('fm-onboard-modal')) closeModals();
    });

    document.addEventListener('input', event => {
      if(event.target.matches('[data-detail-range]')) updateDetailOutput();
      if(event.target.id !== 'fm-search-input') return;
      const q = event.target.value.toLowerCase().trim();
      document.querySelectorAll('[data-search-item]').forEach(item => {
        item.style.display = !q || item.dataset.searchText.includes(q) ? 'block' : 'none';
      });
    });

    document.addEventListener('keydown', event => {
      if(event.key === 'Escape') closeModals();
    });
  }

  function openModal(id){
    const modal = document.getElementById(id);
    if(modal){
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden','false');
      const input = modal.querySelector('input');
      if(input) setTimeout(() => input.focus(), 50);
    }
  }

  function closeModals(){
    document.querySelectorAll('.fm-search-modal,.fm-account-panel,.fm-onboard-modal').forEach(modal => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden','true');
    });
  }

  function toggleTheme(){
    const enabled = !document.body.classList.contains('fm-light-theme');
    document.body.classList.toggle('fm-light-theme', enabled);
    storage.set('fm:theme', enabled ? 'light' : 'dark');
  }

  function applyTheme(){
    if(storage.get('fm:theme', 'dark') === 'light') document.body.classList.add('fm-light-theme');
  }

  function updateScenario(key){
    const data = {
      familia:['Prioridade sugerida: Saude + Seguro Vida','Para familia, o maior risco costuma ser desprotecao de renda e custo medico inesperado.'],
      jovem:['Prioridade sugerida: Cartao + Previdencia inicial','Para jovem profissional, cashback e investimento automatico criam tracao sem complexidade.'],
      autonomo:['Prioridade sugerida: Seguro renda + Saude','Para autonomo, previsibilidade e protecao contra interrupcao de renda pesam mais.'],
      empresario:['Prioridade sugerida: Beneficios + Estrategia fiscal','Para empresario, seguros, saude empresarial e previdencia podem otimizar custo e retencao.']
    }[key] || [];
    const title = document.getElementById('fm-scenario-title');
    const text = document.getElementById('fm-scenario-text');
    if(title) title.textContent = data[0];
    if(text) text.textContent = data[1];
  }

  function renderNotes(){
    const list = document.getElementById('fm-note-list');
    if(!list) return;
    const notes = storage.get('fm:notes', []);
    list.innerHTML = notes.length
      ? notes.map(note => `<div class="fm-note">${note}</div>`).join('')
      : '<div class="fm-note">Nenhuma nota ainda. Salve uma observacao para comparar depois.</div>';
  }

  function updateDetailOutput(){
    const output = document.getElementById('fm-detail-output');
    if(!output) return;
    const values = Array.from(document.querySelectorAll('[data-detail-range]')).map(input => Number(input.value));
    const avg = Math.round(values.reduce((a,b)=>a+b,0) / Math.max(values.length,1));
    output.textContent = avg > 70
      ? 'Resultado demo: perfil com alta prioridade. Vale comparar 3 opcoes e gerar relatorio antes de decidir.'
      : avg > 40
        ? 'Resultado demo: perfil equilibrado. Foque em custo real, score e flexibilidade.'
        : 'Resultado demo: perfil conservador. Priorize previsibilidade, baixa taxa e cobertura essencial.';
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    replaceShell();
    platformHome();
    advancedHome();
    modals();
    bottomNav();
    wireHomeCards();
    categorySpecialist();
    crossSell();
    wireInteractions();
    renderCompare('todos');
    updateFavCounters();
    profileRecommendation();
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('nav');
      if(nav) nav.classList.toggle('scrolled', scrollY > 20);
    }, { passive:true });
  });
})();
