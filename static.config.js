// flow
import React from 'react'

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
  ]
}
