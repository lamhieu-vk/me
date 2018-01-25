export default {
  getSiteProps: () => ({
    title: 'lamhieu'
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home'
    },
    {
      is404: true,
      component: 'src/containers/Home'
    }
  ],
  siteRoot: 'https://lamhieu.info',
  paths: {
    src: 'src', // The source directory. Must include an index.js entry file.
    dist: 'build', // The production output directory.
    devDist: 'dist', // The development scratch directory.
    public: 'public' // The public directory (files copied to dist during build)
  },
}
