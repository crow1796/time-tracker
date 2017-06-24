<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="csrf-token" value="{{ csrf_token() }}">
	<title>Time Tracker</title>
	{{-- <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css"> --}}
	<link rel="stylesheet" type="text/css" href="{{ url('/css/app.css') }}">
</head>
<body>
	<div id="app">
		
	</div>
	<script src="{{ url('/js/app.js') }}"></script>
</body>
</html>