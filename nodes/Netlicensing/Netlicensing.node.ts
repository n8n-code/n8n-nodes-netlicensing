import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { productDescription } from './resources/product';
import { productModuleDescription } from './resources/product-module';
import { licenseTemplateDescription } from './resources/license-template';
import { licenseeDescription } from './resources/licensee';
import { licenseDescription } from './resources/license';
import { transactionDescription } from './resources/transaction';
import { tokenDescription } from './resources/token';
import { paymentMethodDescription } from './resources/payment-method';
import { utilityDescription } from './resources/utility';

export class Netlicensing implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Netlicensing',
		name: 'N8nDevNetlicensing',
		icon: { light: 'file:./netlicensing.png', dark: 'file:./netlicensing.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Labs64 NetLicensing RESTful API gives you access to NetLicensing’s core features.Authentication..',
		defaults: { name: 'Netlicensing' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevNetlicensingApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Product",
					"value": "Product",
					"description": "Product operations"
				},
				{
					"name": "Product Module",
					"value": "Product Module",
					"description": "Product Module operations"
				},
				{
					"name": "License Template",
					"value": "License Template",
					"description": "License Template operations"
				},
				{
					"name": "Licensee",
					"value": "Licensee",
					"description": "Licensee operations"
				},
				{
					"name": "License",
					"value": "License",
					"description": "License operations"
				},
				{
					"name": "Transaction",
					"value": "Transaction",
					"description": "Transaction operations"
				},
				{
					"name": "Token",
					"value": "Token",
					"description": "Token operations"
				},
				{
					"name": "Payment Method",
					"value": "Payment Method",
					"description": "Payment Method operations"
				},
				{
					"name": "Utility",
					"value": "Utility",
					"description": "Utility operations"
				}
			],
			"default": ""
		},
		...productDescription,
		...productModuleDescription,
		...licenseTemplateDescription,
		...licenseeDescription,
		...licenseDescription,
		...transactionDescription,
		...tokenDescription,
		...paymentMethodDescription,
		...utilityDescription
		],
	};
}
