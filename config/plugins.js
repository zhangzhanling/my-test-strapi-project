
module.exports = ({ env }) => {
    console.log('---AWS S3 CONFIG 区域---', env('AWS_REGION'))
    console.log('---AWS S3 CONFIG 桶名称---', env('AWS_BUCKET'))
    console.log('---AWS S3 CONFIG 密钥 id---', env('AWS_ACCESS_KEY_ID'))
    console.log('---AWS S3 CONFIG 密钥 key---', env('AWS_ACCESS_SECRET'))
    return {
        upload: {
            config: {
                provider: 'aws-s3',
                providerOptions: {
                    s3ForcePathStyle: true,
                    s3Options: {
                        credentials: {
                            accessKeyId: env('AWS_ACCESS_KEY_ID'),
                            secretAccessKey: env('AWS_ACCESS_SECRET'),
                        },
                        region: env('AWS_REGION', 'ap-southeast-2'),
                        params: {
                            Bucket: env('AWS_BUCKET'),
                            ACL: null,
                        },
                    },
                    actionOptions: {
                        upload: {
                            ACL: null,
                        },
                        uploadStream: {
                            ACL: null,
                        },
                        delete: {},
                    },
                }
            },
        },
    }
};