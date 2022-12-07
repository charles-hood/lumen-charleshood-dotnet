import React from "react";

import { useSiteMetadata } from "@/hooks";
import { getContactHref } from "@/utils";

import * as styles from "./Author.module.scss";

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.author}>
      <p style="text-align:center;">
	<a href="https://twitter.com/charleshood" target="_blank" rel="nofollow noopener noreferrer">
		<img src="https://img.shields.io/twitter/url/https/twitter.com/bukotsunikki.svg?style=social&amp;label=Follow%20%40charleshood" alt="Twitter URL"/>
	</a>
      </p>
    </div>
  );
};

export default Author;
