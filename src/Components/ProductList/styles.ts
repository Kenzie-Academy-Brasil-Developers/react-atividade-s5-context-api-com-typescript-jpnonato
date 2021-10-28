import styled from "styled-components";


export const CardMain = styled.div`
    width: 125px;
    padding: 10px;
    height: 185px;
    background-color: #485164;
    color: white;
    box-shadow: 0 2px 4px black;
    border-radius: 10px;
    margin: 5px 0px 5px 0px;

    img{
        width: 100px;
        height: 80px;
        border-radius: 4px;
    }

    p{
        color: #f3870c ;
        margin: 10px;
    }

    .price{
        margin: 0px 5px 5px 5px;
    }

    @media screen and (min-width: 550px){

        width: 200px;
        height: 250px;
        margin: 5px;

        img{
            width: 175px;
            height: 135px;
        }

    }
`

export const Sec = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75vw;
   

    @media screen and (min-width: 550px){
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    

`

export const Countainer = styled.div`
  
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  
    

`
