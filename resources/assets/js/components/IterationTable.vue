<script>
	import TicketForm from './TicketForm.vue';
	export default {
		created(){
			_.map(this.tableData, (task) => {
				if(!task.timerModel){
					task.task.status = 'NOT YET STARTED';
				}
			});
		},
		data(){
			return {
				tableData: [
		            {"id":1, "ticket_id":"202901", "task":{"title": "Task #1", "description": "Task Desc #1", status: null}, timer: null, timerModel: null, selected: false},
		            {"id":2, "ticket_id":"202902", "task":{"title": "Task #2", "description": "Task Desc #2", status: null}, timer: null, timerModel: null, selected: false},
		            {"id":3, "ticket_id":"202903", "task":{"title": "Task #3", "description": "Task Desc #3", status: null}, timer: null, timerModel: null, selected: false},
		            {"id":9, "ticket_id":"202904", "task":{"title": "Task #4", "description": "Task Desc #4", status: null}, timer: null, timerModel: null, selected: false},
		            {"id":5, "ticket_id":"202905", "task":{"title": "Task #5", "description": "Task Desc #5", status: null}, timer: null, timerModel: null, selected: false},
		            {"id":6, "ticket_id":"202906", "task":{"title": "Task #6", "description": "Task Desc #6", status: null}, timer: null, timerModel: null, selected: false},
		            {"id":7, "ticket_id":"202907", "task":{"title": "Task #7", "description": "Task Desc #7", status: null}, timer: null, timerModel: null, selected: false},
		            {"id":8, "ticket_id":"202908", "task":{"title": "Task #8", "description": "Task Desc #8", status: null}, timer: null, timerModel: null, selected: false},
		            {"id":9, "ticket_id":"202909", "task":{"title": "Task #9", "description": "Task Desc #9", status: null}, timer: null, timerModel: null, selected: false},
		            {"id":10, "ticket_id":"202910", "task":{"title": "Task #10", "description": "Task Desc #10", status: null}, timer: null, timerModel: null, selected: false}
		        ],
				checkedRows: [],
				isBordered: false,
				isStriped: true,
				isNarrowed: false,
				isCheckable: true,
				isLoading: false,
				hasMobileCards: true,
				isPaginated: true,
				isPaginationSimple: false,
				perPage: 10,
				iterationTitle: null,
				filteredDataArray: [],
				selectedIteration: null,
				ticketFormActive: false,
				TicketForm,
				filter: {
					project: null,
					iteration: null,
					status: '',
					keyword: null
				}
			};
		},
		methods: {
			trackerSwitchChanged(task){
				this.isLoading = true;
				let hasEvent = false;
				if(task.timer){
					hasEvent = true;
				}
				task.timer = task.timer ? task.timer : new Timer();
				if(!hasEvent){
					task.timer.addEventListener('secondsUpdated', (e) => {
					    task.timerModel = task.timer.getTimeValues().toString();
					});
				}
				if(task.selected){
					task.timer.start();
					this.changeStatusOf(task.task, 'IN PROGRESS');
					this.isLoading = false;
					return true;
				}
				task.timer.pause();
				this.changeStatusOf(task.task, 'PAUSED');
				this.isLoading = false;
			},
			changeStatusOf(task, status){
				task.status = status;
			},
			__taskStatusIs(taskStatus, status){
				return _.includes(!_.isArray(status) ? [status] : status, taskStatus);
			}
		}
	}
</script>

