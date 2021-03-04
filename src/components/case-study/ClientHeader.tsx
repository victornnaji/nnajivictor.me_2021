import { media, theme } from "@src/styles"
import React from "react"
import styled from "styled-components"
import { AwardProps } from "./types"

interface Props {
    clientDescription: {
        clientName? : string,
        dateLaunched? : string,
        website?: string,
        awards: AwardProps[]
    },
}

const ClientHeader = ({clientDescription}: Props) => {
  return (
      <StyledClientHeader className="case-study__header--client-info">
          <div className="case-study__header--client-info__block">
              <div className="info-title">Client</div>
              {clientDescription.clientName ? (
                  <div className="info-value">{clientDescription.clientName}</div>
              ) : (
                      <span className="no-value">##</span>
                  )}
          </div>
          <div className="case-study__header--client-info__block">
              <div className="info-title">Date</div>
              {clientDescription.dateLaunched ? (
                  <div className="info-value">{clientDescription.dateLaunched}</div>
              ) : (
                      <span className="no-value">##</span>
                  )}
          </div>
          <div className="case-study__header--client-info__block">
              <div className="info-title">Awards</div>
              {clientDescription.awards ? (
                  clientDescription.awards.map((award: AwardProps, i: number) => (
                      <div className="info-value award-value" key={i}>
                          {award.awardItem}
                      </div>
                  ))
              ) : (
                      <span className="no-value">##</span>
                  )}
          </div>
          <div className="case-study__header--client-info__block">
              <div className="info-title">Website</div>
              {clientDescription.website ? (
                  <a
                      href={`https://${clientDescription.website}`}
                      className="info-value link"
                  >
                      {clientDescription.website}
                  </a>
              ) : (
                      <span className="no-value">##</span>
                  )}
          </div>
      </StyledClientHeader>
  )
}

const StyledClientHeader = styled.div`
  flex: 0 0 auto;
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 5rem;
  ${media.phablet`flex-direction: column`}
  overflow: hidden;

  .case-study__header--client-info__block {
    margin-right: 10rem;
    flex: 0 auto;

    .info-title {
      font-size: 1.7rem;
      line-height: 24px;
      text-align: left;
    }

    .no-value {
      font-size: 1.8rem;
      text-align: center;
      display: grid;
    }

    .info-value {
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
      text-align: left;
      font-family: ${theme.fonts.Lato};
      text-decoration: none;
      color: currentColor;
      ${media.phablet`margin-bottom: 2rem; display: block;`}
    }

    .award-value {
      ${media.phablet`margin-bottom: .5rem; display: block; `}
      &:last-child {
        ${media.phablet`margin-bottom: 2rem; display: block; `}
      }
    }
  }
`

export default ClientHeader
