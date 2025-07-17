const planEstudios = [
  {
    semestre: "1er Semestre",
    ramos: [
      {codigo: "01011403", nombre:"ALGORTIMOS Y PROGRAMACIÓN", creditos: 4},
      {codigo: "01011401", nombre:"CÁLCULO DIFERENCIAL", creditos: 4},
      {codigo: "01011406", nombre:"GENERAL ENGLISH I", creditos:2},
      {codigo: "01011404", nombre:"INTRODUCCIÓN A LA INGENIERÍA DE SISTEMAS", creditos:2},
      {codigo: "01011402", nombre:"MATEMÁTICAS DISCRETAS", creditos:4},
      {codigo: "01011405", nombre:"PROCESOS LECTORES Y ESCRITURALES", creditos:2}
    ]
  },
  {
    semestre: "2do Semestre",
    ramos: [
      {codigo: "02011408", nombre:"ÁLGEBRA LINEAL", creditos:3},
      {codigo: "02011407", nombre:"CÁLCULO INTEGRAL", creditos:4, requisitos:["CÁLCULO DIFERENCIAL"]},
      {codigo: "02011409", nombre:"ESTRUCTURA DE DATOS I", creditos:4, requisitos:["ALGORTIMOS Y PROGRAMACIÓN"]},
      {codigo: "02011411", nombre:"GENERAL ENGLISH II", creditos:2, requisitos:["GENERAL ENGLISH I"]},
      {codigo: "02011410", nombre:"PROGRAMACIÓN ORIENTADA A OBJETOS", creditos:4, requisitos:["ALGORTIMOS Y PROGRAMACIÓN"]}
    ]
  },
  {
    semestre: "3er Semestre",
    ramos: [
      {codigo:"03011412", nombre:"CÁLCULO VECTORIAL", creditos:4, requisitos:["ÁLGEBRA LINEAL","CÁLCULO INTEGRAL"]},
      {codigo:"03011415", nombre:"ESTRUCTURA DE DATOS II", creditos:4, requisitos:["ESTRUCTURA DE DATOS I"]},
      {codigo:"03011416", nombre:"EXPRESIÓN ORAL Y ARGUMENTACIÓN", creditos:2, requisitos:["PROCESOS LECTORES Y ESCRITURALES"]},
      {codigo:"03011417", nombre:"GENERAL ENGLISH III", creditos:2, requisitos:["GENERAL ENGLISH II"]},
      {codigo:"03011414", nombre:"PENSAMIENTO DE SISTEMAS", creditos:2},
      {codigo:"03011413", nombre:"PROBABILIDAD Y ESTADÍSTICA", creditos:3, requisitos:["CÁLCULO INTEGRAL"]}
    ]
  },
  {
    semestre: "4to Semestre",
    ramos: [
      {codigo:"04011420", nombre:"BASES DE DATOS", creditos:4, requisitos:["ESTRUCTURA DE DATOS II"]},
      {codigo:"04011418", nombre:"ECUACIONES DIFERENCIALES", creditos:3, requisitos:["CÁLCULO INTEGRAL"]},
      {codigo:"04011419", nombre:"ESTADÍSTICA INFERENCIAL", creditos:3, requisitos:["PROBABILIDAD Y ESTADÍSTICA"]},
      {codigo:"04011422", nombre:"FORMACIÓN HUMANÍSTICA Y CIUDADANA", creditos:2},
      {codigo:"04011423", nombre:"GENERAL ENGLISH IV", creditos:2, requisitos:["GENERAL ENGLISH III"]},
      {codigo:"04011421", nombre:"SISTEMAS DIGITALES", creditos:4, requisitos:["MATEMÁTICAS DISCRETAS"]}
    ]
  },
  {
    semestre: "5to Semestre",
    ramos: [
      {codigo:"06011430", nombre:"ANÁLISIS NUMÉRICO", creditos:3, requisitos:["ECUACIONES DIFERENCIALES"]},
      {codigo:"05011429", nombre:"ARQUITECTURA DE COMPUTADORES", creditos:3, requisitos:["SISTEMAS DIGITALES"]},
      {codigo:"05011431", nombre:"GENERAL ENGLISH V", creditos:2, requisitos:["GENERAL ENGLISH IV"]},
      {codigo:"05011425", nombre:"INVESTIGACIÓN DE OPERACIONES DETERMINÍSTICAS", creditos:3, requisitos:["ÁLGEBRA LINEAL"]},
      {codigo:"07011435", nombre:"MATEMÁTICAS AVANZADAS", creditos:3, requisitos:["ECUACIONES DIFERENCIALES"]},
      {codigo:"05011427", nombre:"PROGRAMACIÓN PARA WEB", creditos:4, requisitos:["PROGRAMACIÓN ORIENTADA A OBJETOS"]}
    ]
  },
  {
    semestre: "6to Semestre",
    ramos: [
      {codigo:"06011433", nombre:"COMPILADORES", creditos:4, requisitos:["ESTRUCTURA DE DATOS II"]},
      {codigo:"07011436", nombre:"FÍSICA MECÁNICA", creditos:4, requisitos:["CÁLCULO DIFERENCIAL"]},
      {codigo:"06011432", nombre:"INGENIERÍA DE SOFTWARE", creditos:4, requisitos:["PROGRAMACIÓN PARA WEB"]},
      {codigo:"06011450", nombre:"INGENIERÍA ECONÓMICA", creditos:3, requisitos:["ESTADÍSTICA INFERENCIAL"]},
      {codigo:"06011434", nombre:"PROYECTO DE DISEÑO Y PROTOTIPADO", creditos:2, requisitos:["PROGRAMACIÓN PARA WEB"]}
    ]
  },
  {
    semestre: "7mo Semestre",
    ramos: [
      {codigo:"07011438", nombre:"ARQUITECTURA DE SOFTWARE", creditos:4, requisitos:["INGENIERÍA DE SOFTWARE"]},
      {codigo:"08011440", nombre:"CALOR Y ONDAS", creditos:4, requisitos:["FÍSICA MECÁNICA"]},
      {codigo:"07011437", nombre:"DISEÑO ORGANIZACIONAL DE TI", creditos:4, requisitos:["PENSAMIENTO DE SISTEMAS", {porcentaje:60}]},
      {codigo:"09011448", nombre:"LEGISLACIÓN INFORMÁTICA", creditos:2, requisitos:[{porcentaje:70}]},
      {codigo:"08011442", nombre:"SISTEMAS OPERATIVOS", creditos:4, requisitos:["ARQUITECTURA DE COMPUTADORES","COMPILADORES"]}
    ]
  },
  {
    semestre: "8vo Semestre",
    ramos: [
      {codigo:"08011441", nombre:"ELECTRICIDAD Y MAGNETISMO", creditos:4, requisitos:["CALOR Y ONDAS"]},
      {codigo:"09011446", nombre:"ÉTICA EN INGENIERÍA DE SISTEMAS", creditos:2, requisitos:[{porcentaje:70}]},
      {codigo:"09011447", nombre:"GESTIÓN DE PROYECTOS", creditos:3, requisitos:["INGENIERÍA ECONÓMICA"]},
      {codigo:"06011431", nombre:"INTELIGENCIA ARTIFICIAL", creditos:4, requisitos:["ESTADÍSTICA INFERENCIAL","ANÁLISIS NUMÉRICO","COMPILADORES"]}
    ]
  },
  {
    semestre: "9no Semestre",
    ramos: [
      {codigo:"09011444", nombre:"DINÁMICA DE SISTEMAS", creditos:4, requisitos:["PENSAMIENTO DE SISTEMAS","ECUACIONES DIFERENCIALES"]},
      {codigo:"09011462", nombre:"EXPERIENCIA FINAL DE DISEÑO EN INGENIERÍA", creditos:4, requisitos:["PROYECTO DE DISEÑO Y PROTOTIPADO","ARQUITECTURA DE SOFTWARE","INTELIGENCIA ARTIFICIAL"]},
      {codigo:"09011445", nombre:"REDES", creditos:4, requisitos:["SISTEMAS OPERATIVOS"]}
    ]
  }
];

