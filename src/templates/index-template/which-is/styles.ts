import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1080px) {
    flex-direction: column;
    padding-top: 3rem;
  }
`;

export const WhichIs = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: var(--blue-500);
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: bolder;
    margin-bottom: 2rem;
  }

  p {
    font-size: 2rem;
    font-weight: 100;
    color: var(--gray);

    @media (max-width: 1080px) {
      max-width: 700px;
    }
  }
`;

export  const Figure = styled.figure`
  max-width: 600px;

  img {
    width: 100%;
  }
`;