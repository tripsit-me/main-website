import React, { StrictMode, ReactElement } from 'react';
import { DocumentHead, Layout, HeroIntro } from '../components';

export default function Home(): ReactElement {
	return (
		<StrictMode>
			<DocumentHead title="Home" />
			<Layout>
				<HeroIntro />
			</Layout>
		</StrictMode>
	);
}
