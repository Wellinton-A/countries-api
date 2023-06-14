/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

// eslint-disable-next-line no-undef
module.exports = nextConfig

// eslint-disable-next-line no-undef
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname:
          '/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png'
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}
