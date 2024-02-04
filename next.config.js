// const withPlugins = require("next-compose-plugins");
// const withImages = require("next-images");
// module.exports = withPlugins([], {});
// module.exports = withImages();


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // reactStrictMode: true,
//     // images: {
//     //     domains: ["https://korean-shop.softwaregiantbd.com"],
//     //     formats: ["image/webp"],
//     // },
//     images: {
//         remotePatterns: [
//           {
//             protocol: 'https',
//             hostname: 'korean-shop.softwaregiantbd.com',
//             // port: '',
//             // pathname: '/image/**',
//           },
//         ],
//       },
// }

// module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ksb.softwaregiantbd.com',
          port: '',
          pathname: '/images/**',
        },
      ],
    },
  }