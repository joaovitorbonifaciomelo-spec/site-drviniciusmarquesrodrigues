/**
 * Biografia editorial (página /trajetoria/).
 *
 * Fonte: currículo enviado pelo próprio Dr. Vinicius (2026-11-20,
 * "VINICIUS _MARQUES RODRIGUES_Currículo.pdf") + traços da autodescrição em
 * initial-evidence-audit.md. Dados pessoais do currículo (endereço,
 * documento, data de nascimento, estado civil, objetivo profissional) NÃO
 * vão para o site.
 */
export const bio = [
  'Cardiologista e eletrofisiologista, Dr. Vinicius atua há 23 anos em Goiânia, com cardiologia clínica, arritmias e eletrofisiologia. Formou-se em Medicina pela Faculdade de Medicina de Petrópolis, fez residência em Clínica Médica no Hospital Central da Polícia Militar, no Rio de Janeiro, e residências em Cardiologia e em Eletrofisiologia no INC, complementando a formação com um fellowship em eletrofisiologia no Hospital Clínic, em Barcelona.',
  'É diretor médico da Vivenza Centro Médico e, há 20 anos, eletrofisiologista do grupo Medcore. Ao longo da carreira, realizou mais de 35 mil consultas cardiológicas, mais de 20 mil testes ergométricos e mais de 20 mil exames de Holter.',
  'Descreve a medicina como uma vocação sustentada por estudo contínuo e um compromisso ético com cada paciente — e vê valor em compartilhar esse conhecimento também com outros médicos, ao longo da carreira.',
];

/** Formação — fonte: currículo (2026-11-20). */
export const trajectory = [
  { area: 'Graduação', detail: 'Medicina — Faculdade de Medicina de Petrópolis', place: 'Petrópolis, RJ', year: '1993–1998' },
  { area: 'Residência', detail: 'Clínica Médica — Hospital Central da Polícia Militar', place: 'Rio de Janeiro', year: '1999' },
  { area: 'Residência', detail: 'Cardiologia — INC', place: 'Rio de Janeiro', year: '2000' },
  { area: 'Residência', detail: 'Eletrofisiologia — INC', place: 'Rio de Janeiro', year: '2003' },
  { area: 'Fellowship', detail: 'Eletrofisiologia — Hospital Clínic', place: 'Barcelona, Espanha', year: '2007' },
];

/** Atuação profissional — fonte: currículo (2026-11-20). */
export const practice = [
  { area: 'Direção médica', detail: 'Vivenza Centro Médico', place: 'Goiânia', year: 'desde 2019' },
  { area: 'Eletrofisiologia', detail: 'Grupo Medcore', place: 'Goiânia', year: 'há 20 anos' },
  { area: 'Experiência', detail: '+35 mil consultas cardiológicas', place: null, year: null },
  { area: 'Exames', detail: '+20 mil testes ergométricos · +20 mil Holters', place: null, year: null },
  { area: 'Sociedades', detail: 'Membro efetivo da Sociedade Brasileira de Cardiologia', place: null, year: 'há 20 anos' },
  { area: 'Congressos', detail: 'SOCESP, SBC e ESC', place: 'nacionais e internacionais', year: null },
];
