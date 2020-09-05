#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { StaticWebsiteDeploymentStack } from '../lib/static-website-deployment-stack';

const app = new cdk.App();
new StaticWebsiteDeploymentStack(app, 'StaticWebsiteDeploymentStack');
