import styled from 'styled-components'

export const PageEmptyContainer = styled.div`
  display: flex;
  margin-top: 100px;
`

export const PlantContainer = styled.div`
  padding: 50px;
  margin-top: 200px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    margin: 0;
    margin-top: 200px;
    padding: 10px;
  }
`

export const TitleEmptyContainer = styled.div`
  padding: 50px;
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
    padding: 0;
    margin: 0;
    margin-top: 100px;
  }
`

export const CertificateContainer = styled.div`
  padding: 50px;
  padding: 50px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`
