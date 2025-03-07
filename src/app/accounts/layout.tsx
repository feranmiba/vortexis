import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <header>
                <nav>
                    
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                
            </footer>
        </div>
    );
};

export default Layout;