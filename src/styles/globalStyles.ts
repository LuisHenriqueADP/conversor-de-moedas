import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #6c5ce7;
    --secondary-color: #a29bfe;
    --accent-color: #fd79a8;
    --background-color: #f8f9fa;
    --text-color: #2d3436;
    --card-background: #ffffff;
    --error-color: #e74c3c;
    --success-color: #00b894;
    --border-radius: 12px;
    --box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    --transition: all 0.3s ease;
    --input-text-color: #2d3436;
    --placeholder-color: #aaa;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }

  button, input, select {
    font-family: inherit;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: var(--primary-color);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    font-weight: 500;

    &:hover {
      background-color: var(--secondary-color);
      transform: translateY(-2px);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  input, select {
    width: 100%;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: var(--border-radius);
    background-color: white;
    transition: var(--transition);
    color: var(--input-text-color);

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.2);
    }
    
    &::placeholder {
      color: var(--placeholder-color);
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .card {
    background-color: var(--card-background);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 2rem;
    transition: var(--transition);
  }

  .error-message {
    color: var(--error-color);
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    .card {
      padding: 1.5rem;
    }
    
    button {
      padding: 0.7rem 1.2rem;
    }
  }
`;

export default GlobalStyles; 