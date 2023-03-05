import { createRouter, createMemoryHistory } from 'vue-router'
import VisualizationPage from '../pages/VisualizationPage.vue'

const routes = [
  {
    path: '/',
    name: 'Visualization',
    component: VisualizationPage
  },
]
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
