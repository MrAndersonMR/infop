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
  {source: '/images/açougueSãoJoaquim.png'},
  {source: '/images/armazémDoFrangoForteFrios.png'},
  {source: '/images/arthurPet.png'},
  {source: '/images/autoElétrica12Volts.png'},
  {source: '/images/bomborello.png'},
  {source: '/images/casaDaMadeira.png'},
  {source: '/images/casaDeCarnesCentral.png'},
  {source: '/images/casaDeCarnesSantaRita.png'},
  {source: '/images/casaDosParafusosMercdoPais&Filhos.png'},
  {source: '/images/casaRamos.png'},
  {source: '/images/chaveDeOuro.png'},
  {source: '/images/didi.png'},
  {source: '/images/drogariaSãoCamilo.png'},
  {source: '/images/estacionamentoTiradentes.png'},
  {source: '/images/galpãoDasBaterias.png'},
  {source: '/images/goldim.png'},
  {source: '/images/horaExtra.png'},
  {source: '/images/hortifrutiMercadoSamuel.png'},
  {source: '/images/imobiliáriaCasaLeite.png'},
  {source: '/images/joséMariaBorracheiro.png'},
  {source: '/images/julianaCarmoDeSouza.png'},
  {source: '/images/madereiraSãoGeraldo.png'},
  {source: '/images/mãosArteiras.png'},
  {source: '/images/mateusDiesel.png'},
  {source: '/images/mecânicaCarneirinho.png'},
  {source: '/images/mercadoCebolinha.png'},
  {source: '/images/nagimaq.png'},
  {source: '/images/nogueiraLanches.png'},
  {source: '/images/raffa.png'},
  {source: '/images/sacolãoCentral.png'},
  {source: '/images/santaCecilia.png'},
  {source: '/images/sjnAntenas.png'},
  {source: '/images/sosCelulares.png'},
  {source: '/images/terraRosa.png'},
  {source: '/images/tonhoSeguros.png'},
  {source: '/images/tupinambás.png'},
  {source: '/images/unipac.png'}
  /*{source: 'https://placekitten.com/', width: getRandomSize(200, 400), height: getRandomSize(200, 400)}*/
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
    {adList.map(ad => <Ad source={ad.source} />)}
  </ul>
}