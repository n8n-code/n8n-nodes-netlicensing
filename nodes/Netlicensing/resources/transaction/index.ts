import type { INodeProperties } from 'n8n-workflow';

export const transactionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					]
				}
			},
			"options": [
				{
					"name": "List Transactions",
					"value": "List Transactions",
					"action": "List Transactions",
					"description": "Return a list of all Transactions for the current Vendor",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/transaction"
						}
					}
				},
				{
					"name": "Create Transaction",
					"value": "Create Transaction",
					"action": "Create Transaction",
					"description": "Creates a new Transaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/transaction"
						}
					}
				},
				{
					"name": "Get Transaction",
					"value": "Get Transaction",
					"action": "Get Transaction ",
					"description": "Return a Transaction by 'transactionNumber'",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/transaction/{{$parameter[\"transactionNumber\"]}}"
						}
					}
				},
				{
					"name": "Update Transaction",
					"value": "Update Transaction",
					"action": "Update Transaction",
					"description": "Sets the provided properties to a Transaction. Return an updated Transaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/transaction/{{$parameter[\"transactionNumber\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /transaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List Transactions"
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
						"Transaction"
					],
					"operation": [
						"List Transactions"
					]
				}
			}
		},
		{
			"displayName": "POST /transaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Transaction"
					]
				}
			}
		},
		{
			"displayName": "POST /transaction<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Transaction"
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
						"Transaction"
					],
					"operation": [
						"Create Transaction"
					]
				}
			}
		},
		{
			"displayName": "GET /transaction/{transactionNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction"
					]
				}
			}
		},
		{
			"displayName": "Transaction Number",
			"name": "transactionNumber",
			"required": true,
			"description": "Unique number (across all Products of a Vendor) that identifies the Transaction",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction"
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
						"Transaction"
					],
					"operation": [
						"Get Transaction"
					]
				}
			}
		},
		{
			"displayName": "POST /transaction/{transactionNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Update Transaction"
					]
				}
			}
		},
		{
			"displayName": "Transaction Number",
			"name": "transactionNumber",
			"required": true,
			"description": "Unique number (across all Products of a Vendor) that identifies the Transaction",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Update Transaction"
					]
				}
			}
		},
		{
			"displayName": "POST /transaction/{transactionNumber}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Update Transaction"
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
						"Transaction"
					],
					"operation": [
						"Update Transaction"
					]
				}
			}
		},
];