// Estado de aprobación de cada ramo {codigo: true/false}
let estadoRamos = {};
planEstudios.forEach(s => s.ramos.forEach(r => estadoRamos[r.codigo] = false));

// Renderizado vertical por columna
const mallaContainer = document.getElementById('malla-grid');
function renderMallaGrid() {
  mallaContainer.innerHTML = '';
  planEstudios.forEach((sem, i) => {
    const col = document.createElement('div');
    col.className = 'sem-col';

    // Título
    const titulo = document.createElement('div');
    titulo.className = 'semestre-titulo';
    titulo.innerText = sem.semestre;
    col.appendChild(titulo);

    sem.ramos.forEach(ramo => {
      const div = document.createElement('div');
      div.className = 'ramo';
      div.tabIndex = 0;
      div.id = ramo.codigo;
      if (estadoRamos[ramo.codigo]) div.classList.add('aprobado');
      if (!ramoDesbloqueado(ramo)) div.classList.add('bloqueado');
      div.innerHTML = `
        <span class="codigo">${ramo.codigo}</span>
        <div class="nombre">${ramo.nombre}</div>
        <span class="creditos">${ramo.creditos} créditos</span>
        ${ramo.requisitos ? `<div class="requisitos">Req: ${mostrarReq(ramo)}</div>` : ''}
      `;
      // Click sólo si desbloqueado
      if (ramoDesbloqueado(ramo)) {
        div.onclick = () => aprobarRamo(ramo.codigo);
        div.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") aprobarRamo(ramo.codigo);}
      }
      col.appendChild(div);
    });
    mallaContainer.appendChild(col);
  });
}

// Devuelve true si todos los requisitos están aprobados
function ramoDesbloqueado(ramo) {
  if (!ramo.requisitos) return true;
  let reqs = ramo.requisitos;
  let ok = true;
  reqs.forEach(r => {
    if (typeof r === "object" && r.porcentaje) {
      ok = ok && (porcentajeAprobado() >= r.porcentaje);
    } else if (typeof r === "string") {
      // Buscar por nombre o código
      let ramoReq = buscarRamo(r);
      ok = ok && ramoReq && estadoRamos[ramoReq.codigo];
    }
  });
  return ok;
}

function porcentajeAprobado() {
  const total = Object.keys(estadoRamos).length;
  const aprobados = Object.values(estadoRamos).filter(Boolean).length;
  return Math.round((aprobados / total) * 100);
}

// Busca un ramo por nombre (case insensitive) o código
function buscarRamo(ref) {
  ref = ref.toUpperCase().trim();
  for (const s of planEstudios) {
    for (const r of s.ramos) {
      if (r.codigo.toUpperCase() === ref || r.nombre.toUpperCase() === ref) {
        return r;
      }
    }
  }
  return null;
}

function mostrarReq(ramo) {
  return ramo.requisitos.map(r=>{
    if (typeof r === "object" && r.porcentaje) {
      return `Aprobar ${r.porcentaje}% malla`;
    }
    let reqRamo = buscarRamo(r);
    return reqRamo ? reqRamo.nombre : r;
  }).join(", ");
}

function aprobarRamo(codigo) {
  estadoRamos[codigo] = !estadoRamos[codigo];
  renderMallaGrid();
}

// Inicializar
renderMallaGrid();
