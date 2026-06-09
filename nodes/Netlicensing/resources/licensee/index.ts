import type { INodeProperties } from 'n8n-workflow';

export const licenseeDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					]
				}
			},
			"options": [
				{
					"name": "List Licensees",
					"value": "List Licensees",
					"action": "List Licensees",
					"description": "Return a list of all Licensees for the current Vendor",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/licensee"
						}
					}
				},
				{
					"name": "Create Licensee",
					"value": "Create Licensee",
					"action": "Create Licensee",
					"description": "Creates a new Licensee",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/licensee"
						}
					}
				},
				{
					"name": "Delete Licensee",
					"value": "Delete Licensee",
					"action": "Delete Licensee",
					"description": "Delete a Licensee by 'number'",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/licensee/{{$parameter[\"licenseeNumber\"]}}"
						}
					}
				},
				{
					"name": "Get Licensee",
					"value": "Get Licensee",
					"action": "Get Licensee",
					"description": "Return a Licensee by 'licenseeNumber'",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/licensee/{{$parameter[\"licenseeNumber\"]}}"
						}
					}
				},
				{
					"name": "Update Licensee",
					"value": "Update Licensee",
					"action": "Update Licensee",
					"description": "Sets the provided properties to a Licensee. Return an updated Licensee",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/licensee/{{$parameter[\"licenseeNumber\"]}}"
						}
					}
				},
				{
					"name": "Transfer Licenses",
					"value": "Transfer Licenses",
					"action": "Transfer Licenses",
					"description": "Licenses transfer between Licensees",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/licensee/{{$parameter[\"licenseeNumber\"]}}/transfer"
						}
					}
				},
				{
					"name": "Validate Licensee",
					"value": "Validate Licensee",
					"action": "Validate Licensee",
					"description": "Validates active Licenses of the Licensee",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/licensee/{{$parameter[\"licenseeNumber\"]}}/validate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /licensee",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"List Licensees"
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
						"Licensee"
					],
					"operation": [
						"List Licensees"
					]
				}
			}
		},
		{
			"displayName": "POST /licensee",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Create Licensee"
					]
				}
			}
		},
		{
			"displayName": "POST /licensee<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Create Licensee"
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
						"Licensee"
					],
					"operation": [
						"Create Licensee"
					]
				}
			}
		},
		{
			"displayName": "DELETE /licensee/{licenseeNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Delete Licensee"
					]
				}
			}
		},
		{
			"displayName": "Licensee Number",
			"name": "licenseeNumber",
			"required": true,
			"description": "Unique number (across all Products of a Vendor) that identifies the Licensee.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Delete Licensee"
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
						"Licensee"
					],
					"operation": [
						"Delete Licensee"
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
						"Licensee"
					],
					"operation": [
						"Delete Licensee"
					]
				}
			}
		},
		{
			"displayName": "GET /licensee/{licenseeNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Get Licensee"
					]
				}
			}
		},
		{
			"displayName": "Licensee Number",
			"name": "licenseeNumber",
			"required": true,
			"description": "Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Get Licensee"
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
						"Licensee"
					],
					"operation": [
						"Get Licensee"
					]
				}
			}
		},
		{
			"displayName": "POST /licensee/{licenseeNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Update Licensee"
					]
				}
			}
		},
		{
			"displayName": "Licensee Number",
			"name": "licenseeNumber",
			"required": true,
			"description": "Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Update Licensee"
					]
				}
			}
		},
		{
			"displayName": "POST /licensee/{licenseeNumber}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Update Licensee"
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
						"Licensee"
					],
					"operation": [
						"Update Licensee"
					]
				}
			}
		},
		{
			"displayName": "POST /licensee/{licenseeNumber}/transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Transfer Licenses"
					]
				}
			}
		},
		{
			"displayName": "Licensee Number",
			"name": "licenseeNumber",
			"required": true,
			"description": "Licensee number with a maximum length of 1000 characters",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Transfer Licenses"
					]
				}
			}
		},
		{
			"displayName": "POST /licensee/{licenseeNumber}/transfer<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Transfer Licenses"
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
						"Licensee"
					],
					"operation": [
						"Transfer Licenses"
					]
				}
			}
		},
		{
			"displayName": "POST /licensee/{licenseeNumber}/validate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Validate Licensee"
					]
				}
			}
		},
		{
			"displayName": "Licensee Number",
			"name": "licenseeNumber",
			"required": true,
			"description": "Licensee number with a maximum length of 1000 characters",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Validate Licensee"
					]
				}
			}
		},
		{
			"displayName": "POST /licensee/{licenseeNumber}/validate<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensee"
					],
					"operation": [
						"Validate Licensee"
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
						"Licensee"
					],
					"operation": [
						"Validate Licensee"
					]
				}
			}
		},
];
