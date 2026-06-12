import React from "react";

// Import AWS PNG icons
import LambdaIcon from "../../assets/images/cloud/lambda.png";
import ApiGatewayIcon from "../../assets/images/cloud/api-gateway.png";
import DynamoDBIcon from "../../assets/images/cloud/dynamodb.png";
import S3Icon from "../../assets/images/cloud/s3.png";
import StepFunctionsIcon from "../../assets/images/cloud/step-functions.png";
import CloudWatchIcon from "../../assets/images/cloud/cloudwatch.png";
import LambdaPipelineIcon from "../../assets/images/cloud/lambda.png";
import ApiGatewayPipelineIcon from "../../assets/images/cloud/api-gateway.png";
import CloudWatchPipelineIcon from "../../assets/images/cloud/cloudwatch.png";
import S3PipelineIcon from "../../assets/images/cloud/s3.png";
import SQSPipelineIcon from "../../assets/images/cloud/sqs.png"; // Add SQS icon in your assets

export default function AwsServerlessPro() {
  const awsServices = [
    {
      name: "AWS Lambda",
      icon: LambdaIcon,
      description: "Event-driven serverless compute that scales automatically.",
      gradient: "from-orange-700 to-yellow-400",
    },
    {
      name: "API Gateway",
      icon: ApiGatewayIcon,
      description: "Secure APIs for connecting frontend and backend seamlessly.",
      gradient: "from-purple-700 to-pink-400",
    },
    {
      name: "DynamoDB",
      icon: DynamoDBIcon,
      description: "Serverless NoSQL database for high-performance applications.",
      gradient: "from-green-700 to-teal-400",
    },
    {
      name: "S3",
      icon: S3Icon,
      description: "Object storage for static files, backups, and media.",
      gradient: "from-blue-700 to-cyan-400",
    },
    {
      name: "Step Functions",
      icon: StepFunctionsIcon,
      description: "Orchestrate serverless workflows and pipelines.",
      gradient: "from-yellow-700 to-amber-400",
    },
    {
      name: "CloudWatch",
      icon: CloudWatchIcon,
      description: "Monitor applications and ensure reliability in real-time.",
      gradient: "from-orange-700 to-red-400",
    },
  ];

  const pipelineSteps = [
    { name: "Lambda", icon: LambdaPipelineIcon },
    { name: "API Gateway", icon: ApiGatewayPipelineIcon },
    { name: "CloudWatch", icon: CloudWatchPipelineIcon },
    { name: "S3", icon: S3PipelineIcon },
    { name: "SQS", icon: SQSPipelineIcon },
  ];

  return (
    <section className="mb-40 relative bg-[#1a202c] text-white pt-40 pb-20 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              AWS
            </span>{" "}
            & Serverless Expertise
          </h2>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Architecting modern serverless applications on AWS that scale
            globally, reduce operational overhead, and deliver business value.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-12">
          {awsServices.map((service, i) => (
            <div
              key={i}
              className={`opacity-70 group relative bg-gradient-to-br ${service.gradient} rounded-3xl shadow-2xl p-8 transform transition opacity-90 hover:opacity-110 hover:scale-105`}
            >
              {/* Icon */}
            
              {/* Name */}
              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              {/* Description */}
              <p className="text-white">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Serverless Pipeline */}
        <div className="mt-32 relative grid grid-cols-1 md:grid-cols-5 items-center gap-6">
          {pipelineSteps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="">
                <img
                  src={step.icon}
                  alt={step.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="mt-4 text-slate-200 font-medium text-center">
                {step.name}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-18 text-center text-slate-300 max-w-3xl mx-auto">
          <p>
            I specialize in designing serverless architectures on AWS using
            Lambda, API Gateway, Step Functions, DynamoDB, and S3 to deliver
            highly available, scalable, and cost-efficient solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
