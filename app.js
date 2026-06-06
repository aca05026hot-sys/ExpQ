/* ═══════════════════════════════════════════════════════════
   LexQR — Agenda Legal Quintana Roo · app.js
   Datos locales (localStorage) · Sin backend · GitHub Pages ready
════════════════════════════════════════════════════════════ */

// ══════════════════════ DATOS DEMO ═══════════════════════
const EXPEDIENTES_DEMO = [
  { id:'1042/2024', cliente:'Torres Villanueva, Marco A.', materia:'civil',     titulo:'Torres vs. Constructora del Caribe', juzgado:'3° Civil, Cancún',         estatus:'activo',    proxActo:'Audiencia 5 Jun', color:'#22d3ee' },
  { id:'0956/2024', cliente:'Rodríguez Ek, Patricia',     materia:'familiar',   titulo:'Divorcio Incausado Rodríguez',       juzgado:'1° Familiar, Playa del Carmen',estatus:'activo',   proxActo:'Audiencia 5 Jun', color:'#a78bfa' },
  { id:'A-234/2024',cliente:'Pérez Canul, Sergio',        materia:'amparo',     titulo:'Amparo Directo — Pérez',             juzgado:'Tribunal Colegiado, Cancún',  estatus:'activo',    proxActo:'Audiencia 5 Jun', color:'#fbbf24' },
  { id:'0891/2024', cliente:'Ramírez Balam, Lourdes',     materia:'mercantil',  titulo:'Cobro de Pesos Ramírez vs. Tienda', juzgado:'Juzgado Mercantil, Cancún',   estatus:'sentencia', proxActo:'Ejecución 10 Jun',color:'#34d399' },
  { id:'0774/2024', cliente:'Hernández Chi, Juan',        materia:'penal',      titulo:'Hernández — Fraude Procesal',        juzgado:'3° Penal, Chetumal',          estatus:'apelacion', proxActo:'Alegatos 15 Jun', color:'#f472b6' },
  { id:'0623/2024', cliente:'Dzul Poot, Armando',         materia:'civil',      titulo:'Dzul vs. Arrendadora QRoo',          juzgado:'1° Civil, Chetumal',          estatus:'activo',    proxActo:'Desahogo 18 Jun', color:'#22d3ee' },
  { id:'0511/2024', cliente:'López Caamal, Rosa',         materia:'familiar',   titulo:'Guarda y Custodia López',            juzgado:'2° Familiar, Cancún',         estatus:'activo',    proxActo:'Mediación 20 Jun',color:'#a78bfa' },
  { id:'0399/2023', cliente:'Castillo Mena, Alberto',     materia:'mercantil',  titulo:'Castillo vs. Banco del Sur',         juzgado:'Mercantil, Playa del Carmen', estatus:'suspendido',proxActo:'Pendiente',       color:'#34d399' },
];

const CLIENTES_DEMO = [
  { nombre:'Torres Villanueva, Marco A.',  tel:'998-123-4567', correo:'m.torres@email.com',  exp:2, color:'#22d3ee' },
  { nombre:'Rodríguez Ek, Patricia',       tel:'984-987-6543', correo:'p.rodriguez@email.com',exp:1, color:'#a78bfa' },
  { nombre:'Pérez Canul, Sergio',          tel:'998-555-1212', correo:'s.perez@email.com',    exp:1, color:'#fbbf24' },
  { nombre:'Ramírez Balam, Lourdes',       tel:'998-222-3333', correo:'l.ramirez@email.com',  exp:3, color:'#f472b6' },
  { nombre:'Hernández Chi, Juan',          tel:'983-444-5555', correo:'j.hernandez@email.com',exp:1, color:'#34d399' },
  { nombre:'Dzul Poot, Armando',           tel:'983-666-7777', correo:'a.dzul@email.com',     exp:1, color:'#22d3ee' },
  { nombre:'López Caamal, Rosa',           tel:'998-888-9999', correo:'r.lopez@email.com',    exp:2, color:'#a78bfa' },
  { nombre:'Castillo Mena, Alberto',       tel:'984-111-2222', correo:'a.castillo@email.com', exp:1, color:'#fbbf24' },
];

