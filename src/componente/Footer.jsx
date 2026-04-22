import Container from 'react-bootstrap/Container';

// import de la variable global anioActual
import { anioActual } from '../config/app.js';

function Footer() {
    return (
        <footer className="bg-dark text-light mt-5 py-4 border-top border-secondary">
        <Container>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <div className="text-center text-md-start">
                <h5 className="mb-1">Mi sitio</h5>
                <p className="mb-0 text-light-emphasis">© {anioActual} Todos los derechos reservados</p>
            </div>

            <div className="d-flex align-items-center gap-3">
                <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-light"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049C16 3.603 12.418 0 8 0S0 3.603 0 8.049C0 12.07 2.926 15.401 6.75 16v-5.625H4.719V8.049H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.875 0 1.79.158 1.79.158v1.98h-1.008c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.354 2.326H9.25V16C13.074 15.401 16 12.07 16 8.049" />
                </svg>
                </a>

                <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-light"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.087 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76c-.198.509-.333 1.09-.372 1.943C.01 5.556 0 5.829 0 8s.01 2.444.048 3.297c.039.853.174 1.434.372 1.943.205.527.478.974.923 1.417.443.445.89.718 1.417.923.509.198 1.09.333 1.943.372C5.556 15.99 5.829 16 8 16s2.444-.01 3.297-.048c.853-.039 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.417-.923c.445-.443.718-.89.923-1.417.198-.509.333-1.09.372-1.943C15.99 10.444 16 10.171 16 8s-.01-2.444-.048-3.297c-.039-.853-.174-1.434-.372-1.943a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.509-.198-1.09-.333-1.943-.372C10.444.01 10.171 0 8 0m0 1.441c2.136 0 2.389.008 3.232.046.78.036 1.204.166 1.486.276.374.145.641.319.921.599.28.28.454.547.599.921.11.282.24.706.276 1.486.038.843.046 1.096.046 3.232s-.008 2.389-.046 3.232c-.036.78-.166 1.204-.276 1.486a2.46 2.46 0 0 1-.599.921 2.46 2.46 0 0 1-.921.599c-.282.11-.706.24-1.486.276-.843.038-1.096.046-3.232.046s-2.389-.008-3.232-.046c-.78-.036-1.204-.166-1.486-.276a2.46 2.46 0 0 1-.921-.599 2.46 2.46 0 0 1-.599-.921c-.11-.282-.24-.706-.276-1.486C1.449 10.389 1.441 10.136 1.441 8s.008-2.389.046-3.232c.036-.78.166-1.204.276-1.486.145-.374.319-.641.599-.921.28-.28.547-.454.921-.599.282-.11.706-.24 1.486-.276C5.611 1.449 5.864 1.441 8 1.441m0 2.458A4.101 4.101 0 1 0 8 12.1 4.101 4.101 0 0 0 8 3.899m0 6.761A2.66 2.66 0 1 1 8 5.34a2.66 2.66 0 0 1 0 5.32m5.224-6.93a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0" />
                </svg>
                </a>

                <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="text-light"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.154L10.05 6.126 15.582 15.25H11.25L7.86 9.73 3.03 15.25H.875l5.03-5.75L.582.75h4.442l3.066 5.082zM11.844 14h1.193L4.377 1.934H3.097z" />
                </svg>
                </a>

                <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-light"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zM4.943 13.5V6.169H2.542V13.5zm-1.2-8.333c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.21 2.4 3.919c0 .694.521 1.248 1.327 1.248m4.908 8.333V9.409c0-.219.016-.438.08-.595.173-.437.568-.89 1.232-.89.869 0 1.216.672 1.216 1.657V13.5h2.401V9.303c0-2.248-1.2-3.293-2.8-3.293-1.291 0-1.854.713-2.175 1.214v.025h-.016a5.6 5.6 0 0 1 .016-.025V6.169h-2.4c.03.694 0 7.331 0 7.331z" />
                </svg>
                </a>
            </div>
            </div>
        </Container>
        </footer>
    );
}

export default Footer;
