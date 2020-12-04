import React, {
	StrictMode, ReactElement, ReactNode, ReactNodeArray,
} from 'react';
import { graphql } from 'gatsby';
import { DocumentHead, Layout } from '../components';

interface DataProps {
	data: {
		markdownRemark: {
			html: ReactNode | ReactNodeArray,
			frontmatter: {
				slug: string,
				title: string,
			},
		},
	},
}

// data.markdownRemark holds post data
export default function FactsheetTemplate({ data }: DataProps): ReactElement {
	const { frontmatter } = data.markdownRemark;
	return (
		<StrictMode>
			<DocumentHead title={`Factsheet - ${frontmatter.title}`} />
			<Layout>
				<h1>{frontmatter.title}</h1>
			</Layout>
		</StrictMode>
	);
}

export const factsheetQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
				slug
        title
      }
    }
  }
`;
