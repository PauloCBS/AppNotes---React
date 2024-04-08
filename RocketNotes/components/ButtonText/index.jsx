import { Container } from './style.js';

export function ButtonText({ title, isActive = false, ...rest }) {
    return (
      <Container
        type="button"
        $isactive={isActive}
        {...rest}
      >
        {title}
      </Container>
    )
  }