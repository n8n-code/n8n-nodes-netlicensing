import type { INodeProperties } from 'n8n-workflow';

export const paymentMethodDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Method"
					]
				}
			},
			"options": [
				{
					"name": "List Payment Methods",
					"value": "List Payment Methods",
					"action": "List Payment Methods",
					"description": "Return a list of all Payment Methods for the current Vendor",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/paymentmethod"
						}
					}
				},
				{
					"name": "Get Payment Method",
					"value": "Get Payment Method",
					"action": "Get Payment Method",
					"description": "Return a Payment Method info by 'paymentMethodNumber'",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/paymentmethod/{{$parameter[\"paymentMethodNumber\"]}}"
						}
					}
				},
				{
					"name": "Update Payment Method",
					"value": "Update Payment Method",
					"action": "Update Payment Method",
					"description": "Sets the provided properties to a Payment Method. Return an updated Payment Method",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/paymentmethod/{{$parameter[\"paymentMethodNumber\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /paymentmethod",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Method"
					],
					"operation": [
						"List Payment Methods"
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
						"Payment Method"
					],
					"operation": [
						"List Payment Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /paymentmethod/{paymentMethodNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Method"
					],
					"operation": [
						"Get Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Payment Method Number",
			"name": "paymentMethodNumber",
			"required": true,
			"description": "Payment method number",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Method"
					],
					"operation": [
						"Get Payment Method"
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
						"Payment Method"
					],
					"operation": [
						"Get Payment Method"
					]
				}
			}
		},
		{
			"displayName": "POST /paymentmethod/{paymentMethodNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Method"
					],
					"operation": [
						"Update Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Payment Method Number",
			"name": "paymentMethodNumber",
			"required": true,
			"description": "Payment method number",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Method"
					],
					"operation": [
						"Update Payment Method"
					]
				}
			}
		},
		{
			"displayName": "POST /paymentmethod/{paymentMethodNumber}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Method"
					],
					"operation": [
						"Update Payment Method"
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
						"Payment Method"
					],
					"operation": [
						"Update Payment Method"
					]
				}
			}
		},
];
