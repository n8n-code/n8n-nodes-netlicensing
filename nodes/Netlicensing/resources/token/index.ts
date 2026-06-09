import type { INodeProperties } from 'n8n-workflow';

export const tokenDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Token"
					]
				}
			},
			"options": [
				{
					"name": "List Tokens",
					"value": "List Tokens",
					"action": "List Tokens",
					"description": "Return a list of all tokens for the current Vendor",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/token"
						}
					}
				},
				{
					"name": "Create Token",
					"value": "Create Token",
					"action": "Create token",
					"description": "Create token by 'tokenType' and additional token parameters",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/token"
						}
					}
				},
				{
					"name": "Delete Token",
					"value": "Delete Token",
					"action": "Delete token",
					"description": "Delete a token by 'number'",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/token/{{$parameter[\"tokenNumber\"]}}"
						}
					}
				},
				{
					"name": "Get Token",
					"value": "Get Token",
					"action": "Get token",
					"description": "Return a token by 'tokenNumber'",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/token/{{$parameter[\"tokenNumber\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Token"
					],
					"operation": [
						"List Tokens"
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
						"Token"
					],
					"operation": [
						"List Tokens"
					]
				}
			}
		},
		{
			"displayName": "POST /token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Token"
					],
					"operation": [
						"Create Token"
					]
				}
			}
		},
		{
			"displayName": "POST /token<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Token"
					],
					"operation": [
						"Create Token"
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
						"Token"
					],
					"operation": [
						"Create Token"
					]
				}
			}
		},
		{
			"displayName": "DELETE /token/{tokenNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Token"
					],
					"operation": [
						"Delete Token"
					]
				}
			}
		},
		{
			"displayName": "Token Number",
			"name": "tokenNumber",
			"required": true,
			"description": "Token number",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Token"
					],
					"operation": [
						"Delete Token"
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
						"Token"
					],
					"operation": [
						"Delete Token"
					]
				}
			}
		},
		{
			"displayName": "GET /token/{tokenNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Token"
					],
					"operation": [
						"Get Token"
					]
				}
			}
		},
		{
			"displayName": "Token Number",
			"name": "tokenNumber",
			"required": true,
			"description": "Token number",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Token"
					],
					"operation": [
						"Get Token"
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
						"Token"
					],
					"operation": [
						"Get Token"
					]
				}
			}
		},
];
