interface AccordionItem {
  id: string;
  title: string;
  details: string | string[];
}

export const statuteChapters: AccordionItem[] = [
  {
    id: 'panel1',
    title: 'CAPÍTULO I – DA DENOMINAÇÃO, FUNDAÇÃO E FINALIDADE',
    details: [
      'Art. 1º – O Motoclube denominado Black Thamba, fundado em 06 de abril de 2025, é uma associação civil de caráter informal, sem fins lucrativos, sem personalidade jurídica, de duração indeterminada, com sede virtual entre seus membros, tendo como base a união de motociclistas em torno da paixão por motocicletas, estrada, irmandade e liberdade.',
      'Art. 2º – O Motoclube tem como finalidades:',
      'I – Promover encontros, passeios, viagens e eventos entre motociclistas;',
      'II – Incentivar a camaradagem, o respeito mútuo e o espírito de irmandade;',
      'III – Preservar e difundir a cultura motociclística;',
      'IV – Atuar de forma solidária e respeitosa com a sociedade, respeitando leis, o trânsito e a natureza.',
    ],
  },
  {
    id: 'panel2',
    title: 'CAPÍTULO II – DOS MEMBROS',
    details: [
      'Art. 3º – O Motoclube será composto por:',
      'I – Fundadores: Membros que participaram da criação do grupo em 06/04/2025;',
      'II – Membros efetivos: Aprovados pelo grupo após período de avaliação;',
      'III – Aspirantes: Interessados em ingressar, em período de avaliação, com duração mínima de 6 meses ou conforme decidido pelos membros fundadores.',
      'Art. 4º – São deveres dos membros:',
      'I – Respeitar este Estatuto e decisões coletivas do grupo;',
      'II – Zelar pela boa imagem do Motoclube;',
      'III – Participar dos encontros e eventos sempre que possível;',
      'IV – Manter conduta ética e respeitosa com todos.',
      'Art. 5º – É vedado a qualquer membro:',
      'I – Usar o nome do Motoclube em ações ilegais ou contrárias ao espírito do grupo;',
      'II – Promover desunião, desrespeito ou confusão entre os membros;',
      'III – Usar coletes, brasões ou insígnias do clube sem autorização dos fundadores.',
    ],
  },
  {
    id: 'panel3',
    title: 'CAPÍTULO III – DO USO DO NOME, COLETE E INSÍGNIA',
    details: [
      'Art. 6º – O nome Black Thamba, bem como o brasão, símbolo ou qualquer insígnia do Motoclube, só poderá ser utilizado por membros fundadores ou efetivos autorizados.',
      'Art. 7º – O colete com o brasão completo é um símbolo de pertencimento e respeito, e será entregue ao membro apenas após aprovação definitiva pelo grupo.',
    ],
  },
  {
    id: 'panel4',
    title: 'CAPÍTULO IV – DA ORGANIZAÇÃO INTERNA',
    details: [
      'Art. 8º – A administração do Motoclube será feita de forma colegiada, com decisões tomadas por maioria simples dos membros fundadores e efetivos.',
      'Art. 9º – O grupo poderá eleger, entre os membros fundadores, representantes para facilitar a comunicação e organização dos eventos. Tais cargos são simbólicos e rotativos.',
    ],
  },
  {
    id: 'panel5',
    title: 'CAPÍTULO V – DAS PENALIDADES E EXCLUSÃO',
    details: [
      'Art. 10º – O membro que descumprir este Estatuto ou agir contra os princípios do Motoclube poderá ser advertido, suspenso ou excluído, conforme decisão dos membros fundadores.',
      'Art. 11º – A exclusão será aplicada apenas após oportunidade de defesa e mediante decisão por maioria absoluta dos fundadores.',
    ],
  },
  {
    id: 'panel6',
    title: 'CAPÍTULO VI – DAS DISPOSIÇÕES FINAIS',
    details: [
      'Art. 12º – Este Estatuto poderá ser alterado a qualquer momento por decisão unânime dos membros fundadores.',
      'Art. 13º – Os casos omissos serão resolvidos pelo bom senso, diálogo e espírito de irmandade entre os membros.',
      'Art. 14º – Este Estatuto entra em vigor na data de sua aprovação.',
    ],
  },
];

export const frequentQuestions: AccordionItem[] = [
  {
    id: 'faq1',
    title: 'Como posso me tornar um membro do Black Thamba?',
    details: 'Para ingressar, você começa como um "Aspirante" por um período mínimo de 6 meses. Após essa fase de avaliação e com a aprovação do grupo, você pode se tornar um "Membro Efetivo".',
  },
  {
    id: 'faq2',
    title: 'Quais são os principais deveres de um membro?',
    details: 'Todo membro deve respeitar o estatuto, zelar pela boa imagem do motoclube, participar dos encontros sempre que possível e manter uma conduta ética e respeitosa com todos.',
  },
  {
    id: 'faq3',
    title: 'Quando receberei o direito de usar o colete com o brasão completo?',
    details: 'O colete com o brasão completo é um símbolo de pertencimento e respeito. Ele é entregue apenas após a aprovação definitiva do aspirante como membro efetivo do grupo.',
  },
  {
    id: 'faq4',
    title: 'Quem toma as decisões no motoclube?',
    details: 'As decisões são tomadas de forma colegiada, por maioria simples dos votos dos membros fundadores e efetivos. Não há uma hierarquia de cargos; a liderança é simbólica e rotativa para facilitar a organização.',
  },
  {
    id: 'faq5',
    title: 'O que acontece se um membro desrespeitar as regras?',
    details: 'Um membro que descumprir o estatuto pode ser advertido, suspenso ou até mesmo excluído. A exclusão só ocorre após uma decisão da maioria dos fundadores e depois que o membro teve a oportunidade de se defender.',
  },
  {
    id: 'faq6',
    title: 'O que é o Black Thamba?',
    details: 'É uma associação informal de motociclistas, sem fins lucrativos, baseada na paixão por motocicletas, na irmandade e na liberdade. O objetivo é promover encontros, viagens e difundir a cultura motociclística de forma respeitosa.',
  },
];