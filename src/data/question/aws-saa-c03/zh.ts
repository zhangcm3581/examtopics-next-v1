import { ExamQuestion } from '@/lib/types/question'

export const saaC03ZhQuestions: ExamQuestion[] = [
  {
    id: "saa-1",
    language: "zh",
    type: "single",
    content: "一家公司正准备在AWS云中推出面向公众的网络应用程序。该体系结构由弹性负载均衡器（ELB）后面的专有网络中的AmazonEC2实例组成。DNS使用第三方服务。公司的解决方案架构师必须推荐一种解决方案来检测和防范大规模DDoS攻击。哪种解决方案符合这些要求？",
    options: [
      { label: "A", content: "在帐户上启用Amazon GuardDuty" },
      { label: "B", content: "在EC2实例上启用Amazon Inspector" },
      { label: "C", content: "启用AWS Shield并将Amazon Route 53分配给它" },
      { label: "D", content: "启用AWS Shield Advanced并将ELB分配给它" }
    ],
    correctAnswer: "D",
    explanation: {
      answer: "D",
      detail: "AWS Shield Advanced可以为较大且更复杂的攻击提供成本效益高的保护。它可以保护部署在Amazon EC2，Elastic Load Balancing (ELB)，Amazon CloudFront，AWS Global Accelerator等上的AWS应用程序免受DDoS攻击的影响。"
    }
  },
  {
    id: "saa-2",
    language: "zh",
    type: "single",
    content: "一家公司有数千台边缘设备，它们每天总共生成1 TB的状态警报。每个警报的大小约为2 KB。解决方案架构师需要实现一个解决方案来接收和存储警报，以便将来进行分析。该公司想要一个高可用性的解决方案。然而，该公司需要将成本降至最低，并且不希望管理额外的基础设施。此外，该公司希望保留14天的数据以供即时分析，并存档任何超过14天的任何数据。满足这些要求的MOST操作效率解决方案是什么？",
    options: [
      { label: "A", content: "创建一个Amazon Kinesis Data Firehose传输流来接收警报。配置Kinesis Data Firehose流，将警报发送到Amazon S3存储桶。设置S3生命周期配置，以便在14天后将数据转换到Amazon S3 Glacier。" },
      { label: "B", content: "跨两个可用性区域启动AmazonEC2实例，并将它们放在弹性负载均衡器后面以接收警报。在EC2实例上创建一个脚本，将警报存储在AmazonS3存储桶中。设置S3生命周期配置，以便在14天后将数据转换到Amazon S3 Glacier。" },
      { label: "C", content: "创建一个Amazon Kinesis Data Firehose传输流来接收警报。配置Kinesis Data Firehose流以将警报传递到Amazon OpenSearch Service（Amazon Elasticsearch Service）集群。设置Amazon OpenSearch Service（Amazon Elasticsearch Service）集群，以便每天手动拍摄快照，并从集群中删除超过14天的数据。" },
      { label: "D", content: "创建一个Amazon简单队列服务（Amazon SQS）标准队列来接收警报，并将消息保留期设置为14天。配置使用者轮询SQS队列，检查消息的期限，并根据需要分析消息数据。如果消息是14天前的消息，那么消费者应该将消息复制到AmazonS3存储桶中，并从SQS队列中删除该消息。" }
    ],
    correctAnswer: "A",
    explanation: {
      answer: "A",
      detail: "Amazon Kinesis Data Firehose 的设计目的是自动缩放以匹配您的数据吞吐量，并且不需要持续管理。它可以捕获，转换并将数据流加载到AWS数据存储中。Amazon S3提供简单的存储服务，按照要求，在14天后，您可以过渡到 S3 Glacier进行成本有效的长期存储。"
    }
  },
  {
    id: "saa-3",
    language: "zh",
    type: "single",
    content: "一家公司在其VPC中运行多层Web应用程序。应用程序使用Application Load Balancer（ALB）和Auto Scaling组中的Amazon EC2实例。该公司希望通过使用AWS WAF来保护应用程序免受常见的Web漏洞的攻击。哪种解决方案可以满足这些要求？",
    options: [
      { label: "A", content: "在ALB上创建AWS WAF Web ACL。将Web ACL与ALB关联。" },
      { label: "B", content: "在EC2实例上安装AWS WAF代理。配置代理以过滤传入的流量。" },
      { label: "C", content: "创建AWS Shield Advanced保护。将保护与ALB关联。" },
      { label: "D", content: "在VPC中创建网络ACL。配置规则以过滤传入的流量。" }
    ],
    correctAnswer: "A",
    explanation: {
      answer: "A",
      detail: "AWS WAF是一种Web应用程序防火墙，可以帮助保护Web应用程序免受常见的Web漏洞的攻击。您可以将AWS WAF与ALB集成，以保护您的应用程序免受SQL注入和跨站点脚本等常见攻击。"
    }
  },
  {
    id: "saa-4",
    language: "zh",
    type: "single",
    content: "一家公司需要一个解决方案来存储和处理大量的日志文件。该公司每天生成数TB的日志数据。该公司需要能够使用SQL查询日志数据。该公司还需要一个解决方案，该解决方案具有最低的运营开销。哪种解决方案最符合这些要求？",
    options: [
      { label: "A", content: "使用Amazon S3存储日志文件。使用Amazon Athena查询数据。" },
      { label: "B", content: "使用Amazon EFS存储日志文件。使用Amazon EMR查询数据。" },
      { label: "C", content: "在Amazon EC2实例上运行关系数据库。将日志数据加载到数据库中。" },
      { label: "D", content: "使用Amazon DynamoDB存储日志数据。使用DynamoDB查询API查询数据。" }
    ],
    correctAnswer: "A",
    explanation: {
      answer: "A",
      detail: "Amazon S3是一个高度可扩展的对象存储服务，非常适合存储大量日志文件。Amazon Athena是一个交互式查询服务，可让您使用标准SQL直接查询存储在Amazon S3中的数据。这种组合提供了一个无服务器解决方案，具有最低的运营开销。"
    }
  },
  {
    id: "saa-5",
    language: "zh",
    type: "single",
    content: "一家公司在Amazon EC2实例上运行Web应用程序。该公司需要实现一个解决方案来自动执行操作系统补丁。该解决方案应该能够生成补丁合规性报告。哪种解决方案最符合这些要求？",
    options: [
      { label: "A", content: "使用AWS Systems Manager Patch Manager管理补丁。使用AWS Systems Manager Compliance查看补丁合规性。" },
      { label: "B", content: "使用AWS OpsWorks for Puppet Enterprise管理补丁。使用AWS Config查看补丁合规性。" },
      { label: "C", content: "使用Amazon Inspector管理补丁。使用Amazon CloudWatch查看补丁合规性。" },
      { label: "D", content: "使用AWS CloudFormation管理补丁。使用AWS Trusted Advisor查看补丁合规性。" }
    ],
    correctAnswer: "A",
    explanation: {
      answer: "A",
      detail: "AWS Systems Manager Patch Manager可以自动化操作系统和应用程序的补丁过程。它提供了跨操作系统的补丁自动化，并可以生成详细的补丁合规性报告。AWS Systems Manager Compliance提供了一个集中的位置来查看补丁合规性状态。"
    }
  },
  {
    id: "saa-6",
    language: "zh",
    type: "multiple",
    content: "一位ML工程师正在训练一个简单的神经网络模型。该工程师在验证数据集上跟踪模型的性能。模型的性能在特定数量的训练周期后开始下降。哪些解决方案可以帮助缓解这个问题？",
    options: [
      { label: "A", content: "在模型上启用早停" },
      { label: "B", content: "增加层中的dropout" },
      { label: "C", content: "增加层数" },
      { label: "D", content: "调查并减少模型偏差的来源" },
      { label: "E", content: "与添加层类似，增加神经元数量会使模型更复杂并容易过拟合" }
    ],
    correctAnswer: "A,B",
    explanation: {
      answer: "A, B",
      detail: "早停和dropout是防止过拟合的有效技术：\n1. 早停会在验证性能开始下降时停止训练\n2. Dropout在训练期间随机'丢弃'神经元，使模型更稳健\n3. 这些技术直接解决了性能下降问题\n4. 添加更多层（C）会增加复杂性和潜在的过拟合\n5. 调查偏差（D）并不直接解决过拟合问题"
    }
  }
]