const DOCUMENTOS_DEMO = [
  { tipo:'📄', titulo:'Demanda Civil — Torres vs. Constructora', exp:'1042/2024', fecha:'2024-06-01', vence:'2024-06-10', estado:'urgente' },
  { tipo:'📋', titulo:'Acta de Audiencia — Rodríguez Divorcio',  exp:'0956/2024', fecha:'2024-05-28', vence:'2024-07-01', estado:'ok' },
  { tipo:'📑', titulo:'Amparo Directo — Escrito Inicial Pérez',  exp:'A-234/2024',fecha:'2024-05-20', vence:'2024-06-20', estado:'pendiente' },
  { tipo:'📃', titulo:'Convenio de Pago — Ramírez vs. Tienda',   exp:'0891/2024', fecha:'2024-05-15', vence:'2024-06-30', estado:'ok' },
  { tipo:'📝', titulo:'Escrito de Alegatos — Hernández',         exp:'0774/2024', fecha:'2024-06-02', vence:'2024-06-15', estado:'urgente' },
  { tipo:'📜', titulo:'Contrato de Arrendamiento — Dzul',        exp:'0623/2024', fecha:'2024-04-10', vence:'2024-08-01', estado:'ok' },
];

const AUDIENCIAS_PROX = [
  { fecha:'Jun 12', titulo:'Desahogo de Pruebas — Dzul', meta:'Exp. 0623/2024 · 10:00h · Chetumal', tipo:'civil' },
  { fecha:'Jun 15', titulo:'Alegatos — Hernández Chi', meta:'Exp. 0774/2024 · 09:00h · Chetumal', tipo:'penal' },
  { fecha:'Jun 18', titulo:'Resolución Final — Rodríguez', meta:'Exp. 0956/2024 · 11:30h · Playa', tipo:'familiar' },
  { fecha:'Jun 20', titulo:'Mediación — López Caamal', meta:'Exp. 0511/2024 · 12:00h · Cancún', tipo:'familiar' },
  { fecha:'Jun 25', titulo:'Audiencia Oral — Torres Civil', meta:'Exp. 1042/2024 · 10:00h · Cancún', tipo:'civil' },
];

const EVENTOS_CAL = {
  5:  [{ texto:'Torres 10:00', tipo:'civil'    }, { texto:'Rodríguez 12:30', tipo:'familiar' }, { texto:'Pérez 16:00', tipo:'amparo' }],
  12: [{ texto:'Dzul 10:00', tipo:'civil'      }],
  15: [{ texto:'Hernández 09:00', tipo:'penal' }],
  18: [{ texto:'Rodríguez 11:30', tipo:'familiar' }],
  20: [{ texto:'López 12:00', tipo:'familiar'  }],
  25: [{ texto:'Torres 10:00', tipo:'civil'    }],
};

// ══════════════════════ ESTADO ════════════════════════════
let expedientes = JSON.parse(localStorage.getItem('lx_exp') || 'null') || [...EXPEDIENTES_DEMO];
let clientes    = JSON.parse(localStorage.getItem('lx_cli') || 'null') || [...CLIENTES_DEMO];
let documentos  = JSON.parse(localStorage.getItem('lx_doc') || 'null') || [...DOCUMENTOS_DEMO];
let currentSection = 'dashboard';
let calYear, calMonth;

function save() {
  localStorage.setItem('lx_exp', JSON.stringify(expedientes));
  localStorage.setItem('lx_cli', JSON.stringify(clientes));
  localStorage.setItem('lx_doc', JSON.stringify(documentos));
}

// ══════════════════════ INIT ══════════════════════════════
window.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  calYear  = now.getFullYear();
  calMonth = now.getMonth();

  renderFechaHoy();
  renderMiniCal();
  renderDashboardTable();
  renderExpCards(expedientes);
  renderClientes(clientes);
  renderDocumentos(documentos);
  renderFullCal();
  renderProxList();
  renderBarChart();
  renderLineChart();
  updateKPIs();
});

