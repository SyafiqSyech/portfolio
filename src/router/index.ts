import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import ProjectDetailsPage from '../views/ProjectDetailsPage.vue'
import ExperienceDetailsPage from '../views/ExperienceDetailsPage.vue'

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
		path: '/:experienceId',
		name: 'experience-details',
		component: ExperienceDetailsPage
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router