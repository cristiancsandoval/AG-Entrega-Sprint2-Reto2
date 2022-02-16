import styled from 'styled-components';

/*Variables de estilos sección principal*/
export const MainStyle = styled.main`
    width:100%;
    height: 100vmin;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyleH1 = styled.h1`
    font-size: 21px;
    margin-bottom: 80px;
    color: hsl(0, 0%, 100%);
    text-transform: uppercase;
    letter-spacing: 10px;

    @media screen and (max-width:600px){
        margin: 90px 5px;
        font-size: 17px;
        width: 100%;
        text-align: center;
    }

`

export const CntnrIndicadores = styled.div`
    width: 100%;
    margin-bottom: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:600px){
        justify-content: space-around;
    }

`

export const Indicador = styled.div`
    width: 120px;
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before{
        content: "";
        width: 100%;
        height: 55px;
        background-color: hsl(236, 21%, 26%);
        opacity: 70%;
        position: absolute;
        top: 20px;
        z-index: -1;
        border-radius: 8px 8px 4px 4px;
        box-shadow: 0px -1px 0px 1px hsl(234, 17%, 12%);
    }

    &::after{
        content: "";
        width: 100%;
        height: 55px;
        background-color:hsl(236, 21%, 26%);
        position: absolute;
        top: 75px;
        z-index: -1;
        border-radius: 4px 4px 8px 8px;
        box-shadow: 0px 8px 0px 1px hsl(234, 17%, 12%);
    }

    @media screen and (max-width:600px){
        width:20%;
        margin: 0;
    }

`

export const ValorIndicador = styled.h2`
    font-size: 70px;
    margin: 30px 0;
    color: hsl(345, 95%, 68%);
    opacity: 80%;

    @media screen and (max-width:480px){
        font-size: 60px;
    }

`

export const UnidadIndicador = styled.p`
    font-size: 14px;
    text-transform: uppercase;
    color: hsl(237, 18%, 59%);
`

/*Variables de estilos sección Footer*/
export const FooterStyle = styled.footer`
    width: 100%;
    height: 197px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    position: absolute;
    bottom: 0;
    background-image: url("./images/pattern-hills.svg");
    background-position: left;
`

export const IconStyle = styled.img`
    margin: 40px 15px;
`