// ══════════════════════ NAVEGACIÓN ═══════════════════════
function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('sec-' + name)?.classList.add('active');
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(n => { if (n.textContent.toLowerCase().includes(name.slice(0,4))) n.classList.add('active'); });
  const titles = { dashboard:'Dashboard', expedientes:'Expedientes', agenda:'Agenda', clientes:'Clientes', documentos:'Documentos', estadisticas:'Estadísticas' };
  document.getElementById('topbarTitle').textContent = titles[name] || '';
  currentSection = name;
  if (window.innerWidth < 768) closeSidebar();
  // Re-render si necesario
  if (name === 'agenda') renderFullCal();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}

// ══════════════════════ FECHA HOY ════════════════════════
function renderFechaHoy() {
  const d = new Date();
  const opts = { weekday:'long', day:'numeric', month:'long' };
  const str  = d.toLocaleDateString('es-MX', opts);
  document.getElementById('fechaHoy').textContent = str.charAt(0).toUpperCase() + str.slice(1);
}

// ══════════════════════ MINI CAL ══════════════════════════
function renderMiniCal() {
  const now   = new Date();
  const year  = now.getFullYear();
  const month = now.getMonth();
  const first = new Date(year, month, 1).getDay();
  const days  = new Date(year, month + 1, 0).getDate();

  const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const dias  = ['D','L','M','X','J','V','S'];

  let html = `<div class="cal-head"><span>${meses[month]} ${year}</span></div>`;
  html += `<div class="cal-days-header">${dias.map(d=>`<span>${d}</span>`).join('')}</div>`;
  html += `<div class="cal-days">`;
  for (let i = 0; i < first; i++) html += `<span class="cal-day other-month"></span>`;
  for (let d = 1; d <= days; d++) {
    const isToday = d === now.getDate();
    const hasEv   = EVENTOS_CAL[d] ? 'has-event' : '';
    html += `<span class="cal-day ${isToday?'today':''} ${hasEv}">${d}</span>`;
  }
  html += `</div>`;
  document.getElementById('miniCal').innerHTML = html;
}

// ══════════════════════ FULL CAL ══════════════════════════
function cambiarMes(dir) {
  calMonth += dir;
  if (calMonth < 0)  { calMonth = 11; calYear--; }
  if (calMonth > 11) { calMonth = 0;  calYear++; }
  renderFullCal();
}

function renderFullCal() {
  const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  document.getElementById('calTitle').textContent = `${meses[calMonth]} ${calYear}`;

  const first = new Date(calYear, calMonth, 1).getDay();
  const days  = new Date(calYear, calMonth + 1, 0).getDate();
  const prevD = new Date(calYear, calMonth, 0).getDate();
  const today = new Date();
  const dias  = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];

  let html = dias.map(d => `<div class="day-header">${d}</div>`).join('');

  // días prev mes
  for (let i = 0; i < first; i++) {
    html += `<div class="day-cell other-m"><span class="day-num">${prevD - first + i + 1}</span></div>`;
  }
  // días actuales
  for (let d = 1; d <= days; d++) {
    const isToday = (calYear === today.getFullYear() && calMonth === today.getMonth() && d === today.getDate());
    const eventos = EVENTOS_CAL[d] || [];
    const evHTML  = eventos.slice(0,3).map(ev => `<div class="cal-event ev-${ev.tipo}">${ev.texto}</div>`).join('');
    html += `<div class="day-cell ${isToday?'today':''}"><span class="day-num">${d}</span>${evHTML}</div>`;
  }
  // días prox mes
  const total = first + days;
  const rest  = total % 7 === 0 ? 0 : 7 - (total % 7);
  for (let i = 1; i <= rest; i++) {
    html += `<div class="day-cell other-m"><span class="day-num">${i}</span></div>`;
  }

  document.getElementById('fullCal').innerHTML = html;
}

