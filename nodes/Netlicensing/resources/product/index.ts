import type { INodeProperties } from 'n8n-workflow';

export const productDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					]
				}
			},
			"options": [
				{
					"name": "List Products",
					"value": "List Products",
					"action": "List Products",
					"description": "Return a list of all configured Products for the current Vendor",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/product"
						}
					}
				},
				{
					"name": "Create Product",
					"value": "Create Product",
					"action": "Create Product",
					"description": "Creates a new Product",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/product"
						}
					}
				},
				{
					"name": "Delete Product",
					"value": "Delete Product",
					"action": "Delete Product",
					"description": "Delete a Product by 'number'",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/product/{{$parameter[\"productNumber\"]}}"
						}
					}
				},
				{
					"name": "Product Number",
					"value": "Product Number",
					"action": "Get Product",
					"description": "Return a Product by 'productNumber'",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/product/{{$parameter[\"productNumber\"]}}"
						}
					}
				},
				{
					"name": "Update Product",
					"value": "Update Product",
					"action": "Update Product",
					"description": "Sets the provided properties to a Product. Return an updated Product",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/product/{{$parameter[\"productNumber\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /product",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"List Products"
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
						"Product"
					],
					"operation": [
						"List Products"
					]
				}
			}
		},
		{
			"displayName": "POST /product",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "POST /product<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Create Product"
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
						"Product"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "DELETE /product/{productNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Delete Product"
					]
				}
			}
		},
		{
			"displayName": "Product Number",
			"name": "productNumber",
			"required": true,
			"description": "Unique number that identifies the Product.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Delete Product"
					]
				}
			}
		},
		{
			"displayName": "Force Cascade",
			"name": "forceCascade",
			"description": "Force object deletion and all descendants.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "forceCascade",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Delete Product"
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
						"Product"
					],
					"operation": [
						"Delete Product"
					]
				}
			}
		},
		{
			"displayName": "GET /product/{productNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Product Number"
					]
				}
			}
		},
		{
			"displayName": "Product Number",
			"name": "productNumber",
			"required": true,
			"description": "Unique number that identifies the Product.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Product Number"
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
						"Product"
					],
					"operation": [
						"Product Number"
					]
				}
			}
		},
		{
			"displayName": "POST /product/{productNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "Product Number",
			"name": "productNumber",
			"required": true,
			"description": "Unique number that identifies the Product.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "POST /product/{productNumber}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Update Product"
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
						"Product"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
];
