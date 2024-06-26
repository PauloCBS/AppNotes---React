import { Container } from './style.js';

export function Input({icon: Icon, ...rest}) {
    return (
      <Container>
          {Icon && <Icon size = {20} />}
          <input {...rest}/>
      </Container>
       
      )
  }

  //all components must start with a capital letter 