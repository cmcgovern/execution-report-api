module.exports = {
	// The configuration settings for the The Jira Cloud platform REST API OAS flow-node.
	pluginConfig: {
		'@axway/api-builder-plugin-fn-swagger': {
			'jira-swagger-v3': {
				// It is possible to override URI options when constructing
				// outbound requests to this service.
				uri: {
					// protocol: 'https',
					// host: 'hostname',
					// port: 443,
					// basePath: '/api'
				}
			}
		}
	},
	// The following authorization credentials needed to use this service.
	// Please follow this guide to manually configure these credentials:
	// https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_credentials.html
	authorization: {
		credentials: {
			'jira_basic': {
				type: 'basic',
				username: process.env.USERNAME,
				password: process.env.PASSWORD
			}
		}
	}
};
