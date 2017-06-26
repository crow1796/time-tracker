<?php 
namespace TimeTracker\TaskManager\Contracts;

interface TaskManagerContract {
	public function createProject($projectData = array());
	public function createTask($taskData = array());
}