<template>
	<div id="iteration-table">
		<div class="block">
			<div class="levels">
				<div class="level-left">
					<div class="level-item">
						<button type="button" 
								class="button is-primary"
								@click="ticketFormActive = true">
							Add Ticket
						</button>
					</div>
				</div>
				<div class="level-right">
					<div class="level-item has-text-right">
						<a href="#">Create new Iteration</a>
					</div>
				</div>
			</div>
		</div>

		<b-modal
		    :active.sync="ticketFormActive"
		    :component="TicketForm"
		    :width="680">
		</b-modal>

		<div class="block filter">
    		<div class="field is-grouped">
    			<b-autocomplete
    			    v-model="iterationTitle"
    			    placeholder="Select a Project"
    			    :data="filteredDataArray"
    			    @select="option => filter.project = option">
    			</b-autocomplete>
    			<b-autocomplete
    			    v-model="iterationTitle"
    			    placeholder="Select an Iteration"
    			    :data="filteredDataArray"
    			    @select="option => filter.iteration = option">
    			</b-autocomplete>
    			<b-select placeholder="Filter By Status" v-model="filter.status">
	    			<option value="">All</option>
	    			<option value="IN PROGRESS">In Progress</option>
					<option value="CODE REVIEW">Code Review</option>
					<option value="NOT YET STARTED">Not Yet Started</option>
					<option value="REVIEWING">Reviewing</option>
					<option value="RE-OPEN">Re-Open</option>
					<option value="WITH DEFECTS">With Defects</option>
					<option value="REQUEST MERGE">Request Merge</option>
					<option value="TEST-DEV">Test-Dev</option>
					<option value="TEST-STAGING">Test-Staging</option>
					<option value="TEST-MASTER">Test-Master</option>
					<option value="CLOSED">Closed</option>
					<option value="PROCESSING">Processing</option>
    			</b-select>
				<b-input placeholder="Filter By Keyword" v-model="filter.keyword"></b-input>
    		</div>
		</div>
		<b-table
		    :data="tableData"
		    :bordered="isBordered"
		    :striped="isStriped"
		    :narrowed="isNarrowed"
		    :checkable="isCheckable"
		    :loading="isLoading"
		    :mobile-cards="hasMobileCards"
		    :paginated="isPaginated"
		    :per-page="perPage"
		    :pagination-simple="isPaginationSimple"
		    default-sort="ticket_id"
		    :checked-rows.sync="checkedRows">

		    <template scope="props">
		        <b-table-column field="ticket_id" label="Ticket ID" sortable>
		            {{ props.row.ticket_id }}
		        </b-table-column>

		        <b-table-column field="task.title" label="Title" sortable>
		            {{ props.row.task.title }}
		        </b-table-column>

		        <b-table-column field="task.description" label="Description" sortable>
		            {{ props.row.task.description }}
		        </b-table-column>

		        <b-table-column field="task.status" label="Status" sortable>
		            <span class="tag" :class="{ 
		            'is-dark': __taskStatusIs(props.row.task.status, ['NOT YET STARTED']),
		            'is-black': __taskStatusIs(props.row.task.status, ['CLOSED']), 
		            'is-primary': __taskStatusIs(props.row.task.status, ['IN PROGRESS', 'CODE REVIEW', 'REQUEST MERGE']), 'is-success': __taskStatusIs(props.row.task.status, ['TEST-DEV', 'TEST-STAGING', 'TEST-MASTER']), 
		            'is-warning': __taskStatusIs(props.row.task.status, ['REVIEWING', 'PAUSED']), 
		            'is-danger': __taskStatusIs(props.row.task.status, ['RE-OPEN', 'WITH DEFECTS', 'PROCESSING'])
		            }">{{ props.row.task.status }}</span>
		        </b-table-column>

		        <b-table-column field="ticket_id" label="Tracker">
					<b-switch @change="trackerSwitchChanged(props.row)" v-model="props.row.selected">{{ props.row.timerModel ? props.row.timerModel : '00:00:00' }}</b-switch>
		        </b-table-column>

                <b-table-column label="">
        			<b-dropdown :narrowed="true" v-if="!__taskStatusIs(props.row.task.status, ['IN PROGRESS', 'PROCESSING'])">
        			    <button class="button is-small" slot="trigger">
        			        Action
        			    </button>
						<b-dropdown-option @click="changeStatusOf(props.row.task, 'PROCESSING')">
							<b-icon size="is-small" icon="call_merge"></b-icon>
							Create Merge Request
						</b-dropdown-option>
        			    <b-dropdown-option separator />
        			    <b-dropdown-option @click="changeStatusOf(props.row.task, 'CODE REVIEW')">
        			    	<b-icon size="is-small" icon="spellcheck"></b-icon>
        			    	Code Review
        			    </b-dropdown-option>
        			    <b-dropdown-option @click="changeStatusOf(props.row.task, 'REVIEWING')">
        			    	<b-icon size="is-small" icon="spellcheck"></b-icon>
        			    	Reviewing
        			    </b-dropdown-option>
        			    <b-dropdown-option separator />
        			    <b-dropdown-option @click="changeStatusOf(props.row.task, 'RE-OPEN')">
        			    	<b-icon size="is-small" icon="error"></b-icon>
        			    	Re-Open
        			    </b-dropdown-option>
        			    <b-dropdown-option @click="changeStatusOf(props.row.task, 'WITH DEFECTS')">
        			    	<b-icon size="is-small" icon="phonelink_off"></b-icon>
        			    	With Defects
        			    </b-dropdown-option>
        			    <b-dropdown-option separator />
        			    <b-dropdown-option @click="changeStatusOf(props.row.task, 'REQUEST MERGE')">
        			    	<b-icon size="is-small" icon="call_merge"></b-icon>
        			    	Request Merge
        			    </b-dropdown-option>
        			    <b-dropdown-option @click="changeStatusOf(props.row.task, 'TEST-DEV')">
        			    	<b-icon size="is-small" icon="tune"></b-icon>
        			    	Test-DEV
        			    </b-dropdown-option>
        			    <b-dropdown-option @click="changeStatusOf(props.row.task, 'TEST-STAGING')">
        			    	<b-icon size="is-small" icon="done"></b-icon>
        			    	Test-STAGING
        			    </b-dropdown-option>
        			    <b-dropdown-option @click="changeStatusOf(props.row.task, 'TEST-MASTER')">
        			    	<b-icon size="is-small" icon="done_all"></b-icon>
        			    	Test-MASTER
        			    </b-dropdown-option>
        			    <b-dropdown-option @click="changeStatusOf(props.row.task, 'CLOSED')">
        			    	<b-icon size="is-small" icon="check_circle"></b-icon>
        			    	Close
        			    </b-dropdown-option>
        			    <b-dropdown-option @click="changeStatusOf(props.row.task, 'NOT YET STARTED')">
        			    	<b-icon size="is-small" icon="done_all"></b-icon>
        			    	Not Yet Started
        			    </b-dropdown-option>
        			    <b-dropdown-option separator />
        			    <b-dropdown-option>
        			    	<b-icon size="is-small" icon="mode_edit"></b-icon>
        			    	Edit
        			    </b-dropdown-option>
        			    <b-dropdown-option>
        			    	<b-icon size="is-small" icon="delete_forever"></b-icon>
        			    	Delete
        			    </b-dropdown-option>
        			</b-dropdown>
                </b-table-column>
		    </template>
		</b-table>
	</div>
</template>