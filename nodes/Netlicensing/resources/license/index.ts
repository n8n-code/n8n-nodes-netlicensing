import type { INodeProperties } from 'n8n-workflow';

export const licenseDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"License"
					]
				}
			},
			"options": [
				{
					"name": "List Licenses",
					"value": "List Licenses",
					"action": "List Licenses",
					"description": "Return a list of all Licenses for the current Vendor",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/license"
						}
					}
				},
				{
					"name": "Create License",
					"value": "Create License",
					"action": "Create License",
					"description": "Creates a new License",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/license"
						}
					}
				},
				{
					"name": "Delete License",
					"value": "Delete License",
					"action": "Delete License",
					"description": "Delete License by a 'licenseNumber'",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/license/{{$parameter[\"licenseNumber\"]}}"
						}
					}
				},
				{
					"name": "Get License",
					"value": "Get License",
					"action": "Get License",
					"description": "Get License by a 'licenseNumber'",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/license/{{$parameter[\"licenseNumber\"]}}"
						}
					}
				},
				{
					"name": "Update License",
					"value": "Update License",
					"action": "Update License",
					"description": "Update License by a 'licenseNumber'",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/license/{{$parameter[\"licenseNumber\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /license",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License"
					],
					"operation": [
						"List Licenses"
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
						"License"
					],
					"operation": [
						"List Licenses"
					]
				}
			}
		},
		{
			"displayName": "POST /license",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License"
					],
					"operation": [
						"Create License"
					]
				}
			}
		},
		{
			"displayName": "POST /license<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License"
					],
					"operation": [
						"Create License"
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
						"License"
					],
					"operation": [
						"Create License"
					]
				}
			}
		},
		{
			"displayName": "DELETE /license/{licenseNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License"
					],
					"operation": [
						"Delete License"
					]
				}
			}
		},
		{
			"displayName": "License Number",
			"name": "licenseNumber",
			"required": true,
			"description": "Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"License"
					],
					"operation": [
						"Delete License"
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
						"License"
					],
					"operation": [
						"Delete License"
					]
				}
			}
		},
		{
			"displayName": "GET /license/{licenseNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License"
					],
					"operation": [
						"Get License"
					]
				}
			}
		},
		{
			"displayName": "License Number",
			"name": "licenseNumber",
			"required": true,
			"description": "Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"License"
					],
					"operation": [
						"Get License"
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
						"License"
					],
					"operation": [
						"Get License"
					]
				}
			}
		},
		{
			"displayName": "POST /license/{licenseNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License"
					],
					"operation": [
						"Update License"
					]
				}
			}
		},
		{
			"displayName": "License Number",
			"name": "licenseNumber",
			"required": true,
			"description": "Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"License"
					],
					"operation": [
						"Update License"
					]
				}
			}
		},
		{
			"displayName": "POST /license/{licenseNumber}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License"
					],
					"operation": [
						"Update License"
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
						"License"
					],
					"operation": [
						"Update License"
					]
				}
			}
		},
];
