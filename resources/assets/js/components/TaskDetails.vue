<script>
	export default {
		data(){
			return {
				task: {
					created_by: {
						id: 1,
						first_name: 'Joshua',
						last_name: 'Tundag'
					},
					assignee: {
						id: 1,
						first_name: 'Joshua',
						last_name: 'Tundag'
					},
					status: 'NOT YET STARTED',
					ticket_id: 202901,
					title: 'New Form: TOS',
					git_branch: '',
					asana_id: '',
					description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, quia tenetur facere dicta maxime perspiciatis nesciunt perferendis totam saepe, natus atque quae excepturi aut asperiores quasi quidem sit, reiciendis maiores.',
					project: {
						id: '4',
						title: 'LawFormsUSA'
					},
					iteration: 1711
				}
			};
		},
		methods: {
			__taskStatusIs(taskStatus, status){
				return _.includes(!_.isArray(status) ? [status] : status, taskStatus);
			}
		}
	}
</script>

<template>
	<div id="iteration-details">
		<div class="box">
			<h3 class="title is-3">{{ task.title }}</h3>
			<div class="field">
				<router-link to="/">
					<b>{{ task.assignee.first_name }} {{ task.assignee.last_name }}</b>
				</router-link>
				<span class="tag is-pulled-right" :class="{ 
				'is-dark': __taskStatusIs(task.status, ['NOT YET STARTED']),
				'is-black': __taskStatusIs(task.status, ['CLOSED']), 
				'is-primary': __taskStatusIs(task.status, ['IN PROGRESS', 'CODE REVIEW', 'REQUEST MERGE']), 'is-success': __taskStatusIs(task.status, ['TEST-DEV', 'TEST-STAGING', 'TEST-MASTER']), 
				'is-warning': __taskStatusIs(task.status, ['REVIEWING', 'PAUSED']), 
				'is-danger': __taskStatusIs(task.status, ['RE-OPEN', 'WITH DEFECTS', 'PROCESSING'])
				}">{{ task.status }}</span>
			</div>
			<div class="field">
				<b>Ticket ID:</b> {{ task.ticket_id }}
			</div>
			<div class="field">
				<b>Description:</b> <span v-html="task.description"></span>
			</div>
			<div class="field">
				<b-checkbox :disabled="task.asana_id" :value="true">Has Asana Task</b-checkbox>
				<b-checkbox :disabled="task.git_branch" :value="true">Has Git Branch</b-checkbox>
			</div>
			<div class="field">
				<div>
					<b>Project:</b> <router-link to="/">LawFormsUSA</router-link> 
					<div class="is-pulled-right">
						<b>Iteration:</b> <router-link to="/">1711</router-link>
					</div>
				</div>
			</div>
			<b-field>
			    <p class="control">
			    	<button type="button" class="button is-small">
			    		Create Git Branch
			    	</button>
			        <button class="button is-small">
			            Generate Asana Link
			        </button>
			    </p>
			    <b-dropdown>
			        <button class="button is-small" slot="trigger">
			            <b-icon icon="arrow_drop_down"></b-icon>
			        </button>

			        <b-dropdown-option>Manually Link to Asana</b-dropdown-option>
			    </b-dropdown>
			</b-field>
			<div class="has-text-right">
				<button type="button" class="button is-primary">
					Start
				</button>
			</div>
		</div>
	</div>
</template>