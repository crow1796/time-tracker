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
					git_branch_link: '',
					estimate: 0
				},
				projectName: null,
				filteredProjectArray: [],
				selectedProject: null,
				iterationName: null,
				filteredIterationArray: [],
				selectedIteration: null
			};
		},
		methods: {
			selectProject(option){
				this.selectedProject = option;
			},
			selectIteration(option){
				this.selectedIteration = option;
			}
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
			<h3 class="title is-3">Create new Ticket</h3>
			<b-field label="Title:">
			    <b-input placeholder="Enter Ticket Title" v-model="ticket.title"></b-input>
			</b-field>
			<b-field label="Description:">
			    <b-input placeholder="Enter Iteration Description" type="textarea" v-model="ticket.description"></b-input>
			</b-field>
			<b-field label="Project:">
				<b-autocomplete
				    v-model="projectName"
				    placeholder="Select a Project"
				    :data="filteredProjectArray"
				    @select="selectProject">
				</b-autocomplete>
			</b-field>
			<b-field label="Iteration:">
				<b-autocomplete
				    v-model="iterationName"
				    placeholder="Select a Iteration"
				    :data="filteredIterationArray"
				    @select="selectIteration">
				</b-autocomplete>
			</b-field>
			<div class="field">
			    <b-checkbox>Create Asana Task</b-checkbox>
			</div>
			<div class="has-text-right">
				<button type="submit" class="button is-primary">
					Create
				</button>
			</div>
		</form>
	</div>
</template>