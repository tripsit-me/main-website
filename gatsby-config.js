'use strict';

const path = require('path');

const name = 'TripSit';
const description = 'Harm reduction through education';
const url = 'https://tripsit.me/';

module.exports = {
	pathPrefix: '/',
	siteMetadata: {
		title: name,
		description,
		siteUrl: url,
		author: name,
	},
	plugins: [
		'gatsby-plugin-typescript',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'articles',
				path: path.resolve('./content/articles'),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'factsheet',
				path: path.resolve('./content/factsheet'),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: path.resolve('./content/data'),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: path.resolve('./content/images'),
			},
		},
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				useResolveUrlLoader: {
					options: {
						debug: process.env.NODE_ENV !== 'production',
						sourceMap: true,
					},
				},
			},
		},
	],
};
