import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    
    const fileLoaderRule = config.module.rules.find((rule:any) =>
      rule.test?.test?.(".svg")
    );

    
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, 
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [/url/] }, 
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      }
    );

    
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  turbopack: {},
};

export default nextConfig;
