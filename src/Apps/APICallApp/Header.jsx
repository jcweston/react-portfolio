import React from 'react';
import { Link } from '@reach/router'

const Header = () => {
    return ( 
        <div>
            <h1>Bike Incidents</h1>
            <nav>
                <Link to="/">
                    <button>
                        Home
                    </button>
                </Link>
                <Link to="/graph">
                    <button>
                        Graph
                    </button>
                </Link>
                <Link to="/new">
                    <button>
                        New
                    </button>
                </Link>
            </nav>
        </div> 
        );
}
 
export default Header;