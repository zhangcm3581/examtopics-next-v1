import { ExamQuestion } from '@/lib/types/question'

export const saaC03EnQuestions: ExamQuestion[] = [
  {
    id: "saa-1",
    language: "en",
    content: "A company is preparing to launch a public-facing web application in AWS Cloud. The architecture consists of Amazon EC2 instances in a private network behind an Elastic Load Balancer (ELB). DNS is using a third-party service. The company's solutions architect must recommend a solution to detect and mitigate large-scale DDoS attacks. Which solution meets these requirements?",
    type: "single",
    options: [
      { label: "A", content: "Enable Amazon GuardDuty on the account" },
      { label: "B", content: "Enable Amazon Inspector on the EC2 instances" },
      { label: "C", content: "Enable AWS Shield and assign Amazon Route 53 to it" },
      { label: "D", content: "Enable AWS Shield Advanced and assign the ELB to it" }
    ],
    correctAnswer: "D",
    explanation: {
      answer: "D",
      detail: "AWS Shield Advanced provides cost-effective protection for larger and more sophisticated attacks. It can protect AWS applications deployed on Amazon EC2, Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator, and more from DDoS attacks."
    }
  },
  {
    id: "saa-2",
    language: "en",
    content: "A company has thousands of edge devices that collectively generate 1 TB of status alerts per day. Each alert is approximately 2 KB in size. A solutions architect needs to implement a solution to receive and store the alerts for future analysis. The company wants a highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure. Additionally, the company wants to retain 14 days of data for immediate analysis and archive any data older than 14 days. Which solution is MOST operationally efficient to meet these requirements?",
    type: "single",
    options: [
      { label: "A", content: "Create an Amazon Kinesis Data Firehose delivery stream to receive the alerts. Configure the Kinesis Data Firehose stream to send the alerts to an Amazon S3 bucket. Set up an S3 lifecycle configuration to transition the data to Amazon S3 Glacier after 14 days." },
      { label: "B", content: "Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer to receive the alerts. Create a script on the EC2 instances to store the alerts in an Amazon S3 bucket. Set up an S3 lifecycle configuration to transition the data to Amazon S3 Glacier after 14 days." },
      { label: "C", content: "Create an Amazon Kinesis Data Firehose delivery stream to receive the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster. Set up the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster to take manual snapshots daily and delete data older than 14 days from the cluster." },
      { label: "D", content: "Create an Amazon Simple Queue Service (Amazon SQS) standard queue to receive the alerts with a message retention period of 14 days. Configure consumers to poll the SQS queue, check the message age, and analyze the message data as needed. If a message is 14 days old, the consumer should copy the message to an Amazon S3 bucket and delete the message from the SQS queue." }
    ],
    correctAnswer: "A",
    explanation: {
      answer: "A",
      detail: "Amazon Kinesis Data Firehose is designed to automatically scale to match your data throughput and requires no ongoing administration. It can capture, transform and load streaming data into AWS data stores. Amazon S3 provides simple storage service and as required, after 14 days you can transition to S3 Glacier for cost-effective long-term storage."
    }
  },
  {
    id: "saa-3",
    language: "en",
    content: "A company runs a multi-tier web application in its VPC. The application uses an Application Load Balancer (ALB) and Amazon EC2 instances in an Auto Scaling group. The company wants to protect the application from common web vulnerabilities using AWS WAF. Which solution meets these requirements?",
    type: "single",
    options: [
      { label: "A", content: "Create an AWS WAF web ACL on the ALB. Associate the web ACL with the ALB." },
      { label: "B", content: "Install AWS WAF agents on the EC2 instances. Configure the agents to filter incoming traffic." },
      { label: "C", content: "Create AWS Shield Advanced protection. Associate the protection with the ALB." },
      { label: "D", content: "Create a network ACL in the VPC. Configure rules to filter incoming traffic." }
    ],
    correctAnswer: "A",
    explanation: {
      answer: "A",
      detail: "AWS WAF is a web application firewall that helps protect web applications from common web exploits. You can integrate AWS WAF with ALB to protect your applications from common attacks like SQL injection and cross-site scripting."
    }
  },
  {
    id: "saa-4",
    language: "en",
    content: "A company needs a solution to store and process large volumes of log files. The company generates several terabytes of log data daily. The company needs to be able to query the log data using SQL. The company also needs a solution that has minimal operational overhead. Which solution best meets these requirements?",
    type: "single",
    options: [
      { label: "A", content: "Use Amazon S3 to store the log files. Use Amazon Athena to query the data." },
      { label: "B", content: "Use Amazon EFS to store the log files. Use Amazon EMR to query the data." },
      { label: "C", content: "Run a relational database on Amazon EC2 instances. Load the log data into the database." },
      { label: "D", content: "Use Amazon DynamoDB to store the log data. Use the DynamoDB Query API to query the data." }
    ],
    correctAnswer: "A",
    explanation: {
      answer: "A",
      detail: "Amazon S3 is a highly scalable object storage service that is well-suited for storing large volumes of log files. Amazon Athena is an interactive query service that lets you use standard SQL to query data directly in Amazon S3. This combination provides a serverless solution with minimal operational overhead."
    }
  },
  {
    id: "saa-5",
    language: "en",
    content: "A company runs web applications on Amazon EC2 instances. The company needs to implement a solution to automate operating system patching. The solution should be able to generate patch compliance reports. Which solution best meets these requirements?",
    type: "single",
    options: [
      { label: "A", content: "Use AWS Systems Manager Patch Manager to manage patches. Use AWS Systems Manager Compliance to view patch compliance." },
      { label: "B", content: "Use AWS OpsWorks for Puppet Enterprise to manage patches. Use AWS Config to view patch compliance." },
      { label: "C", content: "Use Amazon Inspector to manage patches. Use Amazon CloudWatch to view patch compliance." },
      { label: "D", content: "Use AWS CloudFormation to manage patches. Use AWS Trusted Advisor to view patch compliance." }
    ],
    correctAnswer: "A",
    explanation: {
      answer: "A",
      detail: "AWS Systems Manager Patch Manager automates the process of patching operating systems and applications. It provides cross-platform patching automation and can generate detailed patch compliance reports. AWS Systems Manager Compliance provides a centralized location to view patch compliance status."
    }
  },
  {
    id: "saa-6",
    language: "en",
    content: "An ML engineer is training a simple neural network model. The ML engineer tracks the performance of the model over time on a validation dataset. The model's performance begins deteriorating after a specific number of epochs (early stopping point). What solutions will help mitigate this problem?",
    type: "multiple",
    options: [
      { label: "A", content: "Enable early stopping on the model" },
      { label: "B", content: "Increase dropout in the layers" },
      { label: "C", content: "Increase the number of layers" },
      { label: "D", content: "Investigate and reduce the sources of model bias" },
      { label: "E", content: "Similar to adding layers, increasing the number of neurons would make the model more complex and prone to overfitting" }
    ],
    correctAnswer: "A,B",
    explanation: {
      answer: "A, B",
      detail: "Early stopping and dropout are effective techniques to prevent overfitting:\n1. Early stopping stops training when validation performance starts to degrade\n2. Dropout randomly 'drops out' neurons during training, making the model more robust\n3. These techniques directly address the performance degradation issue\n4. Adding more layers (C) would increase complexity and potential overfitting\n5. Investigating bias (D) doesn't directly address the overfitting problem"
    }
  }
]