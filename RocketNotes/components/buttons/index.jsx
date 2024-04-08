import { Container } from './style.js';

export function Button ({ title, loading, ...rest }){

    return(
        <Container 
            type = "button"
            disabled = {loading}
            {...rest}
        >

            { loading ? 'loading': title }

        </Container>
    );
}
