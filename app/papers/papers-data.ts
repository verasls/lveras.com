export type Paper = {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  pmid?: string;
  code?: string;
};

export const papers: Array<Paper> = [
  {
    id: 18,
    title:
      "External validation of accelerometry-based mechanical loading prediction equations",
    authors:
      "Veras L, Oliveira D, Diniz-Sousa F, Boppre G, Resende-Coelho A, Oliveira J, Fonseca H",
    journal: "Applied Sciences",
    year: 2024,
    doi: "10.3390/app142210292",
  },
  {
    id: 17,
    title:
      "Impact of a multicomponent exercise training program on muscle strength after bariatric surgery: A randomized controlled trial",
    authors:
      "Boppre G, Diniz-Sousa F, Veras L, Bezerra A, Devezas V, Preto J, Santos-Sousa H, Oliveira J, Fonseca H",
    journal: "Obesity Surgery",
    year: 2024,
    doi: "10.1007/s11695-024-07173-w",
    pmid: "38532144",
  },
  {
    id: 16,
    title:
      "Effects of a supervised exercise training on body composition after bariatric surgery: a randomized controlled trial",
    authors:
      "Boppre G, Borges LPSL, Diniz-Sousa F, Veras L, Devezas V, Preto J, Santos-Sousa H, Costa THM, Oliveira J, Fonseca H",
    journal: "Obesity",
    year: 2023,
    doi: "10.1002/oby.23894",
    pmid: "37853990",
  },
  {
    id: 15,
    title:
      "Using raw accelerometer data to predict high-impact mechanical loading",
    authors:
      "Veras L, Diniz-Sousa F, Boppre G, Devezas V, Santos-Sousa H, Preto J, Vilas-Boas JP, Machado L, Oliveira J, Fonseca H",
    journal: "Sensors",
    year: 2023,
    doi: "10.3390/s23042246",
    pmid: "36850844",
    code: "jumping_GRF_ACC",
  },
  {
    id: 14,
    title:
      "Multicompartment body composition analysis in older adults: a cross-sectional study",
    authors:
      "Rossini-Venturini AC, Veras L, Pugliesi Abdalla P, Pereira dos Santos A, Tasinafo-Junior MF, Santos Lopes da Silva L, Cândido Alves T, Ferriolli E, Romo-Perez V, Garcia-Soidan JL, Mota J, Lopes Machado DR",
    journal: "BMC Geriatrics",
    year: 2023,
    doi: "10.1186/s12877-023-03752-1",
    pmid: "36759773A",
    code: "multicomp_body_composition",
  },
  {
    id: 13,
    title:
      "Mechanical loading prediction through accelerometry data during walking and running",
    authors:
      "Veras L, Diniz-Sousa F, Boppre G, Resende-Coelho A, Moutinho-Ribeiro E, Devezas V, Santos-Sousa H, Preto J, Vilas-Boas JP, Machado L, Oliveira J, Fonseca H",
    journal: "European Journal of Sport Science",
    year: 2022,
    doi: "10.1080/17461391.2022.2102437",
    pmid: "35838070",
    code: "locomotion_GRF_ACC",
  },
  {
    id: 12,
    title:
      "Changes in volumetric bone mineral density and bone quality after Roux-en-Y gastric bypass: A meta-analysis with meta-regression",
    authors:
      "Hernández-Martínez A, Veras L, Boppre G, Soriano-Maldonado A, Oliveira J, Diniz-Souza F, Fonseca H",
    journal: "Obesity Reviews",
    year: 2022,
    doi: "10.1111/obr.13479",
    pmid: "35665991",
    code: "bariatric_surgery_bone_SRMA",
  },
  {
    id: 11,
    title:
      "Comparison of climacteric symptoms, quality of life, and self-care attitudes before and during the COVID-19 pandemic",
    authors:
      "Oliveira Serra C, Gomes Leite PM, Bezerra AB, Freitas L, Veras L, Deda Costa M, Conceição Gonçalves LL, Yung dos Santos Maciel L",
    journal: "Journal of Menopausal Medicine",
    year: 2022,
    doi: "10.6118/jmm.21034",
    pmid: "35534427",
  },
  {
    id: 10,
    title:
      "Effects of a multicomponent exercise training program on balance following bariatric surgery",
    authors:
      "Diniz-Souza F, Granja T, Boppre G, Veras L, Devezas V, Santos-Sousa H, Preto J, Machado L, Vilas-Boas JP, Oliveira J, Fonseca H",
    journal: "International Journal of Sports Medicine",
    year: 2022,
    doi: "10.1055/a-1766-5803",
    pmid: "35419778",
  },
  {
    id: 9,
    title:
      "Does exercise improve the cardiometabolic risk profile of patients with obesity after bariatric surgery? A systematic review and meta-analysis of randomized controlled trials",
    authors: "Boppre G, Diniz-Sousa F, Veras L, Oliveira J, Fonseca H",
    journal: "Obesity Surgery",
    year: 2022,
    doi: "10.1007/s11695-022-06023-x",
    pmid: "35332396",
  },
  {
    id: 8,
    title:
      "The effect of exercise for the prevention of bone mass loss after bariatric surgery: A systematic review and meta-analysis",
    authors:
      "Diniz-Sousa F, Boppre G, Veras L, Hernández-Martínez A, Oliveira J, Fonseca H",
    journal: "Obesity Surgery",
    year: 2022,
    doi: "10.1007/s11695-021-05873-1",
    pmid: "35031954",
  },
  {
    id: 7,
    title:
      "The effect of bariatric surgery on gravitational loading and its impact on bone mass",
    authors:
      "Diniz-Sousa F, Veras L, Boppre G, Devezas V, Santos-Sousa H, Preto J, Machado L, Vilas-Boas JP, Oliveira J, Fonseca H",
    journal: "Bone",
    year: 2021,
    doi: "10.1016/j.bone.2021.116153",
    pmid: "34416407",
    code: "BaSEIB_bariatric_surgery_bone_health",
  },
  {
    id: 6,
    title:
      "Can exercise promote additional benefits on body composition in patients with obesity after bariatric surgery? A systematic review and meta-analysis of randomized controlled trials",
    authors: "Boppre G, Diniz-Sousa F, Veras L, Oliveira J, Fonseca H",
    journal: "Obesity Science & Practice",
    year: 2021,
    doi: "10.1002/osp4.542",
    pmid: "35127127",
  },
  {
    id: 5,
    title: "How does bariatric surgery affect fall risk factors?",
    authors:
      "Diniz-Sousa F, Veras L, Boppre G, Devezas V, Santos-Sousa H, Preto J, Machado L, Vilas-Boas JP, Oliveira J, Fonseca H",
    journal: "Obesity Surgery",
    year: 2021,
    doi: "10.1007/s11695-021-05400-2",
    pmid: "33797733",
    code: "BaSEIB_BS_balance",
  },
  {
    id: 4,
    title:
      "Wearable devices for physical activity and healthcare monitoring in elderly people: A critical review",
    authors:
      "Teixeira E, Fonseca H, Diniz-Sousa F, Veras L, Boppre G, Oliveira J, Pinto D, Alves AJ, Barbosa A, Mendes R, Marques-Aleixo I",
    journal: "Geriatrics",
    year: 2021,
    doi: "10.3390/geriatrics6020038",
    pmid: "33917104",
  },
  {
    id: 3,
    title:
      "The effect of an exercise intervention program on bone health after bariatric surgery: A randomized controlled trial",
    authors:
      "Diniz-Sousa F, Veras L, Boppre G, Sa-Couto P, Devezas V, Santos-Sousa H, Preto J, Machado L, Vilas-Boas JP, Oliveira J, Fonseca H",
    journal: "Journal of Bone and Mineral Research",
    year: 2021,
    doi: "10.1002/jbmr.4213",
    pmid: "33295063",
    code: "BaSEIB_exercise_bone_health",
  },
  {
    id: 2,
    title:
      "Accelerometer-based prediction of skeletal mechanical loading during walking in normal weight to severely obese subjects",
    authors:
      "Veras L, Diniz-Sousa F, Boppre G, Devezas V, Santos-Sousa H, Preto J, Machado L, Vilas-Boas JP, Oliveira J, Fonseca H",
    journal: "Osteoporosis International",
    year: 2020,
    doi: "10.1007/s00198-020-05295-2",
    pmid: "31965217",
    code: "walking_GRF_ACC",
  },
  {
    id: 1,
    title:
      "Accelerometry calibration in people with class II-III obesity: Energy expenditure prediction and physical activity intensity identification",
    authors:
      "Diniz-Sousa F, Veras L, Ribeiro JC, Boppre G, Devezas V, Santos-Sousa H, Preto J, Machado L, Vilas-Boas JP, Oliveira J, Fonseca H",
    journal: "Gait and Posture",
    year: 2020,
    doi: "10.1016/j.gaitpost.2019.11.008",
    pmid: "31756665",
    code: "EE_PAI_ACC_obese",
  },
];
