import React, { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import { api } from '@hero-project/axios-config'

import { formatCurrency } from '../../util/formatCurrency'

import {
  Container,
  FormCalculator,
  FormCalculatorRow,
  ChartContainer,
  PriceContainer
} from './styles'

import LineChart from '../../components/LineChart'

const App: React.FC = () => {
  const [investmentDate, setInvestmentDate] = useState()
  const [cdbRate, setCdbRate] = useState()
  const [currentDate, setCurrentDate] = useState()

  const [getLoading, setLoading] = useState(false)
  const [getCdbPrices, setCdbPrices] = useState([])

  const handleSubmit = async event => {
    if (event) {
      event.preventDefault()
      setLoading(true)
      try {
        const fetchCdbUnitPrices = await api.post('/cdb-unit-prices', {
          investmentDate,
          cdbRate: cdbRate.replace(',', '.'),
          currentDate
        })
        const { cdbPrices } = fetchCdbUnitPrices.data

        setCdbPrices(cdbPrices)
      } catch (err) { }
      setLoading(false)
    }
  }

  return (
    <Container>
      <header>
        <img
          src="https://s3.eu-central-1.amazonaws.com/eu.peopleforce.io/variants/q5viw0kzxjlo1m6kytdc6b34x0jp/17c95df4685b809748bd5bf9cd2af1eab62a29b20eabbf2a9b606a9adf2af86e?response-content-disposition=inline%3B%20filename%3D%22hero99-aberto.png%22%3B%20filename%2A%3DUTF-8%27%27hero99-aberto.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4L5NWT3XV5H4MYNH%2F20220615%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220615T012056Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=2da0560935a9208a211432c40677b33d9709c62635ed8bc98662fc027920914e"
          alt="Hero99 logomarca"
          title="Hero99 logomarca"
          width="180"
        />
      </header>

      <FormCalculator onSubmit={handleSubmit}>
        <FormCalculatorRow>
          <p>Data Inicial</p>
          <input
            type="date"
            name="investmentDate"
            value={investmentDate}
            onChange={event => setInvestmentDate(event.target.value)}
            required
          />
        </FormCalculatorRow>
        <FormCalculatorRow>
          <p>Data Atual</p>
          <input
            type="date"
            name="currentDate"
            value={currentDate}
            onChange={event => setCurrentDate(event.target.value)}
            required
          />
        </FormCalculatorRow>
        <FormCalculatorRow>
          <p>Taxa do CDB</p>
          <input
            type="text"
            name="cdbRate"
            value={cdbRate}
            onChange={event => setCdbRate(event.target.value)}
            required
          />
        </FormCalculatorRow>
        <FormCalculatorRow>
          {getLoading ? (
            <ClipLoader color={'#fff'} loading={true} size={30} />
          ) : (
            <button type="submit">CALCULAR</button>
          )}
        </FormCalculatorRow>
      </FormCalculator>

      {getCdbPrices.length > 0 && (
        <PriceContainer>
          <p>Valor Calculado:</p>
          <h4>
            R$ {formatCurrency(getCdbPrices[getCdbPrices.length - 1].unitPrice)}
          </h4>
        </PriceContainer>
      )}

      {getLoading && (
        <div className="loading">
          <ClipLoader color={'#5c60f5'} loading={true} size={30} />
        </div>
      )}

      <ChartContainer>
        {getCdbPrices.length > 0 && <LineChart CdbPrices={getCdbPrices} />}
      </ChartContainer>
    </Container>
  )
}

export default App
