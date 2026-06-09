import type { INodeProperties } from 'n8n-workflow';

export const productModuleDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Product Module"
					]
				}
			},
			"options": [
				{
					"name": "List Product Modules",
					"value": "List Product Modules",
					"action": "List Product Modules",
					"description": "Return a list of all Product Modules for the current Vendor",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/productmodule"
						}
					}
				},
				{
					"name": "Create Product Module",
					"value": "Create Product Module",
					"action": "Create Product Module",
					"description": "Creates a new Product Module",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/productmodule"
						}
					}
				},
				{
					"name": "Delete Product Module",
					"value": "Delete Product Module",
					"action": "Delete Product Module",
					"description": "Delete a Product Module by 'number'",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/productmodule/{{$parameter[\"productModuleNumber\"]}}"
						}
					}
				},
				{
					"name": "Get Product Module",
					"value": "Get Product Module",
					"action": "Get Product Module",
					"description": "Return a Product Module by 'productModuleNumber'",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/productmodule/{{$parameter[\"productModuleNumber\"]}}"
						}
					}
				},
				{
					"name": "Update Product Module",
					"value": "Update Product Module",
					"action": "Update Product Module",
					"description": "Sets the provided properties to a Product Module. Return an updated Product Module",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/productmodule/{{$parameter[\"productModuleNumber\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /productmodule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Module"
					],
					"operation": [
						"List Product Modules"
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
						"Product Module"
					],
					"operation": [
						"List Product Modules"
					]
				}
			}
		},
		{
			"displayName": "POST /productmodule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Module"
					],
					"operation": [
						"Create Product Module"
					]
				}
			}
		},
		{
			"displayName": "POST /productmodule<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Module"
					],
					"operation": [
						"Create Product Module"
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
						"Product Module"
					],
					"operation": [
						"Create Product Module"
					]
				}
			}
		},
		{
			"displayName": "DELETE /productmodule/{productModuleNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Module"
					],
					"operation": [
						"Delete Product Module"
					]
				}
			}
		},
		{
			"displayName": "Product Module Number",
			"name": "productModuleNumber",
			"required": true,
			"description": "Unique number (across all Products of a Vendor) that identifies the Product Module.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Module"
					],
					"operation": [
						"Delete Product Module"
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
						"Product Module"
					],
					"operation": [
						"Delete Product Module"
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
						"Product Module"
					],
					"operation": [
						"Delete Product Module"
					]
				}
			}
		},
		{
			"displayName": "GET /productmodule/{productModuleNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Module"
					],
					"operation": [
						"Get Product Module"
					]
				}
			}
		},
		{
			"displayName": "Product Module Number",
			"name": "productModuleNumber",
			"required": true,
			"description": "Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Module"
					],
					"operation": [
						"Get Product Module"
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
						"Product Module"
					],
					"operation": [
						"Get Product Module"
					]
				}
			}
		},
		{
			"displayName": "POST /productmodule/{productModuleNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Module"
					],
					"operation": [
						"Update Product Module"
					]
				}
			}
		},
		{
			"displayName": "Product Module Number",
			"name": "productModuleNumber",
			"required": true,
			"description": "Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Module"
					],
					"operation": [
						"Update Product Module"
					]
				}
			}
		},
		{
			"displayName": "POST /productmodule/{productModuleNumber}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product Module"
					],
					"operation": [
						"Update Product Module"
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
						"Product Module"
					],
					"operation": [
						"Update Product Module"
					]
				}
			}
		},
];
