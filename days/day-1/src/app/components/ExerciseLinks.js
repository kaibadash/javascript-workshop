import React from "react";
import { Link } from "react-router";

import * as Styles from "./styles.css";
import ExtraStyles from "./ExtraStyles";

const ExerciseLinks = ({ routes }) => (
  <div>
    <h2 className={Styles.LinkHeader}>Exercises</h2>
    <ul className={Styles.Links}>
      {routes.map(({ path, title }, i) => (
        <li className={Styles.Link} key={i}>
          <Link to={path} activeStyle={ExtraStyles.ActiveLink}>{title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ExerciseLinks;