// ══════════════════════ PRÓXIMAS AUDIENCIAS ═══════════════
function renderProxList() {
  const el = document.getElementById('proxList');
  el.innerHTML = AUDIENCIAS_PROX.map(a => `
    <div class="prox-item">
      <span class="prox-date">${a.fecha}</span>
      <div class="prox-body">
        <div class="prox-title">${a.titulo}</div>
        <div class="prox-meta">${a.meta}</div>
      </div>
      <span class="audit-tipo tipo-${a.tipo}">${a.tipo.charAt(0).toUpperCase()+a.tipo.slice(1)}</span>
    </div>
  `).join('');
}

// ══════════════════════ DASHBOARD TABLE ═══════════════════
function renderDashboardTable() {
  const tbody = document.getElementById('tbody-dashboard');
  const rows  = expedientes.slice(0, 6);
  tbody.innerHTML = rows.map(exp => `
    <tr>
      <td><span class="exp-num">${exp.id}</span></td>
      <td>${exp.cliente}</td>
      <td><span class="audit-tipo tipo-${exp.materia}">${cap(exp.materia)}</span></td>
      <td style="font-size:.78rem;color:var(--text-m)">${exp.juzgado}</td>
      <td><span class="status-badge status-${exp.estatus}">${cap(exp.estatus)}</span></td>
      <td style="font-size:.78rem">${exp.proxActo}</td>
    </tr>
  `).join('');
}

// ══════════════════════ EXP CARDS ════════════════════════
let filtroMateria = 'todos';
let filtroTexto   = '';

function renderExpCards(data) {
  const grid = document.getElementById('expCardsGrid');
  let filtered = data.filter(e => {
    const matchM = filtroMateria === 'todos' || e.materia === filtroMateria;
    const matchT = !filtroTexto || e.id.toLowerCase().includes(filtroTexto) || e.cliente.toLowerCase().includes(filtroTexto) || e.titulo.toLowerCase().includes(filtroTexto);
    return matchM && matchT;
  });
  if (!filtered.length) { grid.innerHTML = `<p style="color:var(--text-m);font-size:.88rem">Sin resultados.</p>`; return; }
  grid.innerHTML = filtered.map(exp => `
    <div class="exp-card" onclick="verExpediente('${exp.id}')">
      <div class="exp-card-num"># ${exp.id}</div>
      <div class="exp-card-title">${exp.titulo}</div>
      <div class="exp-card-meta">
        <span>👤 ${exp.cliente}</span>
        <span>🏛 ${exp.juzgado}</span>
        <span>📅 ${exp.proxActo}</span>
      </div>
      <div class="exp-card-footer">
        <span class="audit-tipo tipo-${exp.materia}">${cap(exp.materia)}</span>
        <span class="status-badge status-${exp.estatus}">${cap(exp.estatus)}</span>
      </div>
    </div>
  `).join('');
}

function filtrarExpedientes(val) {
  filtroTexto = val.toLowerCase();
  renderExpCards(expedientes);
}
function filtrarMateria(materia, btn) {
  filtroMateria = materia;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn?.classList.add('active');
  renderExpCards(expedientes);
}

