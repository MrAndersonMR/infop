import React from 'react';
import Ad from '../Ad/Ad';
import './Gallery.css';
import PropTypes from 'prop-types';


/*const Gallery = () => (
  <div>
    Gallery Component
  </div>
);

Gallery.propTypes = {};

Gallery.defaultProps = {};*/

function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var allImages = [];

const adList = [
  {source: 'https://mrandersonmr.github.io/infop/images/drogariaDaSerra.png', source2: 'https://mrandersonmr.github.io/infop/images/wgBorracharia.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/toninhoSeguros.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/nagimaq.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/casaDeCarnesCentral.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/chaveDeOuro.png', source2: 'https://mrandersonmr.github.io/infop/images/sacolãoCentral.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/casaDasFrutas.png', source2: 'https://mrandersonmr.github.io/infop/images/casaDeCarnesSantaRita.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/mateusDiesel.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/carWashCapricho.png', source2: 'https://mrandersonmr.github.io/infop/images/estacionamentoTiradentes.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/galpãoDasBaterias.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/casaRamos.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/madereiraSãoGeraldo.png', source2: 'https://mrandersonmr.github.io/infop/images/didi.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/sosCelulares.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/goCell.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/horaExtra.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/mercadoCebolinha.png', source2: 'https://mrandersonmr.github.io/infop/images/padariaBragança.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/irmãosAmino.png', source2: 'https://mrandersonmr.github.io/infop/images/nogueiraLanches.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/padariaFamíliaMarquete.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/julianaCarmoDeSouza.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/drogariaSãoCamilo.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/psicólogaMirelleSantos.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/casaDaMadeira.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/chinegoChineguinho.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/mãosArteiras.png', source2: 'https://mrandersonmr.github.io/infop/images/lojaDaNúbia.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/mecânicaCarneirinho.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/emplacarVeículos.png', source2: 'https://mrandersonmr.github.io/infop/images/marcelosMotos.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/goldim.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/hortifrutiMercadoSamuel.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/armazémDoFrangoForteFrios.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/tupinambás.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/imobiliáriaCasaLeite2.png'}




  /*{source: 'https://mrandersonmr.github.io/infop/images/armazémDoFrangoForteFrios.png'},
  //{source: '/images/arthurPet.png', source2: '/images/autoElétrica12Volts.png'},
  //{source: '/images/autoElétrica12Volts.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/bomborello.png', source2: 'https://mrandersonmr.github.io/infop/images/casaDeCarnesSantaRita.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/casaDaMadeira.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/casaDeCarnesCentral.png'},
  //{source: '/images/casaDeCarnesSantaRita.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/casaDosParafusosMercdoPais&Filhos.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/casaRamos.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/chaveDeOuro.png', source2: 'https://mrandersonmr.github.io/infop/images/sacolãoCentral.png'},
  //{source: '/images/didi.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/drogariaSãoCamilo.png'},
  //{source: '/images/estacionamentoTiradentes.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/galpãoDasBaterias.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/goldim.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/horaExtra.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/hortifrutiMercadoSamuel.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/imobiliáriaCasaLeite.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/joséMariaBorracheiro.png', source2: 'https://mrandersonmr.github.io/infop/images/autoElétrica12Volts.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/julianaCarmoDeSouza.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/madereiraSãoGeraldo.png', source2: 'https://mrandersonmr.github.io/infop/images/didi.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/mãosArteiras.png', source2: 'https://mrandersonmr.github.io/infop/images/arthurPet.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/mateusDiesel.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/mecânicaCarneirinho.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/mercadoCebolinha.png', source2: 'https://mrandersonmr.github.io/infop/images/padariaBragança.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/nagimaq.png'},
  //{source: '/images/nogueiraLanches.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/raffa.png'},
  //{source: '/images/sacolãoCentral.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/santaCecilia.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/sjnAntenas.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/sosCelulares.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/terraRosa.png', source2: 'https://mrandersonmr.github.io/infop/images/nogueiraLanches.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/tonhoSeguros.png', source2: 'https://mrandersonmr.github.io/infop/images/estacionamentoTiradentes.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/tupinambás.png'},
  {source: 'https://mrandersonmr.github.io/infop/images/unipac.png'}
  {source: 'https://placekitten.com/', width: getRandomSize(200, 400), height: getRandomSize(200, 400)}*/
]

/*export default function Gallery () {

    return <ul id='photos'>
      {adList.map(ad => <Ad source={ad.source} width={ad.width} height={ad.height} />)}
    </ul>
    //'<img src="https://placekitten.com/' + width + '/' + height + '" alt="pretty kitty">';
    
  //photos.innerHTML = allImages

  //return allImages

  /*return (
    <ul>
      {adList.map(ad => <Ad title={ad.title} />)}
    </ul>
  )*/
//}

export default function Gallery () {
  return <ul id='photos'>
    {adList.map(ad => <Ad source={ad.source} source2={ad.source2}/>)}
  </ul>

  /*if(adList.map.hasOwnProperty('source2')) {
    return <ul id='photos' style='columns: 2; -webkit-columns: 2; -moz-columns: 2;'>
      {adList.map(ad => <Ad source={ad.source} />), adList.map(ad => <Ad source={ad.source2} />)}
    </ul>
  } else {
    return <ul id='photos'>
      {adList.map(ad => <Ad source={ad.source} />)}
    </ul>
  }*/
  
}