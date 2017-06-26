<script>
	import ProjectForm from './../../components/ProjectForm.vue';
	export default {
		created(){

		},
		data(){
			return {
				projectFormActive: false,
				ProjectForm
			};
		}
	}
</script>

<template>
	<div id="projects">
		<div class="container">
			<div class="block">
				<button type="button" 
						class="button is-primary"
						@click="projectFormActive = true">
					Add Project
				</button>
			</div>

			<b-modal
			    :active.sync="projectFormActive"
			    :component="ProjectForm"
			    :width="680">
			</b-modal>

			<div class="columns">
				<div class="column is-one-third">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								LawFormsUSA
							</p>
						</header>
						<div class="card-content">
							<div class="content">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
							</div>
						</div>
						<footer class="card-footer">
							<a class="card-footer-item">View <b-icon size="medium" icon="arrow_forward"></b-icon></a>
						</footer>
					</div>
				</div>
				<div class="column is-one-third">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								PDFFormPRO
							</p>
						</header>
						<div class="card-content">
							<div class="content">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
							</div>
						</div>
						<footer class="card-footer">
							<a class="card-footer-item">View <b-icon size="medium" icon="arrow_forward"></b-icon></a>
						</footer>
					</div>
				</div>
				<div class="column is-one-third">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								PDFRUN
							</p>
						</header>
						<div class="card-content">
							<div class="content">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
							</div>
						</div>
						<footer class="card-footer">
							<a class="card-footer-item">View <b-icon size="medium" icon="arrow_forward"></b-icon></a>
						</footer>
					</div>
				</div>
			</div>
			<div class="columns">
				<div class="column is-one-third">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								PassportUSA
							</p>
						</header>
						<div class="card-content">
							<div class="content">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
							</div>
						</div>
						<footer class="card-footer">
							<a class="card-footer-item">View <b-icon size="medium" icon="arrow_forward"></b-icon></a>
						</footer>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>