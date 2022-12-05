import React from "react";

import { useSiteMetadata } from "@/hooks";
import { getContactHref } from "@/utils";

import * as styles from "./Author.module.scss";

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.author}>
	<img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/charleshood?style=social">
    </div>
  );
};

export default Author;
