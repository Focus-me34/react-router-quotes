import classes from "./MainNavigation.module.css"
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li><NavLink to="/quotes" activeClassName={classes.active}>All quotes</NavLink></li>
          <li><NavLink to="/new_quote" activeClassName={classes.active}>Add quote</NavLink></li>
        </ul>
      </nav>
    </header>
   );
}

export default MainNavigation;
