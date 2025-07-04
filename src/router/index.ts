import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const ProjectsPage = () => import('../views/ProjectsPage.vue')
const ProjectDetailsPage = () => import('../views/ProjectDetailsPage.vue')
const ExperiencesPage = () => import('../views/ExperiencesPage.vue')
const ExperienceDetailsPage = () => import('../views/ExperienceDetailsPage.vue')

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
  }
}

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage,
		meta: { 
			title: 'Abdullah Syafiq'
		}
	},
	{
		path: '/projects',
		name: 'projects',
		component: ProjectsPage,
		meta: { 
			title: 'Projects | Abdullah Syafiq'
		}
	},
	{
		path: '/projects/:projectId',
		name: 'project-details',
		component: ProjectDetailsPage,
		meta: { 
			title: 'Project Details | Abdullah Syafiq'
		}
	},
	{
		path: '/experiences',
		name: 'experiences',
		component: ExperiencesPage,
		meta: { 
			title: 'Experiences | Abdullah Syafiq'
		}
	},
	{
		path: '/experiences/:experienceId',
		name: 'experience-details',
		component: ExperienceDetailsPage,
		meta: { 
			title: 'Experience Details | Abdullah Syafiq'
		}
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: NotFoundPage,
		meta: { 
			title: 'Page Not Found | Abdullah Syafiq'
		}
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach((to, _from, next) => {
	document.title = to.meta.title as string || 'Abdullah Syafiq'
	next()
})

export default router