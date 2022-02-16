import React, {useEffect, useState} from 'react';
import {MainStyle, StyleH1, CntnrIndicadores, Indicador, ValorIndicador, UnidadIndicador} from '../styled/style'

const Countdown = () => {

  const fecha = new Date(2022, 3, 1, 12, 0, 0)

  const [dias, setDias] = useState(0)
  const [horas, setHoras] = useState(0)
  const [minutos, setMinutos] = useState(0)
  const [segundos, setSegundos] = useState(0)

  useEffect(()=>{
      
    console.log(`El contador termina en ${fecha}`);
    
    const actualizar = setInterval(() => {

      const ahora = Date.now()
      const diferencia = fecha - ahora;

      const difDias = diferencia/(1000*60*60*24)
      const difHoras = (difDias - Math.floor(difDias))*24
      const difMinutos = (difHoras - Math.floor(difHoras))*60
      const difSegundos = (difMinutos - Math.floor(difMinutos))*60

      setDias(difDias)
      setHoras(difHoras)
      setMinutos(difMinutos)
      setSegundos(difSegundos)

    }, 1000);

    return  () => clearInterval(actualizar)

  }, [])

  const configurarFormato = (num) =>{

    num = Math.floor(num)
    let respuesta = ""

    if (num<10){
        respuesta = "0" + String(num)
    } else{
        respuesta = String(num)
    }

    return respuesta

  }

  return (
    <MainStyle>
        <StyleH1>We're launching soon</StyleH1>
        <CntnrIndicadores>
            <Indicador>
              <ValorIndicador>{configurarFormato(dias)}</ValorIndicador>
              <UnidadIndicador>days</UnidadIndicador>
            </Indicador>
            <Indicador>
              <ValorIndicador>{configurarFormato(horas)}</ValorIndicador>
              <UnidadIndicador>hours</UnidadIndicador>
            </Indicador>
            <Indicador>
              <ValorIndicador>{configurarFormato(minutos)}</ValorIndicador>
              <UnidadIndicador>minutes</UnidadIndicador>
            </Indicador>
            <Indicador>
              <ValorIndicador>{configurarFormato(segundos)}</ValorIndicador>
              <UnidadIndicador>seconds</UnidadIndicador>
            </Indicador>
        </CntnrIndicadores>
    </MainStyle>
  )
}

export default Countdown