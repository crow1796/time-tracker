<script>
	export default {
		data(){
			return {
				ticket: {
					title: null,
					description: '',
					branch_name: null,
					project_id: 5468,
					asana_link: '',
					git_branch_link: ''
				},
				projectName: null,
				filteredProjectArray: [],
				selectedProject: null
			};
		},
		watch: {
			'ticket.title'(to, from){
				this.ticket.branch_name = '{Ticket #}_' + (to.trim().toLowerCase()).replace(/\W/g, '_');
			}
		}
	}
</script>

<template>
	<div id="ticket-form">
		<form class="box" id="login-form">
			<h3 class="title is-3">Create new Project</h3>
			<b-field label="Project Name:">
			    <b-input placeholder="Enter Project Name" v-model="ticket.title"></b-input>
			</b-field>
			<b-field label="Description:">
			    <b-input type="textarea" placeholder="Enter Project Description" v-model="ticket.description"></b-input>
			</b-field>
			<div class="field">
			    <b-checkbox>Create Asana Project</b-checkbox>
			    <b-checkbox>Create Git Project</b-checkbox>
			</div>
			<div class="has-text-right">
				<button type="submit" class="button is-primary">
					Create
				</button>
			</div>
		</form>
	</div>
</template>