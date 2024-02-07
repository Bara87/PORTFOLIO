import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '@/components/NotFound.vue';
import App from '@/App.vue';
import PresentationComponent from '@/components/PresentationComponent.vue';
import CreationsComponent from '@/components/CreationsComponent.vue';
import FormulaireComponent from '@/components/FormulaireComponent.vue';
import MonCV from '@/components/MonCV.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:catchAll(.*)',
      component: NotFound,
    },
    {
      path: '/home',
      component: App,
    },
    {
      path: '/presentation',
      component: PresentationComponent,
    },
    {
      path: '/creations',
      component: CreationsComponent,
    },
    {
      path: '/formulaire',
      component: FormulaireComponent,
    },
    {
      path: '/MonCV',
      component: MonCV,
    },
  ],
});

export default router;
