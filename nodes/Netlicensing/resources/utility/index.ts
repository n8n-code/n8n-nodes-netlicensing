import type { INodeProperties } from 'n8n-workflow';

export const utilityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					]
				}
			},
			"options": [
				{
					"name": "License Types",
					"value": "License Types",
					"action": "List License Types",
					"description": "Return a list of all License Types supported by the service",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/utility/licenseTypes"
						}
					}
				},
				{
					"name": "Licensing Models",
					"value": "Licensing Models",
					"action": "List Licensing Models",
					"description": "Return a list of all licensing models supported by the service",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/utility/licensingModels"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /utility/licenseTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					],
					"operation": [
						"License Types"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Authentication. Use either `username:password` or `apiKey:token` to authenticate.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					],
					"operation": [
						"License Types"
					]
				}
			}
		},
		{
			"displayName": "GET /utility/licensingModels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					],
					"operation": [
						"Licensing Models"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP Basic Authentication. Use either `username:password` or `apiKey:token` to authenticate.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					],
					"operation": [
						"Licensing Models"
					]
				}
			}
		},
];
