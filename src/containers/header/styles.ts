import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 12.5rem;
  background: var(--gray-700);
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  display: flex;
  gap: 0.5rem;
  .input-container {
    background: var(--gray-500);
    border-radius: 0.5rem;
    input {
      padding: 1rem;
    }
  }
  button {
    padding: 1rem;
    background: var(--blue-700);
    color: var(--gray-100);
    border-radius: 0.5rem;
    font: 700 0.875rem 'Inter', sans-serif;
  }
`;
