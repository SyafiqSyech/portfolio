import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import ProjectDetailsPage from '../views/ProjectDetailsPage.vue'
import ExperiencesPage from '../views/ExperiencesPage.vue'
import ExperienceDetailsPage from '../views/ExperienceDetailsPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/projects',
		name: 'projects',
		component: ProjectsPage
	},
	{
		path: '/projects/:projectId',
		name: 'project-details',
		component: ProjectDetailsPage
	},
	{
		path: '/experiences',
		name: 'experiences',
		component: ExperiencesPage
	},
	{
		path: '/experiences/:experienceId',
		name: 'experience-details',
		component: ExperienceDetailsPage
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: NotFoundPage
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router