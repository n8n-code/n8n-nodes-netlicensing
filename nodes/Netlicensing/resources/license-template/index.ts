import type { INodeProperties } from 'n8n-workflow';

export const licenseTemplateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"License Template"
					]
				}
			},
			"options": [
				{
					"name": "List License Templates",
					"value": "List License Templates",
					"action": "List License Templates",
					"description": "Return a list of all License Templates for the current Vendor",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/licensetemplate"
						}
					}
				},
				{
					"name": "Create License Template",
					"value": "Create License Template",
					"action": "Create License Template",
					"description": "Creates a new License Template",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/licensetemplate"
						}
					}
				},
				{
					"name": "Delete License Template",
					"value": "Delete License Template",
					"action": "Delete License Template",
					"description": "Delete a License Template by 'number'.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/licensetemplate/{{$parameter[\"licenseTemplateNumber\"]}}"
						}
					}
				},
				{
					"name": "Get License Template",
					"value": "Get License Template",
					"action": "Get License Template",
					"description": "Return a License Template by 'licenseTemplateNumber'",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/licensetemplate/{{$parameter[\"licenseTemplateNumber\"]}}"
						}
					}
				},
				{
					"name": "Update License Template",
					"value": "Update License Template",
					"action": "Update License Template",
					"description": "Sets the provided properties to a License Template. Return an updated License Template",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/licensetemplate/{{$parameter[\"licenseTemplateNumber\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /licensetemplate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License Template"
					],
					"operation": [
						"List License Templates"
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
						"License Template"
					],
					"operation": [
						"List License Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /licensetemplate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License Template"
					],
					"operation": [
						"Create License Template"
					]
				}
			}
		},
		{
			"displayName": "POST /licensetemplate<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License Template"
					],
					"operation": [
						"Create License Template"
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
						"License Template"
					],
					"operation": [
						"Create License Template"
					]
				}
			}
		},
		{
			"displayName": "DELETE /licensetemplate/{licenseTemplateNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License Template"
					],
					"operation": [
						"Delete License Template"
					]
				}
			}
		},
		{
			"displayName": "License Template Number",
			"name": "licenseTemplateNumber",
			"required": true,
			"description": "Unique number (across all Products of a Vendor) that identifies the License Template.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"License Template"
					],
					"operation": [
						"Delete License Template"
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
						"License Template"
					],
					"operation": [
						"Delete License Template"
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
						"License Template"
					],
					"operation": [
						"Delete License Template"
					]
				}
			}
		},
		{
			"displayName": "GET /licensetemplate/{licenseTemplateNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License Template"
					],
					"operation": [
						"Get License Template"
					]
				}
			}
		},
		{
			"displayName": "License Template Number",
			"name": "licenseTemplateNumber",
			"required": true,
			"description": "Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"License Template"
					],
					"operation": [
						"Get License Template"
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
						"License Template"
					],
					"operation": [
						"Get License Template"
					]
				}
			}
		},
		{
			"displayName": "POST /licensetemplate/{licenseTemplateNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License Template"
					],
					"operation": [
						"Update License Template"
					]
				}
			}
		},
		{
			"displayName": "License Template Number",
			"name": "licenseTemplateNumber",
			"required": true,
			"description": "Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"License Template"
					],
					"operation": [
						"Update License Template"
					]
				}
			}
		},
		{
			"displayName": "POST /licensetemplate/{licenseTemplateNumber}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License Template"
					],
					"operation": [
						"Update License Template"
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
						"License Template"
					],
					"operation": [
						"Update License Template"
					]
				}
			}
		},
];
