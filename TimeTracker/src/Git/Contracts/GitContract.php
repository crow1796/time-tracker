<?php 
namespace TimeTracker\Git\Contracts;

interface GitContract{
	public function createProject($projectData = array());
	public function createBranch($branchData = array());
}