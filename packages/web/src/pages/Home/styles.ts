import styled from 'styled-components'

export const Container = styled.div`
  header {
    background-color: rgba(255, 255, 255, 0.98);
    box-shadow: 0px 7px 17px 0px rgb(0 0 0 / 10%);
    transition: background-color 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s;
    padding: 15px 0px 15px 0px;
    z-index: 100;
    text-align: center;
  }
  .loading {
    text-align: center;
    margin: 20px 0;
    width: 100%;
  }
`
export const FormCalculator = styled.form`
  background: #5c60f5;
  width: 80%;
  max-width: 800px;
  height: 129px;
  padding: 0 20px;
  border-radius: 8px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const FormCalculatorRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  p {
    font-size: 13px;
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 1px;
  }
  input {
    background: #ffffff;
    border: none;
    border-radius: 15px;
    padding: 9px 15px;
    text-align: right;
  }
  button {
    background: #fbc531;
    border-radius: 15px;
    padding: 9px 20px;
    border: none;
    font-weight: 600;
    margin-top: 18px;
    cursor: pointer;
    font-size: 13px;
  }
`
export const ChartContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
`
export const PriceContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  margin-bottom: 20px;
  text-align: center;
  padding: 25px 0;
  p {
    margin-bottom: 5px;
  }
  h4 {
    font-size: 40px;
    color: #5c60f5;
  }
`
