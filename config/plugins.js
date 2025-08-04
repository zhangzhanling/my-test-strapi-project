
module.exports = ({ env }) => {
    console.log('---AWS S3 CONFIG 区域---', env('ALIYUN_REGION'))
    console.log('---AWS S3 CONFIG 桶名称---', env('ALIYUN_BUCKET'))
    console.log('---AWS S3 CONFIG 密钥 id---', env('ALIYUN_ACCESS_KEY_ID'))
    console.log('---AWS S3 CONFIG 密钥 key---', env('ALIYUN_ACCESS_SECRET'))
    return {
        upload: {
            config: {
                provider: 'strapi-provider-upload-oss', // full package name is required
                providerOptions: {
                    accessKeyId: env('ALIYUN_ACCESS_KEY_ID'),  // required
                    accessKeySecret: env('ALIYUN_ACCESS_SECRET'), // required
                    region: env('ALIYUN_REGION'), // required
                    bucket: env('ALIYUN_BUCKET'), // required
                }
            }
        },
    }
};