# Static Website Deployment on S3 and Cloudfront

A CDK Deployment of static website to S3 and Cloudfront

## Context Knowledge

**S3**: Storage Service
**CloudFront**: Content Delivery Network to serve your content as fast as possible to users

## Architecture
![Architecture Diagram](docs/images/architecture.png)

## Set up

1. Install [CDK](https://docs.aws.amazon.com/cdk/latest/guide/cli.html)
2. Set up your [AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
3. Put your website under


## Deployment

Run these commands
```
cdk bootstrap
cdk deploy
```

Go to your AWS Console and go to [Cloudfront Service](https://console.aws.amazon.com/cloudfront/home) and get the domain name. Your website is available at `https://${your-domain}/index.html`. For example, if your domain is `d2v71ds80aobji.cloudfront.net`. Your website is at `https://d2v71ds80aobji.cloudfront.net/index.html`

## Future Improvements

Add Route 53 to resolve a domain to cloudfront
