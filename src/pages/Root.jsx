import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigation} from 'react-router-dom';
import { Outlet } from 'react-router-dom'
import styles from "./Root.module.css";
function Root() {
  const navigation=useNavigation();
  return (
    <div>
  <nav className={`container ${styles.nav}`}>
                <Link to="/">
                    <h1>Movie Search</h1>
                </Link>
            </nav>
      {navigation.state==="loading"?<h1>...loading</h1>:< Outlet/>}
      </div>
  );
}

export default Root