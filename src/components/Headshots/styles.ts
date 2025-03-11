import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .headshots {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .headshot {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      cursor: pointer;

      &:hover {
        transform: translateY(-5px);
        background-color: #1a1a1a; /* Darker grey color for hover */
      }

      img {
        width: 100%;
        height: auto;
        border-radius: 1rem;
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 1rem; /* Further reduced margin */
      }
      
      h3{
        margin-bottom: 0.5rem; /* Further reduced margin */
        font-size: 2rem;
        color: var(--green); /* Same color as timeline card titles */
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px) {
    .headshots {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .headshots {
      grid-template-columns: 1fr;
    }
  }
`