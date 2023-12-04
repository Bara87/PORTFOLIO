import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue'
import PresentationComponent from '@/components/PresentationComponent.vue';
import CreationsComponent from '@/components/CreationsComponent.vue';
import FormulaireComponent from '@/components/FormulaireComponent.vue';
import MonCV from '@/components/MonCV.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
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
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    meta: { is404: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;