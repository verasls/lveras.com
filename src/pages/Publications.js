import { useEffect, useCallback } from "react";

import { IonIcon } from "@ionic/react";
import { logoGithub } from "ionicons/icons";

import "../styles/general.css";
import "./Publications.css";

export function Publications({ setHeaderSticky, setOnPublicationsPage }) {
  const handleScroll = useCallback(() => {
    const scrollPosition = window.pageYOffset;
    setHeaderSticky(scrollPosition > 0);
  }, [setHeaderSticky]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    setOnPublicationsPage(true);
    return () => {
      setOnPublicationsPage(false);
    };
  }, [setOnPublicationsPage]);

  return (
    <section className="publications" id="publications">
      <span className="subheading">Publications</span>
      <h2>Peer reviewed scientific papers</h2>

      <ul className="paper-list">
        <li className="paper">
          <p className="paper-title">
            Using raw accelerometer data to predict high-impact mechanical
            loading
          </p>
          <p className="paper-authors">
            <strong>Veras L</strong>, Diniz-Sousa F, Boppre G, Devezas V,
            Santos-Sousa H, Preto J, Vilas-Boas JP, Machado L, Oliveira J,
            Fonseca H
          </p>
          <p className="paper-publication">
            <span className="paper-journal">Sensors</span>, 2023
          </p>
          <div className="paper-links">
            <a className="paper-link" href="https://doi.org/10.3390/s23042246">
              <i className="paper-icon ai ai-doi"></i>
            </a>
            <a
              className="paper-link"
              href="https://pubmed.ncbi.nlm.nih.gov/36850844/"
            >
              <i className="paper-icon ai ai-pubmed"></i>
            </a>
            <a
              className="paper-link"
              href="https://github.com/verasls/jumping_GRF_ACC"
            >
              <IonIcon className="paper-icon" icon={logoGithub} />
            </a>
          </div>
        </li>

        <li className="paper">
          <p className="paper-title">
            Multicompartment body composition analysis in older adults: a
            cross-sectional study
          </p>
          <p className="paper-authors">
            Rossini-Venturini AC, <strong>Veras L</strong>, Pugliesi Abdalla P,
            Pereira dos Santos A, Tasinafo-Junior MF, Santos Lopes da Silva L,
            Cândido Alves T, Ferriolli E, Romo-Perez V, Garcia-Soidan JL, Mota
            J, Lopes Machado DR
          </p>
          <p className="paper-publication">
            <span className="paper-journal">BMC Geriatrics</span>, 2023
          </p>
          <div className="paper-links">
            <a
              className="paper-link"
              href="https://doi.org/10.1186/s12877-023-03752-1"
            >
              <i className="paper-icon ai ai-doi"></i>
            </a>
            <a
              className="paper-link"
              href="https://pubmed.ncbi.nlm.nih.gov/36759773/"
            >
              <i className="paper-icon ai ai-pubmed"></i>
            </a>
            <a
              className="paper-link"
              href="https://github.com/verasls/multicomp_body_composition"
            >
              <IonIcon className="paper-icon" icon={logoGithub} />
            </a>
          </div>
        </li>

        <li className="paper">
          <p className="paper-title">
            Mechanical loading prediction through accelerometry data during
            walking and running
          </p>
          <p className="paper-authors">
            <strong>Veras L</strong>, Diniz-Sousa F, Boppre G, Resende-Coelho A,
            Moutinho-Ribeiro E, Devezas V, Santos-Sousa H, Preto J, Vilas-Boas
            JP, Machado L, Oliveira J, Fonseca H
          </p>
          <p className="paper-publication">
            <span className="paper-journal">
              European Journal of Sport Science{" "}
            </span>
            , 2022
          </p>
          <div className="paper-links">
            <a
              className="paper-link"
              href="https://doi.org/10.1080/17461391.2022.2102437"
            >
              <i className="paper-icon ai ai-doi"></i>
            </a>
            <a
              className="paper-link"
              href="https://pubmed.ncbi.nlm.nih.gov/35838070/"
            >
              <i className="paper-icon ai ai-pubmed"></i>
            </a>
            <a
              className="paper-link"
              href="https://github.com/verasls/locomotion_GRF_ACC"
            >
              <IonIcon className="paper-icon" icon={logoGithub} />
            </a>
          </div>
        </li>

        <li className="paper">
          <p className="paper-title">
            Changes in volumetric bone mineral density and bone quality after
            Roux-en-Y gastric bypass: A meta-analysis with meta-regression
          </p>
          <p className="paper-authors">
            Hernández-Martínez A, <strong>Veras L</strong>, Boppre G,
            Soriano-Maldonado A, Oliveira J, Diniz-Souza F, Fonseca H
          </p>
          <p className="paper-publication">
            <span className="paper-journal">Obesity Reviews</span>, 2022
          </p>
          <div className="paper-links">
            <a className="paper-link" href="https://doi.org/10.1111/obr.13479">
              <i className="paper-icon ai ai-doi"></i>
            </a>
            <a
              className="paper-link"
              href="https://pubmed.ncbi.nlm.nih.gov/35665991/"
            >
              <i className="paper-icon ai ai-pubmed"></i>
            </a>
            <a
              className="paper-link"
              href="https://github.com/verasls/bariatric_surgery_bone_SRMA"
            >
              <IonIcon className="paper-icon" icon={logoGithub} />
            </a>
          </div>
        </li>
        <li className="paper">
          <p className="paper-title">
            Comparison of Climacteric Symptoms, Quality of Life, and Self-Care
            Attitudes before and during the COVID-19 Pandemic
          </p>
          <p className="paper-authors">
            Oliveira Serra C, Gomes Leite PM, Bezerra AB, Freitas L,
            <strong>Veras L</strong>, Deda Costa M, Conceição Gonçalves LL, Yung
            dos Santos Maciel L
          </p>
          <p className="paper-publication">
            <span className="paper-journal">
              Journal of Menopausal Medicine
            </span>
            , 2022
          </p>
          <div className="paper-links">
            <a
              className="paper-link"
              href="http://dx.doi.org/10.6118/jmm.21034"
            >
              <i className="paper-icon ai ai-doi"></i>
            </a>
          </div>
        </li>

        <li className="paper">
          <p className="paper-title">
            Effects of a Multicomponent Exercise Training Program on Balance
            Following Bariatric Surgery
          </p>
          <p className="paper-authors">
            Diniz-Sousa F, Granja T, Boppre G, <strong>Veras L</strong>, Devezas
            V, Santos-Sousa H, Preto J, Machado L, Vilas- Boas JP, Oliveira J,
            Fonseca H
          </p>
          <p className="paper-publication">
            <span className="paper-journal">
              International Journal of Sports Medicine
            </span>
            , 2022
          </p>
          <div className="paper-links">
            <a
              className="paper-link"
              href="http://dx.doi.org/10.1055/a-1766-5803"
            >
              <i className="paper-icon ai ai-doi"></i>
            </a>
            <a
              className="paper-link"
              href="https://pubmed.ncbi.nlm.nih.gov/35419778/"
            >
              <i className="paper-icon ai ai-pubmed"></i>
            </a>
          </div>
        </li>

        <li className="paper">
          <p className="paper-title">
            Does Exercise Improve the Cardiometabolic Risk Profile of Patients
            with Obesity After Bariatric Surgery? A Systematic Review and
            Meta-analysis of Randomized Controlled Trials
          </p>
          <p className="paper-authors">
            Boppre G, Diniz-Sousa F, <strong>Veras L</strong>, Oliveira J,
            Fonseca H
          </p>
          <p className="paper-publication">
            <span className="paper-journal">Obesity Surgery</span>, 2022
          </p>
          <div className="paper-links">
            <a
              className="paper-link"
              href="https://doi.org/10.1007/s11695-022-06023-x"
            >
              <i className="paper-icon ai ai-doi"></i>
            </a>
            <a
              className="paper-link"
              href="https://pubmed.ncbi.nlm.nih.gov/35332396/"
            >
              <i className="paper-icon ai ai-pubmed"></i>
            </a>
          </div>
        </li>

        <li className="paper">
          <p className="paper-title">
            The Effect of Exercise for the Prevention of Bone Mass Loss After
            Bariatric Surgery: a Systematic Review and Meta-analysis
          </p>
          <p className="paper-authors">
            Diniz-Sousa F, Boppre G, <strong>Veras L</strong>,
            Hernández-Martínez A, Oliveira J, Fonseca H
          </p>
          <p className="paper-publication">
            <span className="paper-journal">Obesity Surgery</span>, 2022
          </p>
          <div className="paper-links">
            <a
              className="paper-link"
              href="http://dx.doi.org/10.1007/s11695-021-05873-1"
            >
              <i className="paper-icon ai ai-doi"></i>
            </a>
            <a
              className="paper-link"
              href="https://pubmed.ncbi.nlm.nih.gov/35031954/"
            >
              <i className="paper-icon ai ai-pubmed"></i>
            </a>
          </div>
        </li>

        <li className="paper">
          <p className="paper-title">
            The effect of bariatric surgery on gravitational loading and its
            impact on bone mass
          </p>
          <p className="paper-authors">
            Diniz-Sousa F, <strong>Veras L</strong>, Boppre G, Devezas V,
            Santos-Sousa H, Preto J, Machado L, Vilas- Boas JP, Oliveira J,
            Fonseca H
          </p>
          <p className="paper-publication">
            <span className="paper-journal">Bone</span>, 2021
          </p>
          <div className="paper-links">
            <a
              className="paper-link"
              href="http://dx.doi.org/10.1016/j.bone.2021.116153"
            >
              <i className="paper-icon ai ai-doi"></i>
            </a>
            <a
              className="paper-link"
              href="https://pubmed.ncbi.nlm.nih.gov/34416407/"
            >
              <i className="paper-icon ai ai-pubmed"></i>
            </a>
            <a
              className="paper-link"
              href="https://github.com/verasls/BaSEIB_bariatric_surgery_bone_health"
            >
              <IonIcon className="paper-icon" icon={logoGithub} />
            </a>
          </div>
        </li>

        <li className="paper">
          <p className="paper-title">
            Can exercise promote additional benefits on body composition in
            patients with obesity after bariatric surgery? A systematic review
            and meta‐analysis of Randomized Controlled Trials
          </p>
          <p className="paper-authors">
            Boppre G, Diniz-Sousa F, <strong>Veras L</strong>, Oliveira J,
            Fonseca H
          </p>
          <p className="paper-publication">
            <span className="paper-journal">
              Obesity Science &amp; Practice
            </span>
            , 2021
          </p>
          <div className="paper-links">
            <a className="paper-link" href="https://doi.org/10.1002/osp4.542">
              <i className="paper-icon ai ai-doi"></i>
            </a>
            <a
              className="paper-link"
              href="https://pubmed.ncbi.nlm.nih.gov/35127127/"
            >
              <i className="paper-icon ai ai-pubmed"></i>
            </a>
          </div>
        </li>

        <li className="paper">
          <p className="paper-title">
            How Does Bariatric Surgery Affect Fall Risk Factors?
          </p>
          <p className="paper-authors">
            Diniz-Sousa F, <strong>Veras L</strong>, Boppre G, Devezas V,
            Santos-Sousa H, Preto J, Machado L, Vilas- Boas JP, Oliveira J,
            Fonseca H
          </p>
          <p className="paper-publication">
            <span className="paper-journal">Obesity Surgery</span>, 2021
          </p>
          <div className="paper-links">
            <a
              className="paper-link"
              href="http://dx.doi.org/10.1007/s11695-021-05400-2"
            >
              <i className="paper-icon ai ai-doi"></i>
            </a>
            <a
              className="paper-link"
              href="https://pubmed.ncbi.nlm.nih.gov/33797733/"
            >
              <i className="paper-icon ai ai-pubmed"></i>
            </a>
            <a
              className="paper-link"
              href="https://github.com/verasls/BaSEIB_BS_balance"
            >
              <IonIcon className="paper-icon" icon={logoGithub} />
            </a>
          </div>
        </li>

        <li className="paper">
          <p className="paper-title">
            Wearable Devices for Physical Activity and Healthcare Monitoring in
            Elderly People: A Critical Review
          </p>
          <p className="paper-authors">
            Teixeira E, Fonseca H, Diniz-Sousa F, <strong>Veras L</strong>,
            Boppre G, Oliveira J, Pinto D, Alves AJ, Barbosa A, Mendes R,
            Marques-Aleixo I
          </p>
          <p className="paper-publication">
            <span className="paper-journal">Geriatrics</span>, 2021
          </p>
          <div className="paper-links">
            <a
              className="paper-link"
              href="https://doi.org/10.3390/geriatrics6020038"
            >
              <i className="paper-icon ai ai-doi"></i>
            </a>
            <a
              className="paper-link"
              href="https://pubmed.ncbi.nlm.nih.gov/33917104/"
            >
              <i className="paper-icon ai ai-pubmed"></i>
            </a>
          </div>
        </li>

        <li className="paper">
          <p className="paper-title">
            The Effect of an Exercise Intervention Program on Bone Health After
            Bariatric Surgery: A Randomized Controlled Trial
          </p>
          <p className="paper-authors">
            Diniz-Sousa F, <strong>Veras L</strong>, Boppre G, Sa-Couto P,
            Devezas V, Santos-Sousa H, Preto J, Machado L, Vilas- Boas JP,
            Oliveira J, Fonseca H
          </p>
          <p className="paper-publication">
            <span className="paper-journal">
              Journal of Bone and Mineral Research
            </span>
            , 2021
          </p>
          <div className="paper-links">
            <a
              className="paper-link"
              href="http://dx.doi.org/10.1002/jbmr.4213"
            >
              <i className="paper-icon ai ai-doi"></i>
            </a>
            <a
              className="paper-link"
              href="https://pubmed.ncbi.nlm.nih.gov/33295063/"
            >
              <i className="paper-icon ai ai-pubmed"></i>
            </a>
            <a
              className="paper-link"
              href="https://github.com/verasls/BaSEIB_exercise_bone_health"
            >
              <IonIcon className="paper-icon" icon={logoGithub} />
            </a>
          </div>
        </li>

        <li className="paper">
          <p className="paper-title">
            Accelerometer-based prediction of skeletal mechanical loading during
            walking in normal weight to severely obese subjects
          </p>
          <p className="paper-authors">
            <strong>Veras L</strong>, Diniz-Sousa F, Boppre G, Devezas V,
            Santos-Sousa H, Preto J, Machado L, Vilas- Boas JP, Oliveira J,
            Fonseca H
          </p>
          <p className="paper-publication">
            <span className="paper-journal">Osteoporosis International</span>,
            2020
          </p>
          <div className="paper-links">
            <a
              className="paper-link"
              href="http://dx.doi.org/10.1007/s00198-020-05295-2"
            >
              <i className="paper-icon ai ai-doi"></i>
            </a>
            <a
              className="paper-link"
              href="https://pubmed.ncbi.nlm.nih.gov/31965217/"
            >
              <i className="paper-icon ai ai-pubmed"></i>
            </a>
            <a
              className="paper-link"
              href="https://github.com/verasls/walking_GRF_ACC"
            >
              <IonIcon className="paper-icon" icon={logoGithub} />
            </a>
          </div>
        </li>

        <li className="paper">
          <p className="paper-title">
            Accelerometry calibration in people with className II-III obesity:
            Energy expenditure prediction and physical activity intensity
            identification
          </p>
          <p className="paper-authors">
            Diniz-Sousa F, <strong>Veras L</strong>, Ribeiro JC, Boppre G,
            Devezas V, Santos-Sousa H, Preto J, Machado L, Vilas-Boas JP,
            Oliveira J, Fonseca H
          </p>
          <p className="paper-publication">
            <span className="paper-journal">Gait and Posture</span>, 2020
          </p>
          <div className="paper-links">
            <a
              className="paper-link"
              href="http://dx.doi.org/10.1016/j.gaitpost.2019.11.008"
            >
              <i className="paper-icon ai ai-doi"></i>
            </a>
            <a
              className="paper-link"
              href="https://pubmed.ncbi.nlm.nih.gov/31756665/"
            >
              <i className="paper-icon ai ai-pubmed"></i>
            </a>
            <a
              className="paper-link"
              href="https://github.com/verasls/EE_PAI_ACC_obese"
            >
              <IonIcon className="paper-icon" icon={logoGithub} />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}
