import React from 'react'
import styled from 'styled-components';

interface Props {
    photo: string,
}
const Avatar = ({photo}: Props) => {

    return (
      <SectionAvatar photo={photo}>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
      </SectionAvatar>
    )

}

const SectionAvatar = styled.a`
  display: grid;
  width: 100%;
  height: 400px;
  background: var(--secondary-color);
  background: inherit;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  cursor: pointer;

  .slice{
    width: calc(100% + 0.5px);
    height: calc(100% + 0.5px);
    background-size: 800% 800%;
    position: relative;
    background-image: url('${(props: Props) => props.photo}')
  }

  .slice:nth-of-type(1) {
  -webkit-transition: all 1.43068929s;
  transition: all 1.43068929s;
  background-position: 0% 0%;
  -webkit-transform: translateX(7%) translateY(-13%) rotate(0.82898801turn);
          transform: translateX(7%) translateY(-13%) rotate(0.82898801turn);
   }

   .slice:nth-of-type(2) {
  -webkit-transition: all 1.78261449s;
  transition: all 1.78261449s;
  background-position: 14.28571429% 0%;
  -webkit-transform: translateX(-39px) translateY(-13.59506303px) rotate(0.00725402turn);
          transform: translateX(-39px) translateY(-13.59506303px) rotate(0.00725402turn);
}

 .slice:nth-of-type(3) {
  -webkit-transition: all 1.39286964s;
  transition: all 1.39286964s;
  background-position: 28.57142857% 0%;
  -webkit-transform: translateX(-150.86742645px) translateY(-14.82164221px) rotate(0.87017604turn);
          transform: translateX(-150.86742645px) translateY(-14.82164221px) rotate(0.87017604turn);
}

 .slice:nth-of-type(4) {
  -webkit-transition: all 1.0189675s;
  transition: all 1.0189675s;
  background-position: 42.85714286% 0%;
  -webkit-transform: translateX(227.75149481px) translateY(25.20317942px) rotate(0.79079263turn);
          transform: translateX(227.75149481px) translateY(25.20317942px) rotate(0.79079263turn);
}


 .slice:nth-of-type(5) {
  -webkit-transition: all 1.25744046s;
  transition: all 1.25744046s;
  background-position: 57.14285714% 0%;
  -webkit-transform: translateX(2.30083533px) translateY(-19.24189419px) rotate(0.73432876turn);
          transform: translateX(2.30083533px) translateY(-19.24189419px) rotate(0.73432876turn);
}


  .slice:nth-of-type(6) {
  -webkit-transition: all 1.31138765s;
  transition: all 1.31138765s;
  background-position: 71.42857143% 0%;
  -webkit-transform: translateX(11.43602622px) translateY(-2.15732069px) rotate(0.55447321turn);
          transform: translateX(11.43602622px) translateY(-2.15732069px) rotate(0.55447321turn);
}
 .slice:nth-of-type(7) {
  -webkit-transition: all 1.76785782s;
  transition: all 1.76785782s;
  background-position: 85.71428571% 0%;
  -webkit-transform: translateX(-40.25053598px) translateY(-2.06647122px) rotate(0.93773301turn);
          transform: translateX(-40.25053598px) translateY(-2.06647122px) rotate(0.93773301turn);
}
 .slice:nth-of-type(8) {
  -webkit-transition: all 1.59025861s;
  transition: all 1.59025861s;
  background-position: 100% 0%;
  -webkit-transform: translateX(-15.75069201px) translateY(8.14225918px) rotate(0.25320694turn);
          transform: translateX(-15.75069201px) translateY(8.14225918px) rotate(0.25320694turn);
}


 .slice:nth-of-type(9) {
  -webkit-transition: all 1.07384336s;
  transition: all 1.07384336s;
  background-position: 0% 14.28571429%;
  -webkit-transform: translateX(-13.65451742px) translateY(23.26472236px) rotate(0.28460644turn);
          transform: translateX(-13.65451742px) translateY(23.26472236px) rotate(0.28460644turn);
}
 .slice:nth-of-type(10) {
  -webkit-transition: all 1.72043884s;
  transition: all 1.72043884s;
  background-position: 14.28571429% 14.28571429%;
  -webkit-transform: translateX(-7.72877203px) translateY(-4.07909902px) rotate(0.60673363turn);
          transform: translateX(-7.72877203px) translateY(-4.07909902px) rotate(0.60673363turn);
}
 .slice:nth-of-type(11) {
  -webkit-transition: all 1.17552589s;
  transition: all 1.17552589s;
  background-position: 28.57142857% 14.28571429%;
  -webkit-transform: translateX(-31.25167376px) translateY(-5.20968795px) rotate(0.31556894turn);
          transform: translateX(-31.25167376px) translateY(-5.20968795px) rotate(0.31556894turn);
}
 .slice:nth-of-type(12) {
  -webkit-transition: all 1.63460727s;
  transition: all 1.63460727s;
  background-position: 42.85714286% 14.28571429%;
  -webkit-transform: translateX(-19.01868889px) translateY(-11.13867956px) rotate(0.01486123turn);
          transform: translateX(-19.01868889px) translateY(-11.13867956px) rotate(0.01486123turn);
}
 .slice:nth-of-type(13) {
  -webkit-transition: all 1.11917548s;
  transition: all 1.11917548s;
  background-position: 57.14285714% 14.28571429%;
  -webkit-transform: translateX(-35.31611893px) translateY(-21.64764306px) rotate(0.3644809turn);
          transform: translateX(-35.31611893px) translateY(-21.64764306px) rotate(0.3644809turn);
}
 .slice:nth-of-type(14) {
  -webkit-transition: all 1.4847919s;
  transition: all 1.4847919s;
  background-position: 71.42857143% 14.28571429%;
  -webkit-transform: translateX(42.72482154px) translateY(-2.39298412px) rotate(0.21587845turn);
          transform: translateX(42.72482154px) translateY(-2.39298412px) rotate(0.21587845turn);
}
 .slice:nth-of-type(15) {
  -webkit-transition: all 1.0234299s;
  transition: all 1.0234299s;
  background-position: 85.71428571% 14.28571429%;
  -webkit-transform: translateX(24.03532934px) translateY(16.97905917px) rotate(0.78884108turn);
          transform: translateX(24.03532934px) translateY(16.97905917px) rotate(0.78884108turn);
}
 .slice:nth-of-type(16) {
  -webkit-transition: all 1.26757876s;
  transition: all 1.26757876s;
  background-position: 100% 14.28571429%;
  -webkit-transform: translateX(-28.18814839px) translateY(-8.98191255px) rotate(0.0806232turn);
          transform: translateX(-28.18814839px) translateY(-8.98191255px) rotate(0.0806232turn);
}
 .slice:nth-of-type(17) {
  -webkit-transition: all 1.28596852s;
  transition: all 1.28596852s;
  background-position: 0% 28.57142857%;
  -webkit-transform: translateX(29.15867519px) translateY(-8.87860169px) rotate(0.72289433turn);
          transform: translateX(29.15867519px) translateY(-8.87860169px) rotate(0.72289433turn);
}
 .slice:nth-of-type(18) {
  -webkit-transition: all 1.84237388s;
  transition: all 1.84237388s;
  background-position: 14.28571429% 28.57142857%;
  -webkit-transform: translateX(12.83086308px) translateY(-21.9907375px) rotate(0.96628861turn);
          transform: translateX(12.83086308px) translateY(-21.9907375px) rotate(0.96628861turn);
}
 .slice:nth-of-type(19) {
  -webkit-transition: all 1.43334217s;
  transition: all 1.43334217s;
  background-position: 28.57142857% 28.57142857%;
  -webkit-transform: translateX(-18.86078315px) translateY(-0.53077722px) rotate(0.39581327turn);
          transform: translateX(-18.86078315px) translateY(-0.53077722px) rotate(0.39581327turn);
}
 .slice:nth-of-type(20) {
  -webkit-transition: all 1.48521106s;
  transition: all 1.48521106s;
  background-position: 42.85714286% 28.57142857%;
  -webkit-transform: translateX(45.83446887px) translateY(-15.20774525px) rotate(0.76790083turn);
          transform: translateX(45.83446887px) translateY(-15.20774525px) rotate(0.76790083turn);
}
 .slice:nth-of-type(21) {
  -webkit-transition: all 1.08900569s;
  transition: all 1.08900569s;
  background-position: 57.14285714% 28.57142857%;
  -webkit-transform: translateX(-6.99903088px) translateY(-9.29276252px) rotate(0.30492454turn);
          transform: translateX(-6.99903088px) translateY(-9.29276252px) rotate(0.30492454turn);
}
 .slice:nth-of-type(22) {
  -webkit-transition: all 1.38298994s;
  transition: all 1.38298994s;
  background-position: 71.42857143% 28.57142857%;
  -webkit-transform: translateX(20.12428788px) translateY(3.04757576px) rotate(0.05039527turn);
          transform: translateX(20.12428788px) translateY(3.04757576px) rotate(0.05039527turn);
}
 .slice:nth-of-type(23) {
  -webkit-transition: all 1.25472435s;
  transition: all 1.25472435s;
  background-position: 85.71428571% 28.57142857%;
  -webkit-transform: translateX(-39.06308011px) translateY(-7.12494251px) rotate(0.44640007turn);
          transform: translateX(-39.06308011px) translateY(-7.12494251px) rotate(0.44640007turn);
}
 .slice:nth-of-type(24) {
  -webkit-transition: all 1.24588348s;
  transition: all 1.24588348s;
  background-position: 100% 28.57142857%;
  -webkit-transform: translateX(-45.80453308px) translateY(-16.14803613px) rotate(0.90615448turn);
          transform: translateX(-45.80453308px) translateY(-16.14803613px) rotate(0.90615448turn);
}
 .slice:nth-of-type(25) {
  -webkit-transition: all 1.50780336s;
  transition: all 1.50780336s;
  background-position: 0% 42.85714286%;
  -webkit-transform: translateX(38.05667793px) translateY(-18.37267127px) rotate(0.54123965turn);
          transform: translateX(38.05667793px) translateY(-18.37267127px) rotate(0.54123965turn);
}
 .slice:nth-of-type(26) {
  -webkit-transition: all 1.07693132s;
  transition: all 1.07693132s;
  background-position: 14.28571429% 42.85714286%;
  -webkit-transform: translateX(-1.679398px) translateY(-11.50914326px) rotate(0.38572375turn);
          transform: translateX(-1.679398px) translateY(-11.50914326px) rotate(0.38572375turn);
}
 .slice:nth-of-type(27) {
  -webkit-transition: all 1.75704311s;
  transition: all 1.75704311s;
  background-position: 28.57142857% 42.85714286%;
  -webkit-transform: translateX(-48.79230706px) translateY(-13.72767698px) rotate(0.68978876turn);
          transform: translateX(-48.79230706px) translateY(-13.72767698px) rotate(0.68978876turn);
}
 .slice:nth-of-type(28) {
  -webkit-transition: all 1.77572397s;
  transition: all 1.77572397s;
  background-position: 42.85714286% 42.85714286%;
  -webkit-transform: translateX(41.10670831px) translateY(-14.59346351px) rotate(0.74298112turn);
          transform: translateX(41.10670831px) translateY(-14.59346351px) rotate(0.74298112turn);
}
 .slice:nth-of-type(29) {
  -webkit-transition: all 1.79315105s;
  transition: all 1.79315105s;
  background-position: 57.14285714% 42.85714286%;
  -webkit-transform: translateX(-45.02540261px) translateY(19.46186507px) rotate(0.60974365turn);
          transform: translateX(-45.02540261px) translateY(19.46186507px) rotate(0.60974365turn);
}
 .slice:nth-of-type(30) {
  -webkit-transition: all 1.6660733s;
  transition: all 1.6660733s;
  background-position: 71.42857143% 42.85714286%;
  -webkit-transform: translateX(21.58688911px) translateY(11.04745654px) rotate(0.91777741turn);
          transform: translateX(21.58688911px) translateY(11.04745654px) rotate(0.91777741turn);
}
 .slice:nth-of-type(31) {
  -webkit-transition: all 1.00641183s;
  transition: all 1.00641183s;
  background-position: 85.71428571% 42.85714286%;
  -webkit-transform: translateX(19.48122208px) translateY(-19.21135974px) rotate(0.73545671turn);
          transform: translateX(19.48122208px) translateY(-19.21135974px) rotate(0.73545671turn);
}
 .slice:nth-of-type(32) {
  -webkit-transition: all 1.63287103s;
  transition: all 1.63287103s;
  background-position: 100% 42.85714286%;
  -webkit-transform: translateX(-3.42953906px) translateY(18.69617129px) rotate(0.09697708turn);
          transform: translateX(-3.42953906px) translateY(18.69617129px) rotate(0.09697708turn);
}
 .slice:nth-of-type(33) {
  -webkit-transition: all 1.13538315s;
  transition: all 1.13538315s;
  background-position: 0% 57.14285714%;
  -webkit-transform: translateX(-17.94649394px) translateY(6.11802898px) rotate(0.62601011turn);
          transform: translateX(-17.94649394px) translateY(6.11802898px) rotate(0.62601011turn);
}
 .slice:nth-of-type(34) {
  -webkit-transition: all 1.81131481s;
  transition: all 1.81131481s;
  background-position: 14.28571429% 57.14285714%;
  -webkit-transform: translateX(13.73996496px) translateY(-5.27278162px) rotate(0.30458767turn);
          transform: translateX(13.73996496px) translateY(-5.27278162px) rotate(0.30458767turn);
}
 .slice:nth-of-type(35) {
  -webkit-transition: all 1.39790312s;
  transition: all 1.39790312s;
  background-position: 28.57142857% 57.14285714%;
  -webkit-transform: translateX(22.05614524px) translateY(4.79378265px) rotate(0.75675951turn);
          transform: translateX(22.05614524px) translateY(4.79378265px) rotate(0.75675951turn);
}
 .slice:nth-of-type(36) {
  -webkit-transition: all 1.51988612s;
  transition: all 1.51988612s;
  background-position: 42.85714286% 57.14285714%;
  -webkit-transform: translateX(26.92260147px) translateY(16.85448642px) rotate(0.90106081turn);
          transform: translateX(26.92260147px) translateY(16.85448642px) rotate(0.90106081turn);
}
 .slice:nth-of-type(37) {
  -webkit-transition: all 1.91064726s;
  transition: all 1.91064726s;
  background-position: 57.14285714% 57.14285714%;
  -webkit-transform: translateX(-19.19413501px) translateY(10.63654464px) rotate(0.93718589turn);
          transform: translateX(-19.19413501px) translateY(10.63654464px) rotate(0.93718589turn);
}
 .slice:nth-of-type(38) {
  -webkit-transition: all 1.63440645s;
  transition: all 1.63440645s;
  background-position: 71.42857143% 57.14285714%;
  -webkit-transform: translateX(-1.83191044px) translateY(6.18376896px) rotate(0.35581073turn);
          transform: translateX(-1.83191044px) translateY(6.18376896px) rotate(0.35581073turn);
}
 .slice:nth-of-type(39) {
  -webkit-transition: all 1.82360233s;
  transition: all 1.82360233s;
  background-position: 85.71428571% 57.14285714%;
  -webkit-transform: translateX(-32.36065335px) translateY(17.56521552px) rotate(0.09249126turn);
          transform: translateX(-32.36065335px) translateY(17.56521552px) rotate(0.09249126turn);
}
 .slice:nth-of-type(40) {
  -webkit-transition: all 1.42342706s;
  transition: all 1.42342706s;
  background-position: 100% 57.14285714%;
  -webkit-transform: translateX(24.94864185px) translateY(-2.74117807px) rotate(0.70569938turn);
          transform: translateX(24.94864185px) translateY(-2.74117807px) rotate(0.70569938turn);
}
 .slice:nth-of-type(41) {
  -webkit-transition: all 1.98623779s;
  transition: all 1.98623779s;
  background-position: 0% 71.42857143%;
  -webkit-transform: translateX(-0.80266943px) translateY(-15.75829576px) rotate(0.93317792turn);
          transform: translateX(-0.80266943px) translateY(-15.75829576px) rotate(0.93317792turn);
}
 .slice:nth-of-type(42) {
  -webkit-transition: all 1.59416501s;
  transition: all 1.59416501s;
  background-position: 14.28571429% 71.42857143%;
  -webkit-transform: translateX(39.12158696px) translateY(22.10132212px) rotate(0.07710243turn);
          transform: translateX(39.12158696px) translateY(22.10132212px) rotate(0.07710243turn);
}
 .slice:nth-of-type(43) {
  -webkit-transition: all 1.16140149s;
  transition: all 1.16140149s;
  background-position: 28.57142857% 71.42857143%;
  -webkit-transform: translateX(7.67122103px) translateY(14.81286551px) rotate(0.64509058turn);
          transform: translateX(7.67122103px) translateY(14.81286551px) rotate(0.64509058turn);
}
 .slice:nth-of-type(44) {
  -webkit-transition: all 1.67382619s;
  transition: all 1.67382619s;
  background-position: 42.85714286% 71.42857143%;
  -webkit-transform: translateX(-8.80534201px) translateY(16.31819658px) rotate(0.25803303turn);
          transform: translateX(-8.80534201px) translateY(16.31819658px) rotate(0.25803303turn);
}
 .slice:nth-of-type(45) {
  -webkit-transition: all 1.37197039s;
  transition: all 1.37197039s;
  background-position: 57.14285714% 71.42857143%;
  -webkit-transform: translateX(-32.50592714px) translateY(-1.65575732px) rotate(0.74361132turn);
          transform: translateX(-32.50592714px) translateY(-1.65575732px) rotate(0.74361132turn);
}
 .slice:nth-of-type(46) {
  -webkit-transition: all 1.62140171s;
  transition: all 1.62140171s;
  background-position: 71.42857143% 71.42857143%;
  -webkit-transform: translateX(-2.29835085px) translateY(24.71596067px) rotate(0.92945318turn);
          transform: translateX(-2.29835085px) translateY(24.71596067px) rotate(0.92945318turn);
}
 .slice:nth-of-type(47) {
  -webkit-transition: all 1.75055979s;
  transition: all 1.75055979s;
  background-position: 85.71428571% 71.42857143%;
  -webkit-transform: translateX(24.65214221px) translateY(7.51492887px) rotate(0.93272757turn);
          transform: translateX(24.65214221px) translateY(7.51492887px) rotate(0.93272757turn);
}
 .slice:nth-of-type(48) {
  -webkit-transition: all 1.47685852s;
  transition: all 1.47685852s;
  background-position: 100% 71.42857143%;
  -webkit-transform: translateX(-49.88929533px) translateY(21.60190094px) rotate(0.46173305turn);
          transform: translateX(-49.88929533px) translateY(21.60190094px) rotate(0.46173305turn);
}
 .slice:nth-of-type(49) {
  -webkit-transition: all 1.99540685s;
  transition: all 1.99540685s;
  background-position: 0% 85.71428571%;
  -webkit-transform: translateX(-32.65459055px) translateY(-20.92975512px) rotate(0.68121047turn);
          transform: translateX(-32.65459055px) translateY(-20.92975512px) rotate(0.68121047turn);
}
 .slice:nth-of-type(50) {
  -webkit-transition: all 1.36067473s;
  transition: all 1.36067473s;
  background-position: 14.28571429% 85.71428571%;
  -webkit-transform: translateX(-21.75661649px) translateY(12.08470859px) rotate(0.70148984turn);
          transform: translateX(-21.75661649px) translateY(12.08470859px) rotate(0.70148984turn);
}
 .slice:nth-of-type(51) {
  -webkit-transition: all 1.04062069s;
  transition: all 1.04062069s;
  background-position: 28.57142857% 85.71428571%;
  -webkit-transform: translateX(37.47443436px) translateY(22.58543461px) rotate(0.69192953turn);
          transform: translateX(37.47443436px) translateY(22.58543461px) rotate(0.69192953turn);
}
 .slice:nth-of-type(52) {
  -webkit-transition: all 1.36666693s;
  transition: all 1.36666693s;
  background-position: 42.85714286% 85.71428571%;
  -webkit-transform: translateX(-35.72948238px) translateY(-19.38615204px) rotate(0.05782476turn);
          transform: translateX(-35.72948238px) translateY(-19.38615204px) rotate(0.05782476turn);
}
 .slice:nth-of-type(53) {
  -webkit-transition: all 1.52130039s;
  transition: all 1.52130039s;
  background-position: 57.14285714% 85.71428571%;
  -webkit-transform: translateX(23.57068322px) translateY(19.37091858px) rotate(0.42542698turn);
          transform: translateX(23.57068322px) translateY(19.37091858px) rotate(0.42542698turn);
}
 .slice:nth-of-type(54) {
  -webkit-transition: all 1.44130421s;
  transition: all 1.44130421s;
  background-position: 71.42857143% 85.71428571%;
  -webkit-transform: translateX(-9.67456721px) translateY(19.85406248px) rotate(0.906408turn);
          transform: translateX(-9.67456721px) translateY(19.85406248px) rotate(0.906408turn);
}
 .slice:nth-of-type(55) {
  -webkit-transition: all 1.20596519s;
  transition: all 1.20596519s;
  background-position: 85.71428571% 85.71428571%;
  -webkit-transform: translateX(-21.22626802px) translateY(7.9309394px) rotate(0.73771994turn);
          transform: translateX(-21.22626802px) translateY(7.9309394px) rotate(0.73771994turn);
}
 .slice:nth-of-type(56) {
  -webkit-transition: all 1.49251907s;
  transition: all 1.49251907s;
  background-position: 100% 85.71428571%;
  -webkit-transform: translateX(20.45054988px) translateY(8.82228258px) rotate(0.8934381turn);
          transform: translateX(20.45054988px) translateY(8.82228258px) rotate(0.8934381turn);
}
 .slice:nth-of-type(57) {
  -webkit-transition: all 1.9930081s;
  transition: all 1.9930081s;
  background-position: 0% 100%;
  -webkit-transform: translateX(34.91671998px) translateY(-21.55815831px) rotate(0.09572468turn);
          transform: translateX(34.91671998px) translateY(-21.55815831px) rotate(0.09572468turn);
}
 .slice:nth-of-type(58) {
  -webkit-transition: all 1.17992415s;
  transition: all 1.17992415s;
  background-position: 14.28571429% 100%;
  -webkit-transform: translateX(10.32380671px) translateY(10.87871799px) rotate(0.36734825turn);
          transform: translateX(10.32380671px) translateY(10.87871799px) rotate(0.36734825turn);
}
 .slice:nth-of-type(59) {
  -webkit-transition: all 1.24100623s;
  transition: all 1.24100623s;
  background-position: 28.57142857% 100%;
  -webkit-transform: translateX(7.76311087px) translateY(-15.3485738px) rotate(0.93887273turn);
          transform: translateX(7.76311087px) translateY(-15.3485738px) rotate(0.93887273turn);
}
 .slice:nth-of-type(60) {
  -webkit-transition: all 1.330476s;
  transition: all 1.330476s;
  background-position: 42.85714286% 100%;
  -webkit-transform: translateX(22.63760703px) translateY(-15.11526778px) rotate(0.41116069turn);
          transform: translateX(22.63760703px) translateY(-15.11526778px) rotate(0.41116069turn);
}
 .slice:nth-of-type(61) {
  -webkit-transition: all 1.64740813s;
  transition: all 1.64740813s;
  background-position: 57.14285714% 100%;
  -webkit-transform: translateX(-19.59210033px) translateY(-23.24209285px) rotate(0.05447129turn);
          transform: translateX(-19.59210033px) translateY(-23.24209285px) rotate(0.05447129turn);
}
 .slice:nth-of-type(62) {
  -webkit-transition: all 1.15980448s;
  transition: all 1.15980448s;
  background-position: 71.42857143% 100%;
  -webkit-transform: translateX(-40.20659644px) translateY(17.57590119px) rotate(0.80523027turn);
          transform: translateX(-40.20659644px) translateY(17.57590119px) rotate(0.80523027turn);
}
 .slice:nth-of-type(63) {
  -webkit-transition: all 1.41453761s;
  transition: all 1.41453761s;
  background-position: 85.71428571% 100%;
  -webkit-transform: translateX(-34.2887694px) translateY(15.26041357px) rotate(0.7218682turn);
          transform: translateX(-34.2887694px) translateY(15.26041357px) rotate(0.7218682turn);
}
 .slice:nth-of-type(64) {
  -webkit-transition: all 1.02065461s;
  transition: all 1.02065461s;
  background-position: 100% 100%;
  -webkit-transform: translateX(48.69019096px) translateY(0.96988373px) rotate(0.53744351turn);
          transform: translateX(48.69019096px) translateY(0.96988373px) rotate(0.53744351turn);
}  

 &:hover .slice {
  -webkit-transform: translate(0, 0) rotate(0);
          transform: translate(0, 0) rotate(0);
}
`;



export default Avatar
