import React from "react";

import { graphql } from "gatsby";

import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import { useSiteMetadata } from "@/hooks";
import { Node } from "@/types";

interface Props {
  data: {
    markdownRemark: Node;
  };
}

const ContactTemplate: React.FC<Props> = ({ data }: Props) => {
  const { html: body } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const { title } = frontmatter;

  return (
    <Layout>
      <Sidebar />
      <Page title={title}>
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <form class="the-contact-form" name="plzcontactme" method="POST" data-netlify="true">
	      <label for="name">Name:</label>
      	<input type="text" id="name" name="user_name" />
	      <label for="mail">Email:</label>
	      <input type="email" id="mail" name="user_mail" />
	      <label for="note">Message:</label>
	      <textarea id="msg" name="user_message" rows="5" cols="40"></textarea>
          <p><button style="font-size: 18px;" type="submit">Send</button></p>
	      </form>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query ContactTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        socialImage {
          publicURL
        }
      }
    }
  }
`;

export const Head: React.FC<Props> = ({ data }) => {
  const { title, subtitle, url } = useSiteMetadata();

  const {
    frontmatter: {
      title: pageTitle,
      description: pageDescription = "",
      socialImage,
    },
  } = data.markdownRemark;
  const description = pageDescription || subtitle;
  const image = socialImage?.publicURL && url.concat(socialImage?.publicURL);

  return (
    <Meta
      title={`${pageTitle} - ${title}`}
      description={description}
      image={image}
    />
  );
};

export default ContactTemplate;
