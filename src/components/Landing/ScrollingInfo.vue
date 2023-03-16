<template>
  <audio src="/src/assets/star-wars-theme.ogg" autoplay loop autobuffer></audio>

  <p id="start">Há pouco tempo, num site mineiro bem perto&hellip;</p>

  <h1>STAR <br />UAIS<sub>Tudo sobre Star Wars!</sub></h1>

  <div id="titles">
    <div id="titlecontent">
      <p class="center">
        EPISODE IV<br />
        UMA NOVA ESPERANÇA PARA FÃS DE STAR WARS
      </p>

      <p>É um período de muita informação.</p>

      <p>
        Aqui você encontrará o maior acervo de informações sobre a sequência de filmes originais de
        Star Wars.
      </p>

      <p>
        Uma lista com os todos os detalhes de cada filme lançado, como diretor, data de lançamento e
        texto de abertura!
      </p>

      <p>
        Também é possível ter acesso a uma lista com todos os personagens que apareceram nos 6
        filmes e suas características individuais.
      </p>

      <p>
        Além disso, ainda tem muito mais, como a lista de planetas, espécies, naves e veículos. Tudo
        isso bem detalhado para quem é fã de verdade!
      </p>

      <p>Está esperando o quê pra se cadastrar sô?</p>

      <p class="center">Venha para o lado da força, jovem Padawan!</p>

      <p>
        O cadastro é bem simples e tá aqui do seu ladinho, na mão, não precisa nem de força uai!
      </p>
    </div>
  </div>
</template>

<style scoped>
/* 
** ALL CREDIT GOES TO 
** Craig Buckler
** http://www.sitepoint.com/css3-starwars-scrolling-text/
*/

p#start {
  position: relative;
  width: 16em;
  font-size: 200%;
  font-weight: 400;
  margin: 20% auto;
  color: #4ee;
  opacity: 0;
  z-index: 1;
  -webkit-animation: intro 5s ease-out;
  -moz-animation: intro 5s ease-out;
  -ms-animation: intro 5s ease-out;
  -o-animation: intro 5s ease-out;
  animation: intro 5s ease-out;
}

@-webkit-keyframes intro {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes intro {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-ms-keyframes intro {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes intro {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes intro {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

h1 {
  position: absolute;
  width: 2.6em;
  left: 50%;
  top: 25%;
  font-size: 10em;
  text-align: center;
  margin-left: -1.3em;
  line-height: 0.8em;
  letter-spacing: -0.05em;
  color: #000;
  text-shadow: -2px -2px 0 #ff6, 2px -2px 0 #ff6, -2px 2px 0 #ff6, 2px 2px 0 #ff6;
  opacity: 0;
  z-index: 1;
  -webkit-animation: logo 5s ease-out 5.5s;
  -moz-animation: logo 5s ease-out 5.5s;
  -ms-animation: logo 5s ease-out 5.5s;
  -o-animation: logo 5s ease-out 5.5s;
  animation: logo 5s ease-out 5.5s;
}

h1 sub {
  display: block;
  font-size: 0.3em;
  letter-spacing: 0;
  line-height: 0.8em;
}

@-webkit-keyframes logo {
  0% {
    -webkit-transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.1);
    opacity: 0;
  }
}

@-moz-keyframes logo {
  0% {
    -moz-transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    -moz-transform: scale(0.1);
    opacity: 0;
  }
}

@-ms-keyframes logo {
  0% {
    -ms-transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    -ms-transform: scale(0.1);
    opacity: 0;
  }
}

@-o-keyframes logo {
  0% {
    -o-transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    -o-transform: scale(0.1);
    opacity: 0;
  }
}

@keyframes logo {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(0.1);
    opacity: 0;
  }
}

/* the interesting 3D scrolling stuff */
#titles {
  position: absolute;
  width: 18em;
  height: 50em;
  bottom: 0;
  left: 50%;
  margin-left: -9em;
  font-size: 350%;
  text-align: justify;
  overflow: hidden;
  -webkit-transform-origin: 50% 100%;
  -moz-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  -o-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transform: perspective(350px) rotateX(25deg);
  -moz-transform: perspective(350px) rotateX(25deg);
  -ms-transform: perspective(350px) rotateX(25deg);
  -o-transform: perspective(350px) rotateX(25deg);
  transform: perspective(350px) rotateX(25deg);
}

#titles:after {
  position: absolute;
  content: ' ';
  left: 0;
  right: 0;
  top: 0;
  bottom: 60%;
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 1) 0%, transparent 100%);
  background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 1) 0%, transparent 100%);
  background-image: -ms-linear-gradient(top, rgba(0, 0, 0, 1) 0%, transparent 100%);
  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 1) 0%, transparent 100%);
  /* background-image: linear-gradient(top, rgba(0, 0, 0, 1) 0%, transparent 100%); */
  pointer-events: none;
}

#titles p {
  text-align: justify;
  margin: 0.8em 0;
}

#titles p.center {
  text-align: center;
}

#titles a {
  color: #ff6;
  text-decoration: underline;
}

#titlecontent {
  position: absolute;
  top: 100%;
  -webkit-animation: scroll 40s linear 7s infinite;
  -moz-animation: scroll 40s linear 7s infinite;
  -ms-animation: scroll 40s linear 7s infinite;
  -o-animation: scroll 40s linear 7s infinite;
  animation: scroll 40s linear 7s infinite;
}

/* animation */
@-webkit-keyframes scroll {
  0% {
    top: 100%;
  }
  100% {
    top: -20%;
  }
}

@-moz-keyframes scroll {
  0% {
    top: 100%;
  }
  100% {
    top: -20%;
  }
}

@-ms-keyframes scroll {
  0% {
    top: 100%;
  }
  100% {
    top: -20%;
  }
}

@-o-keyframes scroll {
  0% {
    top: 100%;
  }
  100% {
    top: -20%;
  }
}

@keyframes scroll {
  0% {
    top: 100%;
  }
  100% {
    top: -20%;
  }
}
</style>