function verExpediente(id) {
  const exp = expedientes.find(e => e.id === id);
  if (!exp) return;
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-title">Expediente ${exp.id}</div>
    <div style="display:flex;flex-direction:column;gap:14px">
      <div><span style="color:var(--text-m);font-size:.78rem">CASO</span><div style="font-weight:600;margin-top:4px">${exp.titulo}</div></div>
      <div><span style="color:var(--text-m);font-size:.78rem">CLIENTE</span><div style="font-weight:600;margin-top:4px">${exp.cliente}</div></div>
      <div><span style="color:var(--text-m);font-size:.78rem">MATERIA</span><div style="margin-top:4px"><span class="audit-tipo tipo-${exp.materia}">${cap(exp.materia)}</span></div></div>
      <div><span style="color:var(--text-m);font-size:.78rem">JUZGADO</span><div style="margin-top:4px">${exp.juzgado}</div></div>
      <div><span style="color:var(--text-m);font-size:.78rem">ESTATUS</span><div style="margin-top:4px"><span class="status-badge status-${exp.estatus}">${cap(exp.estatus)}</span></div></div>
      <div><span style="color:var(--text-m);font-size:.78rem">PRÓXIMO ACTO</span><div style="font-weight:600;margin-top:4px">${exp.proxActo}</div></div>
    </div>
    <div class="form-actions"><button class="btn-cancel" onclick="closeModalDirect()">Cerrar</button></div>
  `;
  document.getElementById('modalOverlay').classList.add('show');
}

// ══════════════════════ CLIENTES ══════════════════════════
function renderClientes(data) {
  const txt   = document.querySelector('#sec-clientes .search-input')?.value?.toLowerCase() || '';
  const grid  = document.getElementById('clientsGrid');
  const shown = data.filter(c => !txt || c.nombre.toLowerCase().includes(txt));
  const initials = n => n.split(' ').slice(0,2).map(p=>p[0]).join('');
  grid.innerHTML = shown.map(c => `
    <div class="client-card">
      <div style="display:flex;align-items:center;gap:12px">
        <div class="client-avatar-lg" style="background:linear-gradient(135deg,${c.color}aa,${c.color}44)">${initials(c.nombre)}</div>
        <div>
          <div class="client-name">${c.nombre}</div>
          <div class="client-info"><span>📞 ${c.tel}</span><span>✉ ${c.correo}</span></div>
        </div>
      </div>
      <div class="client-stats">
        <div class="client-stat"><div class="client-stat-val" style="color:${c.color}">${c.exp}</div><div class="client-stat-label">Expedientes</div></div>
        <div class="client-stat"><div class="client-stat-val" style="color:var(--emerald)">Activo</div><div class="client-stat-label">Estatus</div></div>
      </div>
    </div>
  `).join('');
}
function filtrarClientes(val) { renderClientes(clientes); }

// ══════════════════════ DOCUMENTOS ═══════════════════════
function renderDocumentos(data) {
  const el = document.getElementById('docsList');
  el.innerHTML = data.map(d => `
    <div class="doc-item">
      <span class="doc-icon">${d.tipo}</span>
      <div class="doc-body">
        <div class="doc-title">${d.titulo}</div>
        <div class="doc-meta">Exp. ${d.exp} · Cargado ${d.fecha}</div>
      </div>
      <div class="doc-badge">
        <span class="doc-vence doc-${d.estado}">${d.estado === 'urgente' ? '⚠ Vence ' + d.vence : d.estado === 'pendiente' ? '⏳ Vence ' + d.vence : '✅ Al día'}</span>
      </div>
    </div>
  `).join('');
}

// ══════════════════════ KPIs ══════════════════════════════
function updateKPIs() {
  document.getElementById('kpi-exp').textContent = expedientes.filter(e => e.estatus === 'activo').length;
  document.getElementById('kpi-cli').textContent = clientes.length;
}

// ══════════════════════ GRÁFICAS ══════════════════════════
function renderBarChart() {
  const materias = [
    { label:'Civil',     val:8,  color:'#22d3ee', max:10 },
    { label:'Familiar',  val:6,  color:'#a78bfa', max:10 },
    { label:'Mercantil', val:4,  color:'#34d399', max:10 },
    { label:'Penal',     val:3,  color:'#f472b6', max:10 },
    { label:'Amparo',    val:3,  color:'#fbbf24', max:10 },
  ];
  document.getElementById('barChart').innerHTML = materias.map(m => `
    <div class="bar-row">
      <span class="bar-label">${m.label}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${(m.val/m.max)*100}%;background:${m.color}"></div></div>
      <span class="bar-val">${m.val}</span>
    </div>
  `).join('');
}

function renderLineChart() {
  const meses = ['Ene','Feb','Mar','Abr','May','Jun'];
  const vals  = [3, 5, 4, 7, 6, 7];
  const max   = Math.max(...vals);
  document.getElementById('lineChart').innerHTML = `
    <div class="line-bars">
      ${meses.map((m,i) => `
        <div class="line-bar-w">
          <div class="line-bar" style="height:${(vals[i]/max)*88}px"></div>
          <span class="line-label">${m}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ══════════════════════ MODALS ═══════════════════════════
const MODALS = {
  expediente: () => `
    <div class="modal-title">Nuevo Expediente</div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Número de Expediente</label><input class="form-input" id="f-id" placeholder="Ej. 1100/2024" /></div>
      <div class="form-group"><label class="form-label">Materia</label>
        <select class="form-select" id="f-materia">
          <option value="civil">Civil</option><option value="familiar">Familiar</option>
          <option value="penal">Penal</option><option value="amparo">Amparo</option><option value="mercantil">Mercantil</option>
        </select>
      </div>
    </div>
    <div class="form-group"><label class="form-label">Nombre del Caso / Partes</label><input class="form-input" id="f-titulo" placeholder="Ej. González vs. Constructora" /></div>
    <div class="form-group"><label class="form-label">Cliente</label><input class="form-input" id="f-cliente" placeholder="Nombre completo" /></div>
    <div class="form-group"><label class="form-label">Juzgado / Tribunal</label><input class="form-input" id="f-juzgado" placeholder="Ej. 2° Civil, Cancún" /></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Estatus</label>
        <select class="form-select" id="f-estatus">
          <option value="activo">Activo</option><option value="sentencia">Sentencia</option>
          <option value="apelacion">Apelación</option><option value="suspendido">Suspendido</option><option value="ejecutando">Ejecutando</option>
        </select>
      </div>
      <div class="form-group"><label class="form-label">Próximo Acto Procesal</label><input class="form-input" id="f-prox" placeholder="Ej. Audiencia 15 Jun" /></div>
    </div>
    <div class="form-group"><label class="form-label">Notas</label><textarea class="form-textarea" id="f-notas" placeholder="Notas del caso..."></textarea></div>
    <div class="form-actions">
      <button class="btn-cancel" onclick="closeModalDirect()">Cancelar</button>
      <button class="btn-submit" onclick="guardarExpediente()">Guardar Expediente</button>
    </div>
  `,

  audiencia: () => `
    <div class="modal-title">Nueva Audiencia</div>
    <div class="form-group"><label class="form-label">Expediente</label><input class="form-input" id="fa-exp" placeholder="Número de expediente" /></div>
    <div class="form-group"><label class="form-label">Descripción</label><input class="form-input" id="fa-desc" placeholder="Ej. Audiencia de Pruebas" /></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Fecha</label><input class="form-input" id="fa-fecha" type="date" /></div>
      <div class="form-group"><label class="form-label">Hora</label><input class="form-input" id="fa-hora" type="time" /></div>
    </div>
    <div class="form-group"><label class="form-label">Juzgado</label><input class="form-input" id="fa-juz" placeholder="Ej. 3° Civil, Cancún" /></div>
    <div class="form-actions">
      <button class="btn-cancel" onclick="closeModalDirect()">Cancelar</button>
      <button class="btn-submit" onclick="showToast('✅ Audiencia agendada');closeModalDirect()">Agendar</button>
    </div>
  `,

  cliente: () => `
    <div class="modal-title">Nuevo Cliente</div>
    <div class="form-group"><label class="form-label">Nombre Completo</label><input class="form-input" id="fc-nombre" placeholder="Apellidos, Nombre" /></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Teléfono</label><input class="form-input" id="fc-tel" type="tel" placeholder="998-000-0000" /></div>
      <div class="form-group"><label class="form-label">Correo Electrónico</label><input class="form-input" id="fc-email" type="email" placeholder="correo@ejemplo.com" /></div>
    </div>
    <div class="form-group"><label class="form-label">RFC (opcional)</label><input class="form-input" id="fc-rfc" placeholder="XXXX000000000" /></div>
    <div class="form-group"><label class="form-label">Domicilio</label><textarea class="form-textarea" id="fc-dom" placeholder="Domicilio completo..."></textarea></div>
    <div class="form-actions">
      <button class="btn-cancel" onclick="closeModalDirect()">Cancelar</button>
      <button class="btn-submit" onclick="guardarCliente()">Guardar Cliente</button>
    </div>
  `,

  documento: () => `
    <div class="modal-title">Nuevo Documento</div>
    <div class="form-group"><label class="form-label">Título del Documento</label><input class="form-input" id="fd-titulo" placeholder="Ej. Demanda Principal" /></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Expediente</label><input class="form-input" id="fd-exp" placeholder="Número de exp." /></div>
      <div class="form-group"><label class="form-label">Fecha de Vencimiento</label><input class="form-input" id="fd-vence" type="date" /></div>
    </div>
    <div class="form-group"><label class="form-label">Tipo</label>
      <select class="form-select" id="fd-tipo">
        <option>📄 Escrito Inicial</option><option>📋 Contestación</option>
        <option>📑 Amparo</option><option>📃 Convenio</option><option>📝 Alegatos</option>
      </select>
    </div>
    <div class="form-actions">
      <button class="btn-cancel" onclick="closeModalDirect()">Cancelar</button>
      <button class="btn-submit" onclick="showToast('📁 Documento registrado');closeModalDirect()">Registrar</button>
    </div>
  `,
};

function openModal(tipo) {
  document.getElementById('modalContent').innerHTML = MODALS[tipo]?.() || '';
  document.getElementById('modalOverlay').classList.add('show');
}
function closeModal(e) { if (e.target === document.getElementById('modalOverlay')) closeModalDirect(); }
function closeModalDirect() { document.getElementById('modalOverlay').classList.remove('show'); }

// ══════════════════════ GUARDAR ═══════════════════════════
function guardarExpediente() {
  const id     = document.getElementById('f-id')?.value.trim();
  const titulo = document.getElementById('f-titulo')?.value.trim();
  const cliente= document.getElementById('f-cliente')?.value.trim();
  if (!id || !titulo || !cliente) { showToast('⚠ Completa los campos requeridos'); return; }
  expedientes.unshift({
    id, cliente,
    materia:  document.getElementById('f-materia')?.value,
    titulo,
    juzgado:  document.getElementById('f-juzgado')?.value,
    estatus:  document.getElementById('f-estatus')?.value,
    proxActo: document.getElementById('f-prox')?.value || 'Por definir',
    color: '#22d3ee',
  });
  save();
  renderExpCards(expedientes);
  renderDashboardTable();
  updateKPIs();
  closeModalDirect();
  showToast('✅ Expediente ' + id + ' guardado');
}

function guardarCliente() {
  const nombre = document.getElementById('fc-nombre')?.value.trim();
  const tel    = document.getElementById('fc-tel')?.value.trim();
  const correo = document.getElementById('fc-email')?.value.trim();
  if (!nombre) { showToast('⚠ El nombre es requerido'); return; }
  const colors = ['#22d3ee','#a78bfa','#f472b6','#fbbf24','#34d399'];
  clientes.unshift({ nombre, tel, correo, exp: 0, color: colors[Math.floor(Math.random()*colors.length)] });
  save();
  renderClientes(clientes);
  updateKPIs();
  closeModalDirect();
  showToast('✅ Cliente guardado');
}

// ══════════════════════ NOTIFICACIONES ════════════════════
function toggleNotif() {
  document.getElementById('notifPanel').classList.toggle('show');
}
document.addEventListener('click', e => {
  if (!e.target.closest('.notif-bell')) document.getElementById('notifPanel')?.classList.remove('show');
});

// ══════════════════════ TOAST ═════════════════════════════
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ══════════════════════ UTILS ════════════════════════════
function cap(str) { return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''; }
