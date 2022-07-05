import styled from 'styled-components'

export const Socials = styled.div`
  display: flex;

  .social__item {
    width: calc(100% / 7);
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;
    &:not(:last-child) {
      border-right: 2px solid ${({ theme }) => theme.bg_grey_low};
    }
  }